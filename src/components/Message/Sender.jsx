export default function Sender() {
    return (
        <>
            <div className="flex gap-2.5 justify-end pb-0">
                <div>
                    <div className="grid mb-0">
                        <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1 dark:text-white">You</h5>
                        <div className="px-3 py-2 bg-indigo-600 rounded">
                            <h2 className="text-white text-sm font-normal leading-snug">Yes, let’s see, send your work here</h2>
                        </div>
                        <div className="justify-start items-center inline-flex">
                            <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h3>
                        </div>
                    </div>
                    <div className="justify-center">
                        <div className="grid w-fit ml-auto">
                            <div className="px-3 py-2 bg-indigo-600 rounded">
                                <h2 className="text-white text-sm font-normal leading-snug">Anyone on for lunch today</h2>
                            </div>
                            <div className="justify-start items-center inline-flex">
                                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">You</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
            </div>

        </>
    );
}
