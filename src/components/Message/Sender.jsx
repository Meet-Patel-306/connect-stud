export default function Sender({ msg, timestamp, senderImage }) {
  return (
    <>
      <div className="flex gap-2.5 justify-end pb-0 mr-5">
        <div>
          <div className="grid mb-0">
            <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1 dark:text-white">
              You
            </h5>
            <div className="px-3 py-2 bg-indigo-600 rounded">
              <h2 className="text-white text-sm font-normal leading-snug">
                {msg}
              </h2>
            </div>
            <div className="flec-col justify-end items-center mb-2.5">
              <h6 className="text-gray-500 text-xs font-normal leading-4 pt-1">
                {timestamp.split("T")[0]}
              </h6>
              <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                {timestamp.split("T")[1].split(".")[0]}
              </h6>
            </div>
          </div>
        </div>
        <img
          src={senderImage}
          alt="Hailey image"
          className="w-10 h-11 rounded-full"
        />
      </div>
    </>
  );
}
