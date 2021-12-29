import React from 'react';

export default function Form() {
  return (
    <div className="">
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2 ">
            <form action="#" method="POST">
              <div className="shadow overflow-auto">
                <div className="px-4 py-5">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-3">
                      <label
                        htmlFor="first-name"
                        className="mb-1 block text-sm font-medium text-gray-400"
                      >
                        First name:
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        required
                        className="bg-gray-700  rounded w-full text-sm text-gray-200 bg-gray-100 px-2 py-2"
                      />
                      <p className="mt-1 block text-xs text-red-400">
                        Enter your first name
                      </p>
                    </div>

                    <div className=" col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-400"
                      >
                        Last name:
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        required
                        className="bg-gray-700  rounded w-full text-sm text-gray-200 bg-gray-100 px-2 py-2"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-400"
                      >
                        Message:
                      </label>
                      <textarea
                        rows={30}
                        className="bg-gray-700  rounded w-full text-sm text-gray-200 bg-gray-100 px-2 py-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
