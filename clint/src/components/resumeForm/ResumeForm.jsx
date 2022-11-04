import React from "react";

const ResumeForm = () => {
  return (
    <div className="mx-auto w-[1280px] mt-[30px] border-solid border-2 mb-8 border-gray-400 px-8 py-4 rounded-md">
      <h1 className="text-center text-main text-[32px]">Resume Builder</h1>
      <div>
        <h2 className="text-[22px] mb-8 font-semibold">Personal Details</h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Add Position
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add Position"
                required
              />
            </div>
            <div>
              <label for="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Photo Upload
              </label>
              <input
                type="file"
                id="file"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="file"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone"
                required
              />
            </div>
            <div>
              <label for="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Country"
                required
              />
            </div>
            <div>
              <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
                required
              />
            </div>
          </div>

          {/* summery */}
          <div className="mb-6">
            <label for="summery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Professional Summery
            </label>
            <textarea
              rows="10"
              type="text"
              id="summery"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Professional Summery"
              required
            />
          </div>

          {/* Empolyment History */}
          <div>
            <h2 className="text-[22px] mb-2 font-semibold">Employment History</h2>
            <div className="grid gap-4 mb-6 md:grid-cols-3">
              <div>
                <label for="positionName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Position Name
                </label>
                <input
                  type="text"
                  id="positionName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Position Name"
                />
              </div>
              <div>
                <label for="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Start Date"
                />
              </div>
              <div>
                <label for="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>
          {/* Education */}
          <div>
            <h2 className="text-[22px] mb-2 font-semibold">Education</h2>
            <div className="grid gap-4 mb-6 md:grid-cols-3">
              <div>
                <label for="collagename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  School / Collage Name
                </label>
                <input
                  type="text"
                  id="collagename"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="School / Collage Name"
                  required
                />
              </div>
              <div>
                <label for="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Class / Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Class / Degree"
                  required
                />
              </div>
              <div>
                <label for="passignYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Passing Year
                </label>
                <input
                  type="date"
                  id="passignYear"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Passing Year"
                  required
                />
              </div>
            </div>
          </div>
          {/* Website and Social Links  */}
          <div>
            <h2 className="text-[22px] mb-2 font-semibold">Website and Social Links</h2>
            <div className="grid gap-4 mb-2 md:grid-cols-5">
              <div>
                <label for="Website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Website
                </label>
                <input
                  type="text"
                  id="Website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Website"
                  required
                />
              </div>
              <div>
                <label for="Facebook" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Facebook
                </label>
                <input
                  type="text"
                  id="Facebook"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Facebook"
                  required
                />
              </div>
              <div>
                <label for="LinkedIn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  LinkedIn
                </label>
                <input
                  type="text"
                  id="LinkedIn"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="LinkedIn"
                  required
                />
              </div>
              <div>
                <label for="GitHub" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  GitHub
                </label>
                <input
                  type="text"
                  id="GitHub"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="GitHub"
                  required
                />
              </div>
              <div>
                <label for="Twitter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Twitter
                </label>
                <input
                  type="text"
                  id="Twitter"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Twitter"
                  required
                />
              </div>
            </div>
          </div>

          {/* add skills */}
          <div className="mb-6">
            <label for="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Add Skills
            </label>
            <input
              rows="10"
              type="text"
              id="skills"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Skills"
              required
            />
          </div>

          {/* internship */}
          <div>
            <h2 className="text-[22px] mb-2 font-semibold">Internship</h2>
            <div className="grid gap-2 mb-6 md:grid-cols-2">
              <div>
                <label for="interPosition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Position
                </label>
                <input
                  type="text"
                  id="interPosition"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Position"
                />
              </div>
              <div>
                <label for="internCompany" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  id="internCompany"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label for="interstartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="date"
                  id="interstartDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Start Date"
                />
              </div>
              <div>
                <label for="internendDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  End Date
                </label>
                <input
                  type="date"
                  id="internendDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>

          {/* Reference */}
          <div>
            <h2 className="text-[22px] mb-2 font-semibold">Reference</h2>
            <div className="grid gap-4 mb-6 md:grid-cols-3">
              <div>
                <label for="refname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="refname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                />
              </div>
              <div>
                <label for="refCompany" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Company Name
                </label>
                <input
                  type="text"
                  id="refCompany"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <label for="refposition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Position
                </label>
                <input
                  type="text"
                  id="refposition"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Position"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="refEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="refEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="refNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Number
                </label>
                <input
                  type="number"
                  id="refNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Number"
                />
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
