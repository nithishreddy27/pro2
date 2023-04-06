import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";

import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";

export const Dynamic = ({ componentRef }) => {
  const { profile, objective, education, projects, skills, languages, layout } = useResumeContext();
  console.log("s",skills)
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  return (
    <>
      <div
        ref={componentRef}
        style={{ fontFamily: layout?.font }}
        className={`w-a4W bg-white mx-auto h-a4H my-5`}
      >
        {/* <div className='p-7'>
          <div className='flex items-center justify-between'>
            <div className='w-[20%]'>
              {profile && (
                <div className="w-36 h-36 rounded-md overflow-hidden mr-4">
                  <img
                    src={profile?.image}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <div
              className='h-36 flex flex-col justify-center px-4 w-[80%] border'
              style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 225)` }}
            >
              <div className='font-bold text-white uppercase text-3xl'>
                <span className='mr-2'>{rename(profile?.firstName)}</span>
                <span>{rename(profile?.lastName)}</span>
              </div>
              <p className='text-md font-semibold tracking-wide text-white'>{profile?.role}</p>
              <p className='text-xs mt-1 font-semibold tracking-wide text-white'>
                {profile?.email} &middot; {profile?.phone}
              </p>
            </div>
          </div>
          <div className='px-8 py-4'>
            {objective && (
              <div className='w-full'>
                <h4 className='inline italic text-lg font-bold border-b-4 border-gray-700'>
                  Profile Summary
                </h4>
                <h4 className='markdown text-[13.5px] tracking-wide mt-3 mb-4'>
                  <MarkdownRenderer>{objective}</MarkdownRenderer>
                </h4>
              </div>
            )}
            {education?.filter((option) => option?.enabled)?.length > 0 && (
              <div className='mt-4'>
                <h4 className='inline italic text-lg font-bold border-b-4 border-gray-700'>
                  Education
                </h4>
                <div className='mt-3'>
                  {education
                    ?.filter((option) => option?.enabled === true)
                    .map((option) => (
                      <div key={option?._id} className='mb-2'>
                        <div>
                          <div className='flex flex-col justify-between'>
                            <div className='text-[16px] font-semibold'>
                              {option?.fieldOfStudy} from {option?.institution}, with {option?.gpa}{" "}
                              CGPA.
                            </div>
                            <div className='uppercase text-sm text-gray-400 font-semibold tracking-widest mb-1'>
                              {`${months[new Date(option?.startDate)?.getMonth() + 1]} ${new Date(
                                option?.startDate
                              )?.getFullYear()} - ${
                                months[new Date(option?.endDate)?.getMonth() + 1]
                              } ${new Date(option?.endDate)?.getFullYear()}`}
                            </div>
                          </div>
                          {option?.summary?.enabled && (
                            <div className='markdown text-[13px]'>
                              <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {projects?.filter((project) => project?.enabled)?.length > 0 && (
              <div className='mt-4'>
                <h4 className='inline italic text-lg font-bold border-b-4 border-gray-700'>
                  Projects
                </h4>
                <div className='mt-3'>
                  {projects
                    ?.filter((project) => project?.enabled === true)
                    .map((project) => (
                      <div key={project?._id} className='mb-2'>
                        <div>
                          <div className='flex justify-between'>
                            <div className='text-[16px] font-semibold'>{project?.name}</div>
                            <div className='relative font-semibold text-sm '>
                              <div>{project?.website}</div>
                              <div className='absolute w-full bottom-1 left-0 border-t border-gray-500'></div>
                            </div>
                          </div>
                          {project?.summary?.enabled && (
                            <div className='markdown capitalize text-[13px]'>
                              <MarkdownRenderer>{project?.summary?.data}</MarkdownRenderer>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
              <div className='mt-4'>
                <h4 className='inline italic text-lg font-bold border-b-4 border-gray-700'>
                  Skills
                </h4>
                <div className='mt-3 grid grid-cols-2 gap-1'>
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((skill) => (
                      <div key={skill?._id} className='mb-2'>
                        <div className='flex flex-col justify-between'>
                          <div className='text-xs font-semibold'>{skill?.name}</div>
                          <div className='relative w-11/12 h-2 border-2'>
                            <div
                              className={`${
                                skill?.level === "Beginner"
                                  ? "w-[25%]"
                                  : skill?.level === "Intermediate"
                                  ? "w-[55%] "
                                  : skill?.level === "Expert"
                                  ? "w-full"
                                  : ""
                              } absolute h-full top-0 left-0 bg-gray-800`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {languages?.filter((language) => language?.enabled)?.length > 0 && (
              <div className='mt-4'>
                <h4 className='inline italic text-lg font-bold border-b-4 border-gray-700'>
                  Languages
                </h4>
                <div className='mt-3 grid grid-cols-2 gap-2'>
                  {languages
                    ?.filter((langauge) => langauge?.enabled === true)
                    .map((language) => (
                      <div
                        key={language?._id}
                        className='w-11/12 flex items-center justify-between'
                      >
                        <span className='font-semibold'>{language?.name}</span>
                        <span className='text-sm'>{language?.fluency}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div> */}
       
               <div className="flex">
                      <div className=" w-[35%] bg-gray-200 p-6">
                        <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
                        {profile && ( <img
                            src={profile?.image}
                            alt=""
                            className="w-36 h-36 mt-7 ml-10 border-8 border-white"
                          />
                        )}
                        </div>
                      </div>
                      <div className="mt-48">
                          <h1 className="text-2xl font-semibold tracking-[2px] heading">
                            CONTACT
                          </h1>
                          <hr className="h-[2px] bg-black my-1" />
                          {
                            <>
                              <div className="flex">
                                <span>
                                  <img
                                    src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                                    className="w-5 h-5"
                                  />
                                </span>
                                <h1 className="mx-4">
                                {profile?.phone}
                                </h1>
                              </div>
                              <div className="flex my-1">
                                <span>
                                  <img
                                    src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                                    className="w-7 h-7"
                                  />
                                </span>
                                <h1 className="mx-2">
                                {profile?.email}
                                </h1>
                              </div>

                              {/* {details.social.length != 0 && (
                                <>
                                  {details.social.map((item) => (
                                    <>
                                      {item.enabled && (
                                        <div
                                          className="my-3 flex"
                                          key={item.network}
                                        >
                                          <span>
                                            <img
                                              src={
                                                "https://www." +
                                                item.network +
                                                ".com/favicon.ico"
                                              }
                                              alt=""
                                              className="w-5 grayscale-[40%]"
                                            />
                                          </span>

                                          <Link href={item.url}>
                                            <span className="mx-4">
                                              {item.username}
                                            </span>
                                          </Link>
                                        </div>
                                      )}
                                    </>
                                  ))}
                                </>
                              )} */}
                            </>
                          }
                      </div>
                      {skills && (

                      <div>
                        {skills.length != 0 && (
                            <div className="mt-4">
                              <h1 className="text-2xl font-semibold tracking-[2px] heading">
                                SKILLS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              {skills.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <li className="mx-4" key={item.name}>
                                      {item.name}
                                    </li>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                      </div>
                      )}

                    {languages && (
                      <>
                      {languages.length != 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              LANGUAGES
                            </h1>
                            <hr className="h-[2px] bg-black my-1" />
                            {languages.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.name}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                      </>
                    )}

                      <div className={` w-[70%] pt-10 px-5`}>
                        {profile && (
                          <div>
                          <h1 className="text-5xl font-semibold tracking-wider">
                            {profile.firstName}
                          </h1>
                          <h1 className="text-3xl  tracking-[4px] mt-2">
                            {profile.lastName}
                          </h1>
                          {/* <h1 className='text-lg  tracking-[4px] mt-2'>{resume.personal.role}</h1> */}
                        </div>
                        )}

                        <div className="mt-12">
                         {objective && (
                          <>
                           {objective.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] heading">
                                OBJECTIVE
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <p className="text-sm">
                                {objective}
                              </p>
                            </>
                          )}
                          </>
                         )}



{/*                       WORK
                          {details.work.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                WORK
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {details.work.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.company}>
                                        <div className="pt-1">
                                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                          <div className="w-1 bg-black h-24 m-1"></div>
                                        </div>
                                        <div className="ml-5 mt-1">
                                          <p className="font-semibold">
                                            {item.from.slice(0, 4)} -{" "}
                                            {item.to.slice(0, 4)}
                                          </p>
                                          <p className="tracking-[2px] my-1">
                                            {item.company}
                                          </p>
                                          <p className="font-bold">
                                            {item.designation}
                                          </p>
                                          <p className="mb-4 text-sm">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )} */}


                          {/* PROJECTS  */}

                          {projects && (
                            <>
                            {projects.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-5 heading">
                                PROJECTS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />

                              <div className="ml-1 mt-1">
                                {projects.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <div className="pt-1">
                                          <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                          <div className="w-1 bg-black h-24 m-1"></div>
                                        </div>
                                        <div className="ml-5 mt-1">
                                          <p className="font-semibold">
                                            {item.from} to {item.to}
                                          </p>
                                          <p className="tracking-[2px] my-1">
                                            {item.name}
                                          </p>
                                          <p className="tracking-[2px] my-1">
                                            {item.domain}
                                          </p>

                                          <p className="mb-4 text-sm">
                                            {item.summary.data}
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                            </>
                          )}


                          {/* EDUCATION  */}
                          {education && (
                            <>
                            {education.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                EDUCACTION
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {education.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
                                        <div className="flex">
                                          <div className="pt-1">
                                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                            <div className="w-1 bg-black h-28 m-1"></div>
                                          </div>
                                          <div className="ml-5 mt-1">
                                            <p className="font-semibold">
                                              {item.startDate.slice(0, 4)} -{" "}
                                              {item.endDate.slice(0, 4)}
                                            </p>
                                            <p className="tracking-[2px]">
                                              {item.institution}
                                            </p>
                                            <p className="font-bold">
                                              {item.fieldOfStudy}
                                            </p>
                                            <p className="">
                                              {item.typeOfDegree}
                                            </p>
                                            <p className="mb-4 font-semibold">
                                              GPA-{item.gpa}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                            </>
                          )}

                          {/* {details.certifications.length != 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-3 heading">
                                CERTIFICATIONS
                              </h1>
                              <hr className="h-[2px] bg-black my-1" />
                              <div className="ml-1 mt-1">
                                {details.certifications.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="flex"
                                        key={item.institution}
                                      >
                                        <div className="flex">
                                          <div className="pt-1">
                                            <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                                            <div className="w-1 bg-black h-20 m-1"></div>
                                          </div>
                                          <div className="ml-5 mt-1">
                                            <p className="tracking-[2px]">
                                              {item.title}
                                            </p>
                                            <p className="font-bold">
                                              {item.date}
                                            </p>
                                            <p className="">{item.issuer}</p>
                                            <p className="mb-4 font-semibold">
                                              {item.summary.data}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )} */}
                        </div>
                      </div>

              </div>
              </div>
         {/* </div> */}
    </>
  );
};
