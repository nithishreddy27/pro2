import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Retro = ({ componentRef, filter = null }) => {
  const {
    profile,
    social,
    objective,
    education,
    awards,
    certifications,
    projects,
    work,
    skills,
    hobbies,
    languages,
    layout,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-lg text-center capitalize font-bold text-gray-700 mb-2 pb-1";
  return (
    <div ref={componentRef} className="w-a4W bg-white mx-auto h-a4H my-5 relative">
      {/* <div className='px-14 py-8 h-full' style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }}>
        <div className='w-full py-2 text-center border-b-2 border-slate-600 '>
          <span className='text-4xl not-italic font-bold text-gray-700 '>
            {rename(profile?.firstName)} {rename(profile?.lastName)}
          </span>
        </div>
        <div className='w-full border-gray-200 py-1 text-center mb-5'>
          <span className='text-sm italic font-semibold text-gray-700 '>
            <span className={`${filter?.removeEmail ? "blur" : ""} `}>{profile?.email}</span>{" "}
            <span className={`${filter?.removePhoneNumber ? "blur" : ""}`}>
              &middot; +91 - {profile?.phone}
            </span>
          </span>
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
                      {option?.institution}
                    </h3>
                    <span className='text-[13px]'>
                      {option?.fieldOfStudy}
                      <span className='text-sm'> &middot; {option?.gpa}</span>
                    </span>
                    {option?.summary?.enabled && (
                      <span className='markdown text-sm tracking-wide text-gray-700'>
                        <MarkdownRenderer>{option?.summary?.data}</MarkdownRenderer>
                      </span>
                    )}
                  </div>
                  <span className='text-xs font-bold tracking-wide'>
                    {new Date(option?.startDate).getFullYear()} -{" "}
                    {new Date(option?.endDate).getFullYear()}
                  </span>
                </div>
              ))}
          </div>
        )}
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

        <div>
          {certifications?.filter((certification) => certification?.enabled)?.length > 0 && (
            <div className='mt-4'>
              <h3
                // style={{ color: `rgba(${r}, ${g}, ${b}, ${a})` }}
                className={headingClass}
              >
                Certifications
              </h3>
              {certifications?.map((certification) => {
                if (certification?.enabled === true) {
                  return (
                    <div key={certification?._id} className='relative mb-2'>
                      <div className='text-[15px] font-semibold'>
                        {certification?.title},{" "}
                        <span className='text-[12px] font-base text-gray-500'>
                          {certification?.issuer}
                        </span>
                      </div>
                      <div className='absolute top-0 right-0 text-sm font-light'>
                        {new Date(certification?.date).getFullYear()}
                      </div>

                      <div className='markdown capitalize text-xs ml-3'>
                        <MarkdownRenderer>{certification?.summary?.data}</MarkdownRenderer>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}

          {awards?.filter((award) => award?.enabled)?.length > 0 && (
            <div className='w-full'>
              {awards
                ?.filter((award) => award?.enabled === true)
                .map((award) => (
                  <div key={award?._id} className='mb-2'>
                    <div className='flex items-center justify-between'>
                      <div className='text-[15px] font-semibold'>
                        <span className='italic text-xs text-slate-500'>Awarded - </span>
                        {award?.name},{" "}
                        <span className='text-[12px]  tracking-wide text-gray-500'>
                          by {award?.awarder}
                        </span>
                      </div>
                      <div className='text-xs font-bold text-gray-500'>
                        {new Date(award?.date).getFullYear()}
                      </div>
                    </div>

                    {award?.summary?.enabled && (
                      <div className='markdown  text-xs ml-3'>
                        <MarkdownRenderer>{award?.summary?.data}</MarkdownRenderer>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className='my-5'>
          {(skills?.filter((skill) => skill?.enabled)?.length > 0 ||
            languages?.filter((language) => language?.enabled)?.length > 0 ||
            hobbies?.filter((hobby) => hobby?.enabled)?.length > 0) && (
            <div>
              <h1 className={headingClass}>Skills & Interests</h1>
              {languages?.filter((language) => language?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Languages: </h2>
                    <span className='ml-3 flex'>
                      {languages
                        ?.filter((language) => language?.enabled === true)
                        .map((language, index) => (
                          <span
                            key={language?._id}
                            className='flex justify-between items-center my-1'
                          >
                            <span className='text-[15px] capitalize font-semibold'>
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
                            <span className='text-[15px]  capitalize font-semibold'>
                              {skill?.name}{" "}
                            </span>
                            {index !== skills.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}

              {hobbies?.filter((hobby) => hobby?.enabled)?.length > 0 && (
                <div className='w-full '>
                  <div className='flex items-center'>
                    <h2 className='inline'>Hobbies:</h2>

                    <span className='ml-3 flex'>
                      {hobbies
                        ?.filter((hobby) => hobby?.enabled === true)
                        .map((hobby, index) => (
                          <span key={hobby?._id}>
                            <span className='text-[14px] font-semibold inline'>{hobby?.name}</span>
                            {index !== hobbies.length - 1 && " , "}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div> */}

      {/* <div
        className="bg-slate-50 w-[210mm] scale-[0.4] sm:scale-[0.7] md:scale-[0.9] md:mt-[-50px] lg:scale-[0.8] lg:mt-[-80px] xl:scale-[0.9] xl:mt-[-10px] sm:mt-[-100px] mx-[-210px] mt-[-250px] h-[285mm] max-h-[285mm] min-w-[210mm] object-cover overflow-hidden drop-shadow-2xl flex flex-row"
        id="largeResume"
      > */}
        <div className="">
        
          <div className="flex mx-2 mt-[2%]  ">
          {profile && (
            <div className="left-0 w-[20%]">
              <img
                src={profile.image}
                alt=""
                className="rounded-full h-[38mm] p-1  m-2"
              />
            </div>
          )}
            
            {objective && (
            <div className="right-0 w-[80%]">
              <p className=" text-black font-bold text-[16px] p-1 pt-3 pl-4 tracking-wide mt-1 heading ">
                PROFILE
              </p>
              <p className="text-[12px] text-black p-2 pl-2 pt-1">
                { objective}
              </p>
            </div>
            )}
          </div>

          {profile && (
          <div className=" bg-black px-4 py-1">
            <span className="text-[20px] bg-white p-1 pl-2 rounded-sm font-bold text-black tracking-wider font-mono  ml-1">
             { profile.firstName} { profile.lastName}
            </span>
            <span className=" text-[16px] pl-[10%] text-white tracking-wider font-thin text-right font-mono ">
            { profile.role}
            </span>
          </div>
          )}

          <div className="relative flex">
            <div className="bg-gradient-to-t   from-gray-300 w-[40%]">
              <div className=" ">
                <div className="flex px-3 py-1">
                {skills?.filter((skill)=>skill?.enabled).length>0 && (
                  <div className="">
                    { skills.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          SKILLS
                        </p>
                        { skills.map((item) => (
                          <div key={item.name} className="ml-2">
                            <span className="text-[12px]  ">
                              <li>
                                {item.name} - {item.level}
                              </li>
                            </span>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Languages */}
                    { languages.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          LANGUAGES
                        </p>
                        { languages.map((item) => (
                          <div key={item.name} className="ml-2">
                            <li className="text-[12px]">
                              {item.name} : {item.fluency}
                            </li>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* awards */}
                    { awards.length != 0 && (
                      <div className="py-1">
                        <p className="text-black px-2 font-bold tracking-wider text-[16px] heading">
                          AWARDS
                        </p>
                        { awards.map((item) => (
                          <div key={item.name} className="ml-2">
                            <li className="">
                              <span className="text-[14px] font-semibold">
                                {" "}
                                {item.name}
                              </span>
                              <div className="pl-5">
                                <p className="relative  text-[14px]">
                                  {item.awarder}
                                  <span className="absolute text-[10px] right-0">
                                    {" "}
                                    [{item.date.slice(0,4)}]{" "}
                                  </span>
                                </p>
                                <p className="text-[12px] ">
                                  {item.summary.data}
                                </p>
                                <p className="text-[12px]">
                                  {item.summary.enabled}
                                </p>
                                <p>{item.enabled}</p>
                              </div>
                            </li>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* hobbies */}
                    { hobbies.length != 0 && (
                      <div className="py-1">
                        <p className="text-black  px-2 font-bold tracking-wider text-[16px]  heading">
                          HOBBIES
                        </p>
                        { hobbies.map((item) => (
                          <div className="ml-2" key={item.name}>
                            <li className="text-[12px]">{item.name}</li>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* projects */}
                    { projects.length != 0 && (
                      <div className=" py-1">
                        <p className="text-black  px-2 font-bold tracking-wider text-[16px]  heading  ">
                          PROJECTS
                        </p>

                        { projects.map((item) => (
                          <div key={item.name} className="py-1">
                            <div className=" ml-2 text-black ">
                              <p className="tracking-wide text-[14px] font-semibold">
                                {item.name}
                              </p>
                              <p className="text-[12px]">
                                [ {item.from.slice(0, 10)} ] - [ {item.to.slice(0, 10)} ]
                              </p>

                              <p href={item.website}>
                                <p className="text-[12px]">{item.website}</p>
                              </p>
                              <p className="pr-2 text-[10px]  ">
                                {item.summary.data}
                              </p>
                              <p>{item.summary.enabled}</p>
                              <p>{item.enabled}</p>
                              <p className="p-2"> </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                </div>
              </div>
            </div>
            <div className="w-[70%] py-2 px-3">
              {/* education */}
              {education && (
              <div>
                {education.length != 0 && (
                <div className="py-1 ">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wide  heading">
                    EDUCATION
                  </p>
                  <hr></hr>
                  { education.map((item) => (
                    <div
                      key={item.institution}
                      className="text-[12px] p-2  text-black "
                    >
                      <p className="relative text-[14px] font-semibold text-black ">
                        {item.institution}
                        <span className="absolute font-normal text-[12px] right-3">
                          [{item.startDate.slice(0, 4)}-
                            {item.endDate.slice(0, 4)}]
                        </span>
                      </p>
                      <p>{item.typeOfDegree}</p>
                      <p>
                        {item.fieldOfStudy} - {item.gpa}
                      </p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
                )}
                </div>
              )}

             {/* internship */}
             {work && (
              <div>
                {work.length != 0 && (
                  <>
                <div className="py-1">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wide heading">
                    INTERNSHIP
                  </p>
                  <hr></hr>
                  { work.map((item) => (
                    <div
                      key={item.company}
                      className="text-[12px] p-2 text-black "
                    >
                      <p className="relative font-semibold text-[14px] text-black ">
                        {item.company}
                        <span className="absolute font-normal text-[12px] right-0">
                          [{item.from.slice(0, 10)}] - [{item.to.slice(0, 10)}]
                        </span>
                      </p>
                      <p>{item.designation}</p>
                      <p>{item.summary.data}</p>
                      {/* <p>{item.gpa}</p> */}
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
                </>
                )}
                </div>
              )}
              {/* certification */}

              {certifications && (
            <div>
              {certifications.length != 0 && (
                <>
                <div className="py-1">
                  <p className=" text-black font-bold px-3 py-1 text-[16px] tracking-wider heading">
                    CERTIFICATION
                  </p>
                  <hr className=""></hr>
                  { certifications.map((item) => (
                    <div
                      key={item.title}
                      className="text-[12px] p-2 text-black"
                    >
                      <p className="relative font-semibold text-[14px]">
                        {item.title}{" "}
                        <span className="right-0 absolute font-normal text-[10px]">
                          [{item.date}]
                        </span>
                      </p>

                      <p>{item.issuer}</p>
                      <p>{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
                </>
              )}
              </div>
              )}

              {/* projects */}
              {projects && (
              <div>
                {projects.length != 0 && (
                  
              <div className="py-1">
                <p className="text-black font-bold tracking-wider  px-3 py-1 text-[16px]   ">
                  PROJECTS
                </p>
                <hr></hr>
                { projects.map((item) => (
                  <div className="text-[12px] p-2 text-black">
                    <p className="relative font-semibold text-[14px]">
                      {item.name}
                      <span className="absolute right-0 font-normal text-[10px]">
                        {" "}
                        [{item.from.slice(0, 4)}-{item.to.slice(0, 4)}]
                      </span>
                    </p>
                    <p href={item.website}>
                      <p className="text-[12px]">{item.name}</p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </p>

                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
                )}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    // </div>
  );
};
