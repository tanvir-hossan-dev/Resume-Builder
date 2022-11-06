import React from "react";
import { useState } from "react";
import { useAddResumeMutation, useGetResumesQuery } from "../../redux/featuers/resumeApi/resumeApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResumeForm = () => {
  const initialForm = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    description: "",
    emPositionName: "",
    emStartDate: "",
    emEndDate: "",
    collageName: "",
    degree: "",
    passingYear: "",
    website: "",
    facebook: "",
    linkedIn: "",
    github: "",
    twitter: "",
    addSkills: "",
    internPosition: "",
    internCompnay: "",
    internStartDate: "",
    internEndDate: "",
    refName: "",
    refCompnay: "",
    refPosition: "",
    refEmail: "",
    refPhone: "",
  };

  const [formInputs, setFormInput] = useState({ ...initialForm });
  const handleChange = (e) => {
    setFormInput({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  const { data } = useGetResumesQuery();

  const [addResume] = useAddResumeMutation();

  const isValid = (formData) => {
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      description,
      collageName,
      degree,
      passingYear,
      website,
      facebook,
      linkedIn,
      github,
      twitter,
      addSkills,
    } = formData;

    if (
      !title.length &&
      !firstName.length &&
      !lastName.length &&
      !email.length &&
      !phone.length &&
      !country.length &&
      !city.length &&
      !description.length &&
      !collageName.length &&
      !degree.length &&
      !passingYear.length &&
      !website.length &&
      !facebook.length &&
      !linkedIn.length &&
      !github.length &&
      !twitter.length &&
      !addSkills.length
    ) {
      toast.error("please fullfill your all information");
    } else if (!title.length) {
      toast.error("please fullfill your Title");
    } else if (!firstName.length) {
      toast.error("please fullfill your First Name");
    } else if (!lastName.length) {
      toast.error("please fullfill your Last Name");
    } else if (!email.length) {
      toast.error("please fullfill your Email");
    } else if (!phone.length) {
      toast.error("please fullfill your Phone");
    } else if (!country.length) {
      toast.error("please fullfill your Country");
    } else if (!city.length) {
      toast.error("please fullfill your City");
    } else if (!description.length) {
      toast.error("please fullfill your Description");
    } else if (!collageName.length || !degree.length || !passingYear.length) {
      toast.error("please fullfill your Educational Information");
    } else if (!website.length || !facebook.length || !linkedIn.length || !github.length || !twitter.length) {
      toast.error("please fullfill your Social Links");
    } else if (!addSkills.length) {
      toast.error("please fullfill your Skills");
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      description,
      emPositionName,
      emStartDate,
      emEndDate,
      collageName,
      degree,
      passingYear,
      website,
      facebook,
      linkedIn,
      github,
      twitter,
      addSkills,
      internPosition,
      internCompnay,
      internStartDate,
      internEndDate,
      refName,
      refCompnay,
      refPosition,
      refEmail,
      refPhone,
    } = formInputs;
    const formData = {
      title,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      description,
      employmentHistory: {
        emPositionName,
        emStartDate,
        emEndDate,
      },
      education: {
        collageName,
        degree,
        passingYear,
      },
      links: {
        website,
        facebook,
        linkedIn,
        github,
        twitter,
      },
      addSkills,
      internship: {
        internPosition,
        internCompnay,
        internStartDate,
        internEndDate,
      },
      reference: {
        refName,
        refCompnay,
        refPosition,
        refEmail,
        refPhone,
      },
    };
    if (isValid(formInputs)) {
      addResume(formData);
      toast.success("Form Submit Complete");
      setFormInput({ ...initialForm });
    }
  };

  return (
    <div className="mx-auto w-[1280px] mt-[30px] border-solid border-2 mb-8 border-gray-400 px-8 py-4 rounded-md">
      <h1 className="text-center text-main text-[32px]">Resume Builder</h1>
      <div>
        <h2 className="text-[22px] mb-8 font-semibold">Personal Details</h2>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Add Position
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add Position"
                required
                name="title"
                value={formInputs.title}
                onChange={handleChange}
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
              <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                name="firstName"
                value={formInputs.firstName}
                onChange={handleChange}
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
                name="lastName"
                value={formInputs.lastName}
                onChange={handleChange}
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
                name="email"
                value={formInputs.email}
                onChange={handleChange}
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
                name="phone"
                value={formInputs.phone}
                onChange={handleChange}
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
                name="country"
                value={formInputs.country}
                onChange={handleChange}
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
                name="city"
                value={formInputs.city}
                onChange={handleChange}
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
              name="description"
              value={formInputs.description}
              onChange={handleChange}
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
                  name="emPositionName"
                  value={formInputs.emPositionName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="startDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="text"
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Start Date"
                  name="emStartDate"
                  value={formInputs.emStartDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="endDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  End Date
                </label>
                <input
                  type="text"
                  id="endDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="End Date"
                  name="emEndDate"
                  value={formInputs.emEndDate}
                  onChange={handleChange}
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
                  name="collageName"
                  value={formInputs.collageName}
                  onChange={handleChange}
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
                  name="degree"
                  value={formInputs.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label for="passignYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Passing Year
                </label>
                <input
                  type="text"
                  id="passignYear"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Passing Year"
                  name="passingYear"
                  value={formInputs.passingYear}
                  onChange={handleChange}
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
                  name="website"
                  value={formInputs.website}
                  onChange={handleChange}
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
                  name="facebook"
                  value={formInputs.facebook}
                  onChange={handleChange}
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
                  name="linkedIn"
                  value={formInputs.linkedIn}
                  onChange={handleChange}
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
                  name="github"
                  value={formInputs.github}
                  onChange={handleChange}
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
                  name="twitter"
                  value={formInputs.twitter}
                  onChange={handleChange}
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
              name="addSkills"
              value={formInputs.addSkills}
              onChange={handleChange}
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
                  name="internPosition"
                  value={formInputs.internPosition}
                  onChange={handleChange}
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
                  name="internCompnay"
                  value={formInputs.internCompnay}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="interstartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Start Date
                </label>
                <input
                  type="text"
                  id="interstartDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Start Date"
                  name="internStartDate"
                  value={formInputs.internStartDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="internendDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  End Date
                </label>
                <input
                  type="text"
                  id="internendDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="End Date"
                  name="internEndDate"
                  value={formInputs.internEndDate}
                  onChange={handleChange}
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
                  name="refName"
                  value={formInputs.refName}
                  onChange={handleChange}
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
                  name="refCompnay"
                  value={formInputs.refCompnay}
                  onChange={handleChange}
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
                  name="refPosition"
                  value={formInputs.refPosition}
                  onChange={handleChange}
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
                  name="refEmail"
                  value={formInputs.refEmail}
                  onChange={handleChange}
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
                  name="refPhone"
                  value={formInputs.refPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="text-center mt-4">
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            limit={0}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
