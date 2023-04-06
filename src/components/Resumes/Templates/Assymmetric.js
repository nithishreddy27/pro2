import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Assymmetric = ({ componentRef, filter = null }) => {
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
    <div
      ref={componentRef}
      className="w-a4W bg-white mx-auto h-a4H my-5 relative"
    >
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
      <div className="flex gap-3 m-7 p-4">
        <div className="w-[35%] pl-3">
          {profile && (
            <>
              <img
                src={profile.image}
                alt=""
                className="w-[35mm] h-[30mm] rounded-full my-2"
              />
            </>
          )}

          {/* network */}
          {profile && (
            <div className="py-3">
              <h1 className="text-[16px] font-bold">NETWORK</h1>
              <div className="pl-2 text-[12px]">
                <p className="">{profile.phone}</p>
                <p className="">{profile.email}</p>
              </div>
            </div>
          )}

          {/* hobbies */}
          {hobbies && (
            <div>
              {hobbies.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">HOBBIES</p>
                  {hobbies.map((item) => (
                    <div key={item.name} className="text-[12px]">
                      <p>{item.name}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* skills */}
          {skills?.filter((skill) => skill?.enabled).length > 0 && (
            <div className="py-1">
              <p className="text-[16px] font-bold">SKILLS</p>
              {skills.map((item) => (
                <div key={item.name}>
                  <span className="text-[12px]">
                    {item.name} - {item.level}
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
          )}
          {/* languages */}
          {languages?.filter((language) => language?.enabled).length > 0 && (
            <div>
              {languages.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold">LANGUAGES</p>
                  {languages.length != 0 &&
                    languages.filter((languages) => languages.enabled).length >
                      0 && (
                      <div className="">
                        {languages.map((item) => (
                          <>
                            {item.enabled && (
                              <div key={item.name} className="pt-2">
                                <p className="text-[12px]">
                                  {item.name} - {item.fluency}
                                </p>
                                <p>{item.enabled}</p>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                </div>
              )}
            </div>
          )}

          {/* internship */}
          {work && (
            <div>
              {work.length != 0 && (
                <div className="py-1">
                  <p className="text-[16px] font-bold pb-1">INTERNSHIP</p>
                  {work.map((item) => (
                    <div key={item.company} className="">
                      
                        <li className="relative font-bold text-gray-800 text-[14px] tracking-wider">
                          {item.company}
                        </li>
                        <p>
                          <span className=" text-[12px]">
                            [ {item.from.slice(0, 10)}] - [
                            {item.to.slice(0, 10)}]
                          </span>
                        </p>
                      

                      <p className="text-[12px]">{item.designation}</p>
                      <p className="pl-1 text-[12px]">{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* awards */}
          {awards && (
            <div>
              {awards.length != 0 && (
                <div className="pb-1">
                  <p className="text-black font-bold tracking-wider  px-2 py-1 ">
                    AWARDS:
                  </p>
                  {awards.map((item) => (
                    <div key={item.name} className="text-[12px]">
                      <li className="font-bold text-gray-700">{item.name}</li>
                      <span className="pl-2">[{item.date.slice(0,4)}]</span>
                      <p className="pl-2">{item.awarder}</p>
                      <p className="pl-2 text-[12px]">{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="w-[65%] pr-4 pl-3 ">
          {profile && (
            <div className="py-4">
              <p className="font-bold text-center text-[20px]  font-sans tracking-widest ">
                {profile.firstName} {profile.lastName}
              </p>
              <p className="text-black font-thin text-[16px] tracking-widest text-center  ">
                {profile.role}
              </p>
            </div>
          )}
          <div className=" bg-gray-200 rounded-xl p-1 my-2">
            {objective && (
              <>
                {objective != 0 && (
                  <>
                    <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wid  ">
                      PROFILE
                    </p>
                    <p className="text-[12px] text-black px-2 pb-2 ">
                      {objective}
                    </p>
                  </>
                )}
              </>
            )}
          </div>

          {/* education */}
          {education && (
            <div>
              {education.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wid">
                    EDUCATION
                  </p>
                  {education.map((item) => (
                    <div
                      key={item.institution}
                      className="text-[12px] p-1 pl-3"
                    >
                      <p className="relative font-bold text-gray-800 text-[14px]">
                        {item.institution}
                        <span className="absolute right-1 font-normal text-[12px]">
                          [{item.startDate.slice(0, 4)}] - [
                          {item.endDate.slice(0, 4)}]
                        </span>
                      </p>
                      <p className="">{item.fieldOfStudy}</p>

                      <p>
                        {item.typeOfDegree} - {item.gpa}
                      </p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* project */}
          {projects && (
            <div>
              {projects.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2">
                  <p className="text-black font-semibold text-[16px] px-3 py-1 tracking-wider">
                    PROJECTS
                  </p>

                  {projects.map((item) => (
                    <div key={item.name} className=" text-black pl-3 ">
                      <p className="font-bold relative text-gray-800 text-[14px]  tracking-wider">
                        {item.name}

                        <span className="absolute right-2 font-normal text-[10px]">
                          [{item.from.slice(0,7)} ] - [ {item.to.slice(0,7)} ]
                        </span>
                      </p>
                      <p className="text-[12px] pr-1">{item.summary.data}</p>
                      <p>{item.summary.enabled}</p>
                      <p>{item.enabled}</p>
                      <p className="p-2"> </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {certifications && (
            <div>
              {certifications.length != 0 && (
                <div className="bg-gray-200 rounded-xl p-1 my-2 pb-2 ">
                  <p className=" text-black font-semibold text-[16px] px-3 py-1 tracking-wider ">
                    CERTIFICATION
                  </p>

                  {certifications.map((item) => (
                    <div key={item.title} className="pt-4 text-black mx-3 ">
                      <p className="font-bold  text-gray-800 text-[14px]  tracking-wider">
                        {item.title}
                      </p>
                      <p className="font-bold relative text-gray-600 text-[13px]  tracking-wider">
                        {item.issuer}
                        <span className="absolute right-0 font-normal text-[10px]">
                          [ {item.date.slice(0,10)} ]
                        </span>
                      </p>
                      <p className="text-[12px] pr-1">{item.summary.data}</p>
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
    // </div>
  );
};
