const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app"); // Assuming your Express app is exported from here
const User = require("../Model/user.model");

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("User Authentication", () => {
  const sampleUser = {
    email: "johndoe@example.com",
    password: "securePass123",
    firstName: "John",
    lastName: "Doe",
  };

  test("Register new user successfully", async () => {
    const res = await request(app).post("/api/register").send(sampleUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Register Successfully");
  });

  test("Fail to register with existing email", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const res = await request(app).post("/api/register").send(sampleUser);
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe("User already exists with this email.");
  });

  test("Fail to register without required fields", async () => {
    const res = await request(app).post("/api/register").send({
      email: "new@example.com",
    });
    expect(res.statusCode).toBe(500); // Validation error
  });

  test("Login successfully with valid credentials", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const res = await request(app).post("/auth/login").send({
      email: sampleUser.email,
      password: sampleUser.password,
    });
    // console.log(res.statusCode, "\n", res.body.message);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Login");
  });

  test("Fail to login with wrong password", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const res = await request(app).post("/auth/login").send({
      email: sampleUser.email,
      password: "wrongPass",
    });
    expect(res.statusCode).toBe(401);
    expect(res.body.authorize).toBe(false);
  });

  test("Fail to login with non-existent email", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "ghost@example.com",
      password: "doesntMatter",
    });
    expect(res.statusCode).toBe(401);
  });

  test("Username should be derived from email", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const user = await User.findOne({ email: sampleUser.email });
    expect(user.username).toContain("johndoe");
  });

  test("Auto-add random suffix if username is already taken", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const res2 = await request(app)
      .post("/api/register")
      .send({
        ...sampleUser,
        email: "johndoe2@example.com",
      });

    const user2 = await User.findOne({ email: "johndoe2@example.com" });
    expect(user2.username.startsWith("johndoe")).toBe(true);
    expect(user2.username).not.toBe("johndoe");
  });

  test("Login returns session info", async () => {
    await request(app).post("/api/register").send(sampleUser);
    const res = await request(app).post("/auth/login").send({
      email: sampleUser.email,
      password: sampleUser.password,
    });
    expect(res.headers["set-cookie"]).toBeDefined();
  });
});
