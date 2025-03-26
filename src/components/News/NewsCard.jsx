import React from "react";

const NewsCard = () => {
    return (
        <>
            <div className="w-2xl md:w-[900px] lg:w-[1300px] bg-white dark:bg-gray-800 text-black dark:text-white p-4 mx-auto shadow-lg rounded-2xl overflow-hidden mb-4 mr-auto ml-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Image Block */}
                    <img
                        src="../../../public/360_F_210545946_H8K0CJih9ToRMqbBczgr2BLWJYcrNb1V.jpg"
                        alt="Blog"
                        className="w-80 sm:w-80 md:w-64 lg:w-64 rounded-lg object-auto mx-auto lg:mx-0"
                    />

                    {/* Text & Author Block */}
                    <div className="p-4 flex flex-col justify-between w-full lg:w-2/3">
                    <div>
                        <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                            Health
                        </span>
                        <p className="text-gray-500 text-sm mt-1">23 Aug 2023</p>
                        <h3 className="text-lg font-semibold mt-2">
                            This is the best Blog card for your business template.
                        </h3>
                    </div>

                    {/* Author & Read More Button */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://randomuser.me/api/portraits/men/45.jpg"
                                alt="Avatar"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-sm font-semibold">Fitbit Incorporation</p>
                                <p className="text-xs text-gray-500">San Diego, California</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 font-medium text-blue-500 flex items-center text-[9px] md:text-lg">
                            Read More
                        </button>
                    </div>
                    </div>
                </div>
            </div>





            
        </>
    );
};

export default NewsCard;
