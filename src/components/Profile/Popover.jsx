export default function Popover({ data }) {
  return (
    <>
      <div className="absolute mx-4 z-10 inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
        <div className="p-3 space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {data}
          </h3>
        </div>
      </div>
    </>
  );
}
