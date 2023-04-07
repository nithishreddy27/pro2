import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Blue = ({ componentRef, filter = null }) => {
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
        <div
          className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
        >
          {profile && (
            <>
              <img
                src={profile.image}
                alt=""
                className="rounded-full h-40 mb-5 mx-auto"
              />
            </>
          )}
          <>
            {profile && (
              <>
                <div className="flex">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                      className="w-3 h-3"
                    />
                  </span>
                  <h1 className="mx-4 text-[12px]">{profile.phone}</h1>
                </div>
                <div className="flex my-1">
                  <span>
                    <img
                      src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                      className="w-4 h-4"
                    />
                  </span>
                  <h1 className="mx-2 text-[12px]">{profile.email}</h1>
                </div>
              </>
            )}
            {social && (
              <>
                {social.map((item) => (
                  <div className="my-3 flex " key={item.network}>
                    <span>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        alt=""
                        srcset=""
                        className="w-3 grayscale-[40%]"
                      />
                    </span>

                    <Link href={item.url}>
                      <span className="mx-4 text-[12px]">{item.username}</span>
                    </Link>
                  </div>
                ))}
              </>
            )}
          </>

          {/* {skills && (
            <div>
              {skills.length != 0 && (
                <>
                  <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                    SKILLS
                  </h1>

                  <div className="my-2">
                    {skills.map((item) => (
                      <div className="flex" key={item.name}>
                        <h1 className="">{item.name}</h1>
                        <p className="absolute right-5">{item.level}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )} */}


          {skills?.filter((skill)=>skill?.enabled).length>0 && (
            <div>
               <h1 className="text-[16px] font-semibold tracking-[2px] mt-5  heading">
                    SKILLS
                  </h1>
                  <div className="my-2 text-[12px]">
                                {skills.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <h1 className="">{item.name}</h1>
                                        <p className="absolute right-5 ">
                                          {item.level}
                                        </p>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
            </div>
          )}

          {languages?.filter((language)=>language?.enabled).length>0 && (
            <div>
              {languages.length != 0 && (
                <>
                <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                  LANGUAGES
                </h1>
                <div className="my-2">
                  {languages.map((item) => (
                    <>
                      {item.enabled  && (
                        <div className="flex text-[12px]" key={item.name}>
                          <h1 className="">{item.name}</h1>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </>
              )}
            </div>
          )}

          {hobbies && (
            <div>
              {hobbies.length != 0 && (
                <>
                  <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                    HOBBIES
                  </h1>
                  <div className="my-2">
                    {hobbies.map((item) => (
                      <>
                      {item.enabled && (
                        <div className="flex text-[12px]  " key={item.name}>
                        <h1 className="">{item.name}</h1>
                      </div>
                      )}
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {awards && (
            <div>
              {awards.length != 0 && (
                <>
                  <h1 className="text-[16px] font-semibold tracking-[2px] mt-5 heading">
                    AWARDS
                  </h1>
                  <div className="my-2 ">
                    {awards.map((item) => (
                      <>
                        {item.enabled && (
                          <div className="flex text-[12px]" key={item.name}>
                          <span className=" text-[15px] my-1">
                            {item.name} <span className="text-[12px]">({item.date})</span>
                          </span>
                        </div>
                        )}
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}

          {certifications && (
            <div>
              {certifications.length != 0 && (
                <>
                  <div className="mt-4">
                    <h1 className="text-[16px] font-semibold tracking-[2px] heading">
                      CERTIFICATIONS
                    </h1>
                    {certifications.map((item) => (
                      <p className="my-2 text-[12px]" key={item.name}>
                        {item.title}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        <div
          className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
        >
          {profile && (
            <>
              <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                {profile.firstName} <span>{profile.lastName}</span>
              </h1>
              <h1 className="ml-[58%] my-2 tracking-widest">{profile.role}</h1>
            </>
          )}
          <div className="absolute mt-10  left-[330px] w-[57%] h-[100%] text-black">
            {objective && (
              <>
                {objective != 0 && (
                  <>
                    <h1 className="text-[16px] font-bold tracking-[1px] heading">
                      OBJECTIVE
                    </h1>
                    <p className="text-[12px]">{objective}</p>
                  </>
                )}
              </>
            )}

            {education && (
              <div>
                {education.length != 0 && (
                  <>
                    <h1 className="text-[16px] mt-2 font-bold tracking-[1px] heading">
                      EDUCATION
                    </h1>
                    {education.map((item) => (
                      <>
                      {item.enabled && (
                        <div className="mt-2 text-[12px]" key={item.institution}>
                        <h1 className="font-semibold">
                          {item.institution}{" "}
                          <span className="font-medium">
                            ({item.startDate.slice(0, 4)}-
                            {item.endDate.slice(0, 4)})
                          </span>{" "}
                        </h1>

                        <p className="ml-5">{item.typeOfDegree}</p>
                        <p className="ml-5 my-1">{item.summary.data}</p>
                        <p className="ml-5">GPA-{item.gpa}</p>
                      </div>
                      )}
                      </>
                    ))}
                  </>
                )}
              </div>
            )}

            {work && (
              <div>
                {work.length != 0 && (
                  <>
                    <h1 className="text-[16px] font-bold tracking-[1px] mt-4 heading">
                      WORK
                    </h1>
                    {work.map((item) => (
                     <>
                      {item.enabled && (
                         <div className="mt-2 text-[12px]" key={item.company}>
                         <h1 className="font-semibold">
                           {item.company}{" "}
                           <span className="font-medium">
                             ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                           </span>{" "}
                         </h1>
 
                         <span className="ml-5 tracking-wider font-semibold">
                           {item.designation}
                         </span>
                         <span className="ml-5 text-sm">
                           {item.summary.data}
                         </span>
                       </div>
                      )}
                      </>
                    ))}
                  </>
                )}
              </div>
            )}

            {projects && (
              <div>
                {projects.length != 0 && (
                  <div>
                    <h1 className="text-[16px] font-bold tracking-[1px] mt-4 heading">
                      PROJECTS
                    </h1>
                    {projects.map((item) => (
                      <>
                        {item.enabled && (
                          <div className="mt-2 text-[12px]" key={item.name}>
                          {/* <Link href={item.website}> */}
                          <h1 className="font-semibold">
                            {item.name}{" "}
                            <span className="font-medium">
                              ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                            </span>{" "}
                          </h1>{" "}
                          {/* </Link> */}
                          <span className="ml-5 tracking-wider font-semibold">
                            {item.designation}
                          </span>
                          <span className="ml-5 text-sm">
                            {item.summary.data}
                          </span>
                        </div>
                        )}
                      </>
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
