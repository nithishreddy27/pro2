import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Amsterdam = ({ componentRef }) => {
  const {
    profile,
    objective,
    education,
    projects,
    work,
    skills,
    hobbies,
    languages,
    certifications,
    social,
    awards,
    layout,
  } = useResumeContext();
  console.log(profile);
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5 relative`}
      >
        {/* <div className="p-7 h-full bg-gradient-to-b from-purple-100 to-pink-50">
          <div className="flex items-start justify-between">
            <div className="flex items-center justify-center w-[25%] h-40">
              {profile && (
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src={profile?.image}
                    className="rounded-full object-cover border-4 border-white"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col w-[70%] py-2">
              <div className="flex flex-col">
                <h1 className="text-2xl italic font-bold ">
                  {rename(profile?.firstName)} {rename(profile?.lastName)}{" "}
                  {profile?.role && ` , ${profile?.role}`}
                </h1>
                <p className="text-sm text-gray-600 font-semibold tracking-wide mb-3">
                  {profile?.email} &middot; {profile?.phone}
                </p>
                {objective && (
                  <div className="markdown text-[13.5px]">
                    <MarkdownRenderer>{objective}</MarkdownRenderer>
                  </div>
                )}
              </div>
            </div>
          </div>

          {work?.filter((option) => option?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">
                  Work Experience
                </h1>
              </div>
              <div className="w-[70%]">
                {work
                  ?.filter((option) => option?.enabled === true)
                  .map((option) => (
                    <div key={option?._id} className="flex flex-col mb-2">
                      <h1 className="text-[14px] font-semibold">
                        {option?.company},{" "}
                        <span className="text-gray-500">
                          {option?.designation}
                        </span>
                        .
                      </h1>
                      <div className="italic text-[13.5px] text-gray-400 font-semibold tracking-widest mb-1">
                        {`${
                          months[new Date(option?.from).getMonth() + 1]
                        } ${new Date(option?.from).getFullYear()} - ${
                          months[new Date(option?.to).getMonth() + 1]
                        } ${new Date(option?.to).getFullYear()}`}
                      </div>
                      {option?.summary?.enabled && (
                        <div className="markdown text-[13px]">
                          <MarkdownRenderer>
                            {option?.summary?.data}
                          </MarkdownRenderer>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {education?.filter((education) => education?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">
                  Education
                </h1>
              </div>
              <div className="w-[70%]">
                {education
                  ?.filter((option) => option?.enabled === true)
                  .map((option) => (
                    <div key={option?._id} className="flex flex-col mb-2">
                      <h1 className="text-[14px] font-semibold">
                        {option?.fieldOfStudy} from {option?.institution}.
                      </h1>
                      <div className="italic text-[13.5px] text-gray-400 font-semibold tracking-widest mb-1">
                        {`${
                          months[new Date(option?.startDate).getMonth() + 1]
                        } ${new Date(option?.startDate).getFullYear()} - ${
                          months[new Date(option?.endDate).getMonth() + 1]
                        } ${new Date(option?.endDate).getFullYear()}, ${
                          option?.gpa
                        } CGPA`}
                      </div>
                      {option?.summary?.enabled && (
                        <div className="markdown text-[13px]">
                          <MarkdownRenderer>
                            {option?.summary?.data}
                          </MarkdownRenderer>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}
          {projects?.filter((project) => project?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">Projects</h1>
              </div>
              <div className="w-[70%]">
                {projects
                  ?.filter((project) => project?.enabled === true)
                  .map((project) => (
                    <div key={project?._id} className="flex flex-col mb-2">
                      <div className="flex justify-between">
                        <h1 className="text-[14px] font-semibold">
                          {project?.name}
                        </h1>
                        <div className="italic text-[13.5px] text-gray-400 font-semibold tracking-widest mb-1">
                          {`${
                            months[new Date(project?.from).getMonth() + 1]
                          } ${new Date(project?.from).getFullYear()} - ${
                            months[new Date(project?.to).getMonth() + 1]
                          } ${new Date(project?.to).getFullYear()}`}
                        </div>
                      </div>
                      {project?.summary?.enabled && (
                        <div className="markdown text-[13px]">
                          <MarkdownRenderer>
                            {project?.summary?.data}
                          </MarkdownRenderer>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {hobbies?.filter((hobby) => hobby?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">Hobbies</h1>
              </div>
              <div className="w-[70%] grid grid-cols-4 gap-2">
                {hobbies
                  ?.filter((hobby) => hobby?.enabled === true)
                  .map((hobby) => (
                    <div key={hobby?._id}>
                      <h1 className="text-[14px] font-semibold">
                        {hobby?.name}
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          )}
          {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex items-center justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">Skills</h1>
              </div>
              <div className="grid grid-cols-2 gap-2 w-[70%]">
                {skills
                  ?.filter((skill) => skill?.enabled === true)
                  .map((skill) => (
                    <div
                      key={skill?._id}
                      className="flex items-center justify-between mr-2"
                    >
                      <h1 className="text-[14px] font-semibold">
                        {skill?.name}
                      </h1>
                      <span className="text-[13px] italic text-gray-600 font-semibold">
                        {skill?.level}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {languages?.filter((language) => language?.enabled)?.length > 0 && (
            <div className="flex items-start justify-between mt-4">
              <div className="flex justify-center w-[25%]">
                <h1 className="text-gray-600 italic font-semibold">
                  Langugages
                </h1>
              </div>
              <div className="w-[70%] grid grid-cols-2 gap-2">
                {languages
                  ?.filter((language) => language?.enabled === true)
                  .map((language) => (
                    <div
                      key={language?._id}
                      className="flex items-center justify-between mr-2"
                    >
                      <h1 className="text-[14px] font-semibold">
                        {language?.name}
                      </h1>
                      <span className="text-[13px] italic text-gray-600 font-semibold">
                        {language?.fluency}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div> */}
{/* <div
                    className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-auto min-w-[210mm] object-cover overflow-auto drop-shadow-2xl flex flex-row"
                    id="largeResume"
                  > */}
                    <div className="absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
                      {profile && (
                        <>
                        <h1 className="mt-8 font-extrabold text-2xl tracking-[3px]">
                        {profile.firstName} {profile.lastName}
                      </h1>
                      <h1 className="mt-3">{profile.role}</h1>

                        </>
                      )}
                      {social && (
                        <div className="mt-5 mb-4 flex  justify-center align-middle">
                        {social.length != 0 && (
                          <>
                            {social.map((item) => (
                              <div className="mx-5 mt-1 text-[12px]" key={item.network}>
                                <span className="">
                                  <Link href={item.url}>
                                    <img
                                      src={
                                        "https://www." +
                                        item.network +
                                        ".com/favicon.ico"
                                      }
                                      className="w-5 grayscale-[40%] "
                                    />
                                  </Link>
                                </span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                      )}
                    </div>

                    <div className="flex">
                      <div className="w-[40%] h-auto bg-gray-200">
                        <div className="mt-56 mx-10 flex flex-col">
                          <div>
                            <h4 className="font-bold tracking-[4px] text-[16px] heading">
                              CONTACTS
                            </h4>
                            <hr className="w-[100%] h-1 bg-black my-2" />
                           {profile && (
                            <div className="text-[12px]">
                             <p className="font-semibold my-2 ">
                              {profile.email}
                            </p>
                            <p className="font-semibold my-2">
                              {profile.phone}
                            </p>
                            </div>
                           )}
                          </div>
                          {education && (
                            <div>
                               {education.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] text-[16px]  mt-4 heading">
                                EDUCATION
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />

                              {education.map((item) => (
                                <div
                                  className="flex flex-col text-[12px] "
                                  key={item.institution}
                                >
                                  <span className="text-black font-semibold mt-4">
                                    {item.institution}
                                  </span>
                                  <span className="mb-2 font-semibold">
                                    ({item.startDate.slice(0,4)} - {item.endDate.slice(0,4)})
                                  </span>

                                  <span className="font-semibold">
                                    {item.typeOfDegree}
                                  </span>
                                  <span className="">{item.fieldOfStudy}</span>

                                  <span className="">
                                    <b>GPA - </b> {item.gpa}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                            </div>
                          )}
                        </div>
                        {skills && (
                          <div className="mx-10 flex flex-col mt-4">
                          {skills.length != 0 && (
                            <>
                              <h4 className="font-bold text-[16px]  tracking-[4px] heading">
                                SKILLS
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {skills.map((item) => (
                                <>
                                  <div className="flex justify-between text-[12px] ">
                                    <span
                                      className="font-semibold mt-1"
                                      key={item.name}
                                    >
                                      {item.name}
                                    </span>
                                    <span className=" mt-1 mb-3 ">
                                      {item.level}
                                    </span>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </div>
                        )}
                        {awards && (
                          <div className="mx-10 flex flex-col mt-4 ">
                          {awards.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] heading text-[16px] ">
                                AWARDS
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {awards.map((item) => (
                                <div className="text-[12px] ">
                                  <p
                                    className="font-semibold mt-1 "
                                    key={item.name}
                                  >
                                    {item.name}({item.date.slice(0,4)})
                                  </p>
                                  <span className="mb-3">{item.awarder}</span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        )}
                        

                        {hobbies && (
                          <div className="mx-10 flex flex-col mt-4 ">
                          {hobbies.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                                HOBBIES
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {hobbies.map((item) => (
                                <div className="text-[12px] ">
                                  <span className="font-semibold mt-1">
                                    {item.name}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        )}


                        {languages && (
                          <div className="mx-10 flex flex-col mt-4">
                          {languages.length != 0 && (
                            <>
                              <h4 className="font-bold tracking-[4px] text-[16px]  heading">
                                LANGUAGES
                              </h4>
                              <hr className="w-[100%] h-1 bg-black my-2" />
                              {languages.map((item) => (
                                <div className="text-[12px] ">
                                  <span
                                    className="font-semibold mt-1"
                                    key={item.name}
                                  >
                                    {item.name}
                                  </span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                        )}
                        
                      </div>
                      <div className="w-[60%] h-auto mt-52 mx-10">
                        {objective && (
                          <div>
                            {objective.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] heading">
                              OBJECTIVE
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            <p className="my-4">{profile.objective}</p>
                          </>
                        )}
                          </div>
                        )}

                        {projects && (
                          <div>
                            {projects.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] text-[16px]  heading">
                              PROJECTS
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />

                            {projects.map((item) => (
                              <div className="text-[12px] ">
                                <div className="my-4">
                                  <span className="text-black text-[16px]  font-bold mt-3">
                                    {item.name} ({" "}
                                    <span className="text-black font-semibold">
                                      {item.from.slice(0,4)} to {item.to.slice(0,4)}
                                    </span>{" "}
                                    ){" "}
                                  </span>

                                  <p className="ml-4 mt-2">
                                    {item.summary.data}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                          </div>
                        )}

                        {work && (
                          <div>
                            {work.length != 0 && (
                          <>
                            <h2 className="font-bold text-[16px]  tracking-[4px] heading">
                              WORK
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {work.map((item) => (
                              <div className="text-[12px] ">
                                <div
                                  className="flex flex-col"
                                  key={item.company}
                                >
                                  {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                  <span className="text-black text-[16px]  font-bold mt-3">
                                    {item.company}{" "}
                                    <span className="font-semibold">
                                      ({item.from.slice(0,4)} to {item.to.slice(0,4)})
                                    </span>
                                  </span>
                                  <span className="text-black font-semibold mx-4">
                                    {item.designation}
                                  </span>
                                  <p className="ml-4">{item.summary.data}</p>
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                          </div>
                        )}

                        {certifications && (
                          <div>
                            {certifications.length != 0 && (
                          <>
                            <h2 className="font-bold tracking-[4px] text-[16px] mt-4 heading">
                              CERTIFICATIONS
                            </h2>
                            <hr className="w-[100%] h-1 bg-black my-1" />
                            {certifications.map((item) => (
                              <div className="text-[12px] ">
                                <div className="flex flex-col" key={item.title}>
                                  {/* <span className="text-black font-bold mt-3" >{item.name}</span> */}

                                  <span className="text-black font-bold mt-3">
                                    {item.title}
                                    <span className="font-semibold">
                                      {item.date}
                                    </span>
                                  </span>
                                  <span className="text-black font-semibold mx-4">
                                    {item.issuer}
                                  </span>
                                  {/* <p className="ml-4">{item.summary.data}</p> */}
                                </div>
                              </div>
                            ))}
                          </>
                        )}
                          </div>
                        )}

                        
                      </div>
                    </div>
                  </div>

      {/* </div> */}
    </>
  );
};
