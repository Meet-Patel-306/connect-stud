import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Sender from "../Message/Sender";
import Receiver from "../Message/Receiver";
import io from "socket.io-client";
import { toast } from "react-toastify";
import axios from "axios";

export default function Message() {
  const socketRef = useRef(null);
  // const { id } = useParams();
  const id = "67d50fcc5d4a068cb8223b5e";
  const userId = useSelector((state) => state.userData?._id);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const handleSendMessage = () => {
    if (message.length > 0) {
      const msg = {
        sender: userId,
        receiver: id,
        msg: message,
      };
      socketRef.current.emit("sendMessage", msg);
      setChats((prev) => [...prev, msg]);
      setMessage("");
      console.log(msg, message);
    } else {
      toast.warn("Empty message not send");
    }
  };
  useEffect(() => {
    console.log("Creating socket connection");
    socketRef.current = io("http://localhost:3000");

    // Join the user’s personal room
    socketRef.current.emit("join", userId);

    // Listen for new messages
    socketRef.current.on("receiveMessage", (message) => {
      console.log("Incoming message:", message);
      setChats((prev) => [...prev, message]);
    });

    return () => {
      console.log("Disconnecting socket");
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/messages/${userId}/${id}`
        );
        console.log("Previous messages:", res.data);
        setChats((pre) => [...pre, ...res.data]);
        // Optionally: setMessages(res.data)
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    if (!userId) return;
    fetchMessages();
  }, [userId]);

  useEffect(() => {
    console.log("Updated chats:", chats);
  }, [chats]);
  return (
    <>
      <div className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 mb-4">
        <img
          src="https://pagedone.io/asset/uploads/1710412177.png"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Shanay Cruz
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
        </div>
      </div>
      <div className="w-full">
        {chats.map((msg, index) => (
          <>
            {msg.sender == userId && (
              <Receiver
                key={index}
                msg={msg.msg}
                timestamp={
                  msg.timestamp ? msg.timestamp.split("T")[0] : "Unknown"
                }
              />
            )}
          </>
        ))}

        <Sender />

        <div className="w-full px-4 pb-4" />
        <div className="w-full px-4 py-2 rounded-3xl border border-gray-200 flex items-center gap-2 bg-white dark:bg-gray-900 fixed bottom-0 left-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z"
              stroke="#4F46E5"
              strokeWidth="1.6"
            />
          </svg>

          <input
            className="flex-grow bg-transparent text-black dark:text-white text-sm font-medium focus:outline-none px-2"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="flex items-center px-3 py-2 bg-indigo-600 rounded-full shadow"
            type="submit"
            onClick={handleSendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <h3 className="text-white text-xs font-semibold leading-4 px-2">
              Send
            </h3>
          </button>
        </div>
      </div>
    </>
  );
}
