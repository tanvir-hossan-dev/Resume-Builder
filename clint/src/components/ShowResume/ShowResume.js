import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteResumeMutation, useGetResumesQuery } from "../../redux/featuers/resumeApi/resumeApi";
import ResumeForm from "../resumeForm/ResumeForm";

const ShowResume = () => {
  const { data } = useGetResumesQuery();
  const [singleResume, setSingleResume] = useState({});
  const [editMode, setEditMode] = useState(false);

  const [deleteResuem] = useDeleteResumeMutation();

  const handleSubmit = (id) => {
    const resume = data?.filter((item) => item._id === id);
    setSingleResume(resume[0]);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    deleteResuem(id);
  };

  return data?.length === 0 ? (
    <h2>No resume is there</h2>
  ) : (
    data?.map((resume) => (
      <>
        {editMode && resume._id === singleResume._id && (
          <ResumeForm singleResume={singleResume} setEditMode={setEditMode} editMode={editMode} />
        )}
        <div
          key={resume._id}
          className="mx-auto w-[1280px] mt-[30px]  border-solid border-2 mb-8 border-gray-400 px-8 py-8 rounded-md"
        >
          <div className="text-right mb-4">
            <button
              onClick={() => handleSubmit(resume._id)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(resume._id)}
              className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
          </div>
          <div className="bg-gray-300  px-16 py-14 h-screen">
            <h1 className="text-[38px] font-semibold">{resume.title}</h1>
            <h3 className="font-semibold text-[26px] mb-4 ">{`${resume.firstName} ${resume.lastName}`}</h3>
            <div className="flex justify-between">
              <div className="w-[75%]">
                <div className="mb-4">
                  <h3 className="font-semibold text-[20px]">Profile</h3>
                  <p className="font-[16px]">{resume.description}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-[20px]">Education</h3>
                  <h4 className="text-[16px] font-semibold">{resume.education?.collageName} </h4>
                  <h4 className="text-[16px] font-semibold">{resume.education?.degree} </h4>
                  <p>{resume.education?.passingYear}</p>
                </div>
                {resume?.internship?.internPosition && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-[20px]">Internship</h3>
                    <h4 className="text-[16px] font-semibold">{resume?.internship?.internPosition}</h4>
                    <h4 className="text-[16px] font-semibold">{resume?.internship?.internCompnay}</h4>
                    <p>
                      <span>{resume?.internship?.internStartDate}</span> -{" "}
                      <span>{resume?.internship?.internEndDate}</span>{" "}
                    </p>
                  </div>
                )}

                {resume?.reference?.refEmail && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-[20px]">Reference</h3>
                    <h4 className="text-[16px] font-semibold">{resume?.reference?.refPosition}</h4>
                    <h4 className="text-[16px] font-semibold">{resume?.reference?.refCompnay}</h4>
                    <h4 className="text-[16px] font-semibold">{resume?.reference?.refEmail}</h4>
                    <p>
                      <span>{resume?.reference?.refStartDate}</span> - <span>{resume?.reference?.refEndDate}</span>{" "}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-[20%]">
                <div className="mb-4">
                  <h3 className="font-semibold text-[20px]">Contact</h3>
                  <ul className="text-[14px] font-semibold">
                    <li className="py-1"> {`${resume.city} ${resume.country}`} </li>
                    <li className="py-1"> {resume.phone} </li>
                    <li className="py-1"> {resume.email} </li>
                    <li className="py-1">
                      <a href={resume?.links?.website}>website</a>{" "}
                    </li>
                    <li className="py-1">
                      <a href={resume?.links?.facebook}>Facebook</a>{" "}
                    </li>
                    <li className="py-1">
                      <a href={resume?.links?.linkedIn}>LinkedIn</a>{" "}
                    </li>
                    <li className="py-1">
                      <a href={resume?.links?.github}>GitHub</a>{" "}
                    </li>
                    <li className="py-1">
                      <a href={resume?.links?.twitter}>Twitter</a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-[20px]">Skills</h3>
                  <ul className="font-semibold text-[14px]">
                    {resume?.addSkills.split(" ").map((item) => (
                      <>
                        <li className="py-1"> {item} </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ))
  );
};

export default ShowResume;
