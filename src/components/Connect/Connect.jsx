import UserCard from "./UserCard";
import Message from "../Message/Message";
export default function Connect() {
  return (
    <>
      <section
        aria-labelledby="connect-title"
        className="flex flex-col items-center bg-gray-50 dark:bg-gray-800"
      >
        <header className="py-4 lg:py-8 w-full flex justify-center">
          <h1
            id="connect-title"
            className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          >
            Connect With Us
          </h1>
        </header>

        <div className="container mx-auto bg-gray-50 dark:bg-gray-800 w-full">
          <div className="justify-center grid gap-y-10 gap-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {/* {users.map((_, index) => ( */}
            <UserCard />
            {/* ))} */}
          </div>
        </div>
        {/*<Receiver/>*/}
        {/*<Sender/>*/}
      </section>
      <Message />
    </>
  );
}
