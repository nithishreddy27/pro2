import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Casual = ({ componentRef, filter = null }) => {
  const { profile, objective, education, work, skills, languages,projects,certifications, social,layout,hobbies,awards } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl captialize font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
  return (
    <div ref={componentRef} className='my-5 w-a4W bg-white mx-auto h-a4H'>
      <div className='py-2 px-2 h-full' >
        {console.log("profile",social)}


{/*         
        <div className='w-full py-2 text-center '>
          <span className='text-4xl not-italic font-bold text-gray-700 '>
            {rename(profile?.firstName)} {rename(profile?.lastName)}
          </span>
        </div>
        <div className='w-full border-gray-200 py-1 text-center mb-5'>
          <span className='text-sm italic font-semibold text-gray-700 '>
            <span className={`${filter?.removePhoneNumber ? "blur" : ""}`}>
              +91 - {profile?.phone}
            </span>{" "}
            <span className={`${filter?.removeEmail ? "blur" : ""} `}>
              &middot; {profile?.email}
            </span>
          </span>
        </div>

        <div className='w-full'>
          <h1 className={headingClass}>Objective</h1>
          {objective && (
            <div className='w-full'>
              <h4 className='inline italic text-lg font-semibold '>Profile Summary</h4>
              <h4 className='markdown text-[13.5px] tracking-wide mt-3 mb-4'>
                <MarkdownRenderer>{objective}</MarkdownRenderer>
              </h4>
            </div>
          )}
        </div>

        <div className='my-8'>
          {work?.filter((option) => option?.enabled)?.length > 0 && (
            <div>
              <h4 className={headingClass}>Experience</h4>
              {work?.map((option) => {
                if (option?.enabled === true) {
                  return (
                    <div key={option?._id} className='mb-2'>
                      <div className='flex items-center justify-between'>
                        <div className='text-[15px] font-semibold flex flex-col'>
                          <span>{option?.company}</span>
                          <span className='text-[12px] capitalize font-base text-gray-600'>
                            {option?.designation}
                          </span>
                        </div>

                        <div className='text-xs font-bold text-gray-500'>
                          {`[${
                            months[new Date(option?.from?.substring(0, 10)).getMonth() + 1]
                          } ${new Date(option?.from?.substring(0, 10)).getFullYear()}] - [${
                            months[new Date(option?.to?.substring(0, 10)).getMonth() + 1]
                          } ${new Date(option?.to?.substring(0, 10)).getFullYear()}]`}
                        </div>
                      </div>

                      {option?.summary?.enabled && (
                        <div className='ml-3'>
                          &middot;{" "}
                          <span className='inline-block markdown text-xs capitalize'>
                            <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>
        {education?.filter((education) => education?.enabled)?.length > 0 && (
          <div className='w-full'>
            <h1 className={headingClass}>Education</h1>
            {education
              ?.filter((option) => option?.enabled === true)
              .map((option) => (
                <div key={option?._id} className='flex justify-between items-start mb-3 mt-2'>
                  <div className='leading-4'>
                    <h3
                      className={`${
                        option?.typeOfDegree !== "School / Intermediate" &&
                        filter?.removeCollegeName
                          ? "blur"
                          : ""
                      } text-lg font-semibold tracking-wide`}
                    >
                      {option?.institution},{" "}
                      <span className='text-sm font-semibold'>
                        {new Date(option?.endDate).getFullYear()}
                      </span>
                    </h3>
                    <span className='text-[13px]'>
                      {option?.fieldOfStudy}
                      <span className='text-sm'> &middot; {option?.gpa}</span>
                    </span>
                    {option?.summary?.enabled && (
                      <div className='ml-2 flex items-center'>
                        <span>&middot;</span>
                        <span className='markdown inline-block text-sm tracking-wide text-gray-700'>
                          <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className='my-5'>
          {(skills?.filter((skill) => skill?.enabled)?.length > 0 ||
            languages?.filter((language) => language?.enabled)?.length > 0) && (
            <div>
              <h1 className={headingClass}>Skills & Interests</h1>
              {languages?.filter((language) => language?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Language Competencies: </h2>
                    <span className='ml-3 flex'>
                      {languages
                        ?.filter((language) => language?.enabled === true)
                        .map((language, index) => (
                          <span
                            key={language?._id}
                            className='flex justify-between items-center my-1'
                          >
                            <span className='text-xs capitalize font-semibold'>
                              {language?.name}{" "}
                            </span>
                            {index !== languages.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}

              {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Skills: </h2>
                    <span className='ml-3 flex'>
                      {skills
                        ?.filter((skill) => skill?.enabled === true)
                        .map((skill, index) => (
                          <span key={skill._id} className='flex justify-between items-center my-1'>
                            <span className='text-xs  capitalize font-semibold'>
                              {skill?.name}{" "}
                            </span>
                            {index !== skills.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div> */}




            <div className="grid grid-cols-3">
                      <div>
                        <div className="col-span-1 bg-gray-300 w-[68mm] h-[285mm]">
                          {profile && (
                            <>
                            <div>
                            <img
                              className="rounded-full w-[119px] ml-10 pt-3"
                              src={profile.image}
                              alt="ProfilePhoto"
                              />
                          </div>

                          <div>
                            <h1 className="font-medium px-8 py-2 text-orange-800">
                              Details
                            </h1>
                            <h2 className=" font-medium px-8  text-black">
                              Phone
                            </h2>
                            <h6 className=" px-8 ">{profile.phone}</h6>
                            <h2 className=" font-medium px-8  text-black">
                                Email
                            </h2>
                            <h6 className=" px-8 ">{profile.email}</h6>
                            {/* <h2 className=" font-medium px-8  text-black">
                              Date Of Birth
                              </h2>
                            <h6 className=" px-8 ">{profile.dob}</h6> */}
                          </div>

                              </>
                            )}



                           {skills && (
                            <>
                                {skills.length != 0 && (
                                <div>
                                <h1 className="font-medium px-8 py-2 text-orange-800">
                                    Skills
                                </h1>
                                {skills.map((item) => (
                                    <div key={item.name}>
                                    <h1 className="font-medium ml-8">
                                        {item.name}
                                    </h1>
                                    <h2 className="ml-8">{item.level}</h2>
                                    </div>
                                ))}
                                </div>
                            )}
                            </>
                           )}
                          {awards && (
                            <div>
                                {awards.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800">
                                Awards
                              </h1>
                              {awards.map((item) => (
                                <div key={item.name}>
                                  <h1 className="font-medium ml-8">
                                    {item.name} from {item.awarder}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          )}
                            </div>
                          )}
                          {social && (
                            <div>
                                {social.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800">
                                Social Network
                              </h1>
                              {social.map((item) => (
                                <div
                                  className="ml-8 my-4 flex"
                                  key={item.network}
                                >
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    alt=""
                                    className="w-5 h-5"
                                  />
                                  <Link href={item.url}>
                                    <h1 className="ml-4">{item.username}</h1>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                            </div>
                          )}
                         {hobbies && (
                            <div>
                                 {hobbies.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800">
                                Hobbies
                              </h1>
                              {hobbies.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                            </div>
                         )}


                          {languages && (
                            <>
                                {languages.length != 0 && (
                            <div>
                              <h1 className="font-medium px-8 py-2 text-orange-800">
                                Languages
                              </h1>
                              {languages.map((item) => (
                                <div key={item.name}>
                                  <h1 className="px-8">{item.name}</h1>
                                </div>
                              ))}
                            </div>
                          )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2 ">
                       {profile && (
                        <div>
                             <h1 className="mt-12 text-2xl font-bold ">
                          {profile.firstName}{" "}
                          {profile.lastName}
                            </h1>
                            <h2 className="font-nomal mt-1 ">
                            {profile.role}
                            </h2>
                        </div>
                       )}



                       {objective && (
                        <div>
                             {objective.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-10">
                              Profile
                            </h1>
                            <p>{objective}</p>
                          </div>
                        )}
                        </div>
                       )}
                        {work && (
                            <div>
                                {work.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Employement History
                            </h1>
                            {work.map((item) => (
                              <div key={item.company}>
                                <h1 className="font-medium ">{item.company}</h1>
                                <h2 className="font-extralight text-xs">
                                  {item.from} - {item.to}
                                </h2>
                                <li className="ml-8 list-disc">
                                  {item.designation}
                                </li>
                                <li className="ml-8 list-disc">
                                  {item.website}
                                </li>
                              </div>
                            ))}
                          </div>
                        )}
                            </div>
                        )}


                        {education && (
                            <div>
                                {education.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Education
                            </h1>
                            {education.map((item) => (
                              <div key={item.institution}>
                                <h1 className="font-medium">
                                  {item.institution}
                                </h1>
                                <h6 className="text-xs">
                                  {item.startDate} - {item.endDate}
                                </h6>
                                <li className="px-8">{item.fieldOfStudy}</li>
                              </div>
                            ))}
                          </div>
                        )}
                            </div>
                        )}


                        {projects && (
                            <div>
                                {projects.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              Projects
                            </h1>
                            {projects.map((item) => (
                              <div key={item.name}>
                                <h2 className="font-medium">{item.name}</h2>
                                <h6 className="text-xs">
                                  {item.from} - {item.to}
                                </h6>
                                <li className="text-sm px-8">{item.website}</li>
                              </div>
                            ))}
                          </div>
                        )}
                            </div>
                        )}
                        {certifications && (
                            <div>
                                {certifications.length != 0 && (
                          <div>
                            <h1 className="font-medium text-orange-800 pt-4">
                              certifications
                            </h1>
                            {certifications.map((item) => (
                              <div key={item.title}>
                                <h2 className="font-medium">
                                  {item.title} from {item.issuer}
                                </h2>
                                <h6 className="text-xs">{item.date}</h6>
                              </div>
                            ))}
                          </div>
                        )}
                            </div>
                        )}
                      </div>
                    </div>
      </div>
      <style jsx> 
    {`
      .heading{
        color:rgba(${r},${g},${b},${a})
      }
    
    `}
    </style>
    </div>
  );
};
