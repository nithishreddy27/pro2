import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Stylish = ({ componentRef, filter = null }) => {
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
      className="w-a4W  mx-auto h-a4H my-5 relative  bg-zinc-800"
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

      <div className="flex px-5">
        <div className="flex-col mt-[5%] py-3 pl-1 w-[40%] bg-white rounded-xl ">
          {/* image */}
          {profile && (
            <div className=" flex text-black   justify-around ">
              <img
                src={profile.image}
                alt=""
                className="w-[60%] h-[50%] rounded-full mb-3"
              />
            </div>
          )}
          {/* name */}
          {profile && (
            <div className="flex-col bg-zinc-200 py-2">
              <span className=" text-[20px] font-extrabold pl-3 tracking-wide font-serif ">
                {profile.firstName} {profile.lastName}
              </span>
              <p className="  text-[16px] pl-3 tracking-wider font-thin ">
                {profile.role}
              </p>
            </div>
          )}
          {/* network */}
          {profile && (
            <div className="py-1 px-2 text-black pt-2">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                NETWORK
              </p>

              <div className="text-[14px] px-2">
                <div className="px-2">
                  <p>{profile.phone}</p>
                  <p> {profile.email}</p>
                </div>
              </div>
            </div>
          )}
          {/* skills */}
          {skills?.filter((skill) => skill?.enabled).length > 0 && (
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                SKILLS
              </p>
              {skills.map((item) => (
                <div className="text-[14px] px-2">
                  <span className="">
                    <li>
                      {item.name} - {item.level}
                    </li>
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
          )}
          {/* languages */}
          {languages?.filter((language) => language?.enabled).length > 0 && (
            <div className="py-1 px-2 text-black">
              <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                LANGUAGES
              </p>
              {languages.map((item) => (
                <div className="text-[14px] px-2">
                  <li>
                    {item.name} : {item.fluency}
                  </li>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
          )}
          {/* hobbies */}
          {hobbies && (
            <div>
              {hobbies.length != 0 && (
                <div className="py-1 px-2 text-black">
                  <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
                    HOBBIES
                  </p>
                  {hobbies.map((item) => (
                    <>
                      {item.enabled && (
                        <div key={item.name} className="text-[14px] px-2">
                          <li>{item.name}</li>
                          <p>{item.enabled}</p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* awards */}
          {awards && (
            <div>
              {awards.length != 0 && (
          <div className="py-1 px-2 text-black">
            <p className="text-[16px] font-bold tracking-wider font-serif px-4 py-2">
              AWARDS
            </p>
            {awards.map((item) => (
              <div className="text-[14px] px-2 font-semibold ">
                <li>
                  {item.name}
                  <p className="px-4 font-mono text-[12px] font-normal">[{item.date.slice(0,4)}]</p>
                  <p className="px-4 font-normal">{item.awarder}</p>

                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </li>
              </div>
            ))}
          </div>
              )}
              </div>
          )}
        </div>
        <div className="flex w-[60%] mt-[4%] ml-3 mr-3">
          <div className="flex-col">
            {/* profile */}
            {objective && (
              <div>
                {objective != 0 && (
            <div>
              <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                PROFILE
              </p>
              <hr></hr>
              <p className="text-[12px] text-white p-1 pt-4">{objective}</p>
            </div>
                )}
                </div>
            )}
            {/* education */}
            {education && (
              <div>
                {education.length != 0 && (
            <div className="p-1">
              <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                EDUCATION
              </p>
              <hr></hr>
              {education.map((item) => (
                <div className="text-[12px] p-2 text-white">
                  <p className="font-semibold text-[14px] relative text-white">
                    {item.institution}
                    <span className="text-white absolute text-[11px] right-0">
                      [ {item.startDate.slice(0,4)} ] - [ {item.endDate.slice(0,4)} ]
                    </span>
                  </p>
                  <p className="text-white">{item.fieldOfStudy}</p>
                  <p className="text-white">
                    {item.typeOfDegree} - {item.gpa}
                  </p>
                  <p className="text-white">{item.summary.enabled}</p>
                  <p className="text-white">{item.enabled}</p>
                </div>
              ))}
            </div>
                )}
                </div>
            )}
            {/* Internship */}
            {work && (
              <div>
                {work.length != 0 && (
            <div className="p-1">
              <p className="text-white font-semibold text-[16px] tracking-wider p-1 mt-3 ">
                INTERNSHIP
              </p>
              <hr></hr>
              {work.map((item) => (
                <div className="text-[12px] p-2 text-white">
                  <p className="text-white text-[14px] relative ">
                    <p href={item.website}>
                      {item.company} - {item.designation}
                    </p>
                    <span className="absolute right-0 text-[10px] top-1 text-white">
                      [{item.from.slice(0,10)}] - [{item.to.slice(0,10)}]
                    </span>
                  </p>

                  <p className="px-4  font-normal"></p>
                  <p className="text-[12px] text-white">{item.summary.data}</p>
                  <p>{item.summary.enabled}</p>
                </div>
              ))}
            </div>
                )}
                </div>
            )}
            {/* projects */}
            {projects && (
              <div>
                {projects.length != 0 && (
            <div className="p-1">
              <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                PROJECTS
              </p>
              <hr></hr>
              {projects.map((item) => (
                <div className="text-[12px] p-2 text-white">
                  <Link href={item.website}>
                    <p className="relative font-bold text-white tracking-wider">
                      {item.name}
                      <span className="absolute right-0 text-[10px] text-white">
                        [{item.from.slice(0,10)}] - [{item.to.slice(0,10)}]
                      </span>
                    </p>
                  </Link>

                  <p className="text-[12px] text-white">{item.summary.data}</p>
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
                )}
                </div>
            )}
            {/* certification */}
            {certifications && (
            <div>
              {certifications.length != 0 && (
            <div className="p-1">
              <p className=" text-white font-semibold text-[16px] tracking-wider  p-1  mt-3 ">
                CERTIFICATION
              </p>
              <hr></hr>
              {certifications.map((item) => (
                <div className="text-[12px] p-2 text-white">
                  <p className="font-semibold  text-white">{item.title}</p>

                  <p className=" text-white relative">
                    {item.issuer}
                    <span className="absolute right-0 text-[12px] text-white">
                      [{item.date}]
                    </span>
                  </p>
                  <p className="text-[12px] text-white">{item.summary.data}</p>
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
