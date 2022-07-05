const ProductCard = () => {
  return (
    <>
      <div className="container h-min-screen py-4 flex items-center justify-center mx-auto">
        <div className="md:w-[40%] w-[90%]">
          <div className="p-4 border dark:bg-slate-700 rounded-xl shadow-md">
            <div className="">
              <div className="w-full mb-3">
                <img
                  src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                  alt="Just a flower"
                  className="w-full h-60 object-fill rounded-xl"
                />
              </div>
              <div className=" space-y-4">
                {/* title */}
                <div className="flex flex-wrap ">
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-xl font-bold ml-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                      کفش روزمره مردانه Emery مدل 30604
                    </h2>
                    <div className="text-lg text-slate-700 font-semibold bg-purple-300 inline-block p-1 rounded-lg">
                      299,000 تومان
                    </div>
                  </div>
                </div>
                {/* price */}

                {/* info fields*/}
                <div>
                  <form>
                    <div className="lg:flex  py-4  text-sm text-gray-600">
                      {/* <div className="">
                        <span className="text-gray-300 text-lg whitespace-nowrap ml-3">
                          سایز
                        </span>
                        <div class="flex flex-row-reverse items-center justify-center">
                          <div class="">
                            <label
                              class="form-check-label inline-block text-gray-300"
                              for="inlineRadio10"
                            >
                              1
                            </label>
                            <input
                              class="form-check-input form-check-input appearance-none  h-4 w-4 border border-gray-300 bg-white  checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                          </div>
                          <div class="form-check form-check-inline">
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="inlineRadio20"
                            >
                              2
                            </label>
                            <input
                              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="flex-1 inline-flex items-center  mb-3">
                        <div className="w-full flex-none text-sm flex items-center text-gray-600">
                          <ul className="flex flex-row justify-center items-center space-x-reverse space-x-4">
                            <li className="">
                              <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                <a
                                  href="#blue"
                                  className="block w-3 h-3 bg-blue-600 rounded-full"
                                ></a>
                              </span>
                            </li>
                            <li className="">
                              <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                <a
                                  href="#yellow"
                                  className="block w-3 h-3  bg-yellow-400 rounded-full"
                                ></a>
                              </span>
                            </li>
                            <li className="">
                              <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                                <a
                                  href="#red"
                                  className="block w-3 h-3  bg-red-500 rounded-full"
                                ></a>
                              </span>
                            </li>
                            <li className="">
                              <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                                <a
                                  href="#green"
                                  className="block w-3 h-3  bg-green-500 rounded-full"
                                ></a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="نام و نام خانوادگی"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type=""
                        id="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="شماره همراه"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="نشانی"
                      ></textarea>
                    </div>
                    <div className="mt-4">
                      <button className="w-full text-center transition ease-in duration-300 text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 py-5">
                        <span className="text-center font-bold text-lg">
                          ادامه خرید محصول
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* add card */}
                <div className="flex space-x-2 text-sm font-medium justify-start"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
