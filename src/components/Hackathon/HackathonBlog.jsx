export default function HackthoneBlog() {
  return (
    <>
      <div className="mx-5 md:mx-16 lg:mx-52 my-5">
        {/* hackathon basic info */}
        <div className="grid grid-flow-row grid-cols-1 bg-white shadow dark:bg-gray-800 p-5 rounded-lg">
          {/* image */}
          <div>
            <img src="/Login.jpg" className="w-20 h-20" />
          </div>
          {/* name */}
          <h1 className="my-3 text-4xl font-semibold dark:text-white ">
            Hackathon Name
          </h1>
          {/* basic info */}
          <div className="grid grid-flow-row grid-cols-1 text-gray-600 dark:text-slate-400">
            <div className="flex items-center mt-2">
              <i className="fa-solid fa-building-columns mr-2"></i>
              <h1 className="text-sm">IIIT surat</h1>
            </div>
            <div className="flex items-center mt-2">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <h1 className="text-sm">Online</h1>
            </div>
            <div className="flex items-center mt-2">
              <i className="fa-regular fa-calendar mr-2"></i>
              <h1 className="text-sm">Date</h1>
            </div>
            <div className="flex items-center mt-2">
              <i className="fa-solid fa-globe mr-2"></i>
              <h1 className="text-sm">website</h1>
            </div>
          </div>
        </div>
        {/* total register,total prize, team size,start date  */}
        <div className="grid grid-flow-rows grid-cols-1 md:grid-cols-4 my-3 rounded-lg bg-white shadow dark:bg-gray-800 p-2">
          <div className="flex items-center my-2 mx-2">
            <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="mx-2">
              <p className="text-gray-600 dark:text-slate-400">Registered</p>
              <p className="dark:text-white">111</p>
            </div>
          </div>
          <div className="flex items-center my-2 mx-2">
            <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
              <i class="fa-solid fa-people-group"></i>
            </div>
            <div className="mx-2">
              <p className="text-gray-600 dark:text-slate-400">Team Size</p>
              <p className="dark:text-white">1</p>
            </div>
          </div>
          <div className="flex items-center my-2 mx-2">
            <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div className="mx-2">
              <p className="text-gray-600 dark:text-slate-400">Prize Pool</p>
              <p className="dark:text-white">1101$</p>
            </div>
          </div>
          <div className="flex items-center my-2 mx-2">
            <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className="mx-2">
              <p className="text-gray-600 dark:text-slate-400">Deadline</p>
              <p className="dark:text-white">111</p>
            </div>
          </div>
        </div>
        {/* hackathon about */}
        <div className="my-3 rounded-lg dark:text-white bg-white shadow dark:bg-gray-800 p-2 tiptop">
          <strong>sahna</strong>
        </div>
        {/* prize */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-800 py-2">
          <div className="my-3 mx-2 text-xl dark:text-white border-l-4 border-l-blue-600 rounded-l-md pl-3 ">
            Prize
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 mb-3">
            <div className="pl-5">
              <h1 className="text-xl dark:text-white">Winner</h1>
              <h1 className="text-3xl font-bold dark:text-white">10000$</h1>
            </div>
            <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
              <i class="fa-solid fa-ranking-star text-4xl"></i>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 my-3">
            <div className="pl-5">
              <h1 className="text-xl dark:text-white">Winner 2</h1>
              <h1 className="text-3xl font-bold dark:text-white">10000$</h1>
            </div>
            <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
              <i class="fa-solid fa-ranking-star text-4xl"></i>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 my-3">
            <div className="pl-5">
              <h1 className="text-xl dark:text-white">Winner 3</h1>
              <h1 className="text-3xl font-bold dark:text-white">10000$</h1>
            </div>
            <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
              <i class="fa-solid fa-ranking-star text-4xl"></i>
            </div>
          </div>
        </div>
        {/* Contact the organisers */}
        <div className="rounded-lg bg-white shadow dark:bg-gray-800">
          <h1 className="my-3 mx-2 pt-3 text-xl dark:text-white">
            Contact the organisers
          </h1>
          <div className="flex items-center mb-2 p-2">
            <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
              <i class="fa-solid fa-address-book"></i>
            </div>
            <div className="mx-2">
              <p className="dark:text-white text-sm">Meet Patel</p>
              <p className="dark:text-white text-sm">MeetPatel@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
