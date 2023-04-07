import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Classic = ({ componentRef, filter = null }) => {
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
    <div ref={componentRef} className="w-a4W bg-white mx-auto h-a4H my-5">
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

      <div className="bg-gray-200 p-4">
        <div className="space-x-2 m-2 border-separate">
          <div className="flex pt-3 pb-2 border-b-4 bg-white border-solid text-black  ">
            {profile && (
              <>
                <img
                  src={profile.image}
                  alt=""
                  className="rounded-full h-40 mb-5 mx-auto"
                />
              </>
            )}
            {profile && (
              <>
                {/* <img
              className="w-[20%] h-[30] p-3 pb-5 pl-7"
              src="https://randomuser.me/api/portraits/women/71.jpg"
            ></img> */}
                {/* personal detail */}

                <div className="m-auto">
                  <p className=" text-center text-black text-4xl tracking-widest font-serif m-4 mt-5 ml-8">
                    { profile.firstName} { profile.lastName}
                  </p>
                  <p className="  text-2xl  text-black font-thin  tracking-wider mb-3 ml-10 ">
                    { profile.role}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="m-2">
          <div className="flex gap-3 ">
            <div className=" min-w-[50%]">
              <div className=" m-4 ">
                {objective && (
                  <>
                    {objective != 0 && (
                      <>
                        <p className="bg-gray-800 tracking-widest  text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                          PROFILE
                        </p>
                        <p className="text-[12px] p-1 ">{ objective}</p>
                      </>
                    )}
                  </>
                )}
              </div>
              <div>
                {/* <span className=" bg-gray-800 text-white pt-1 p-1 rounded-sm">PERSONAL</span> */}

                {/* HOBBIES */}
                {hobbies && (
                  <div>
                    {hobbies.length != 0 && (
                      <div className="m-3">
                        <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                          HOBBIES
                        </p>
                        { hobbies.map((item) => (
                          <>
                            {item.enabled && (
                              <div
                                key={item.name}
                                className="pt-1 font-serif text-[12px] pl-4"
                              >
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

                {/* LANGUAGES
                    { languages.length != 0 &&
                       languages.filter((languages) => languages.enabled)
                        .length > 0 && (
                        <div className="m-3">
                          <p className="bg-gray-800 tracking-widest text-white p-1 w-[100%] rounded-md mt-3 text-center heading">
                            LANGUAGES
                          </p>
                          { languages.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.name} className="pt-2 pl-4">
                                  <li className=" text-[12px] text-base font-serif tracking-wide">
                                    {item.name} - {item.fluency}
                                  </li>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )} */}

                {/* EDUCATION */}
                {education && (
                  <div>
                    {education.length != 0 && (
                      <div className="p-2 ">
                        <p className="bg-gray-800 tracking-widest text-center rounded-md text-white p-1 m-1 heading">
                          EDUCATION
                        </p>

                        { education.map((item) => (
                          <>
                            {item.enabled && (
                              <div
                                key={item.institution}
                                className="text-base pl-4"
                              >
                                <p className="font-semibold font-serif text-[13px]">
                                  {item.institution}
                                </p>
                                <p className="text-[10px] text-gray-800 font-semibold">
                                  {" "}
                                  [ {item.startDate.slice(0, 4)} ] - [ {item.endDate.slice(0, 4)} ]
                                </p>
                                <div className="text-[12px]">
                                  <p>{item.fieldOfStudy}</p>
                                  <p>
                                    {item.typeOfDegree} {item.gpa}
                                  </p>
                                  {/* <p>{item.summary.data}</p>
                                  <p>{item.summary.enabled}</p> */}
                                  <p>{item.enabled}</p>
                                </div>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* SKILLS */}

                {skills?.filter((skill) => skill?.enabled).length > 0 && (
                  <div className="p-2 ">
                    <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                      SKILLS
                    </p>
                    { skills.map((item) => (
                      <>
                        {item.enabled && (
                          <div key={item.name} className=" pl-4 font-serif ">
                            <li className="text-[12px] p-1">
                              {item.name} - {item.level}
                            </li>
                            <p>{item.enabled}</p>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                )}
              </div>

              {/* projects */}
              {projects && (
                <div>
                  {projects.length != 0 && (
                    <div className="  p-3">
                      <p className="bg-gray-800 tracking-widest rounded-md text-center text-white p-1 mx-2 my-1 heading">
                        PROJECTS
                      </p>
                      { projects.map((item) => (
                        <>
                          {item.enabled && (
                            <div key={item.name} className="p-1 pl-5 ">
                              <p className="font-bold font-serif text-[13px] ">
                                {item.name}
                              </p>
                              <Link href={`{item.website}$`}>
                                <p className="font-semibold text-[12px] tracking-wider">
                                  {item.website}
                                </p>
                              </Link>
                              <p className="text-[12px]">{item.summary.data}</p>
                              <p>{item.summary.enabled}</p>
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
            <div className="  min-w-[50%] ">
              {/* NETWORK */}
              
              <div className="m-4">
              {profile && (
              
                <>
                  <h1 className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md heading">
                    NETWORK
                  </h1>
                  <div className="pl-4 text-[12px]">
                    <p className=" tracking-wider">{ profile.phone}</p>
                    <p className="tracking-wider">{ profile.email}</p>
                  </div>
                </>
                
                )}

                {/* INTERNSHIPS */}

                {work && (
                  <div>
                    {work.length != 0 && (
                      <>
                        <p className="bg-gray-800 tracking-widest text-white mt-1 p-1 text-center rounded-md  heading">
                          INTERNSHIPS
                        </p>
                        { work.map((item) => (
                          <>
                            {item.enabled && (
                              <div key={item.company} className="m-2">
                                <Link href={`{item.website}$`}>
                                  <p className="font-bold text-[13px] font-serif tracking-wide relative">
                                    {item.company}
                                    <span className="font-sans text-[10px] top-1 absolute text-gray-700 right-0">
                                    ({item.from.slice(0, 4)}-{item.to.slice(0, 4)})
                                    </span>
                                  </p>
                                </Link>
                                <p className=" text-[13px] font-semibold">
                                  {item.designation}
                                </p>
                                <p className="text-[12px]">
                                  {item.summary.data}
                                </p>
                                <p className="">{item.summary.enabled}</p>
                              </div>
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </div>
                )}

                <div>
                  {/* AWARDS */}
                  {awards && (
                    <div>
                      {awards.length != 0 && (
                        <div className="mt-5">
                          <p className="bg-gray-800 tracking-widest rounded-md text-center  text-white p-1 m-1 heading">
                            AWARDS
                          </p>
                          { awards.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.name} className=" m-2">
                                  <p className="font-bold font-serif text-[13px] tracking-wide">
                                    {item.name}
                                  </p>
                                  <p className="text-[12px] text-gray-700 font-semibold relative">
                                    Awarder : {item.awarder}{" "}
                                     <span className="text-[10px] absolute right-0  ">({item.date})</span>
                                    
                                  </p>
                                  <p className="text-[12px]">
                                    {item.summary.data}
                                  </p>
                                  <p>{item.summary.enabled}</p>
                                  <p>{item.enabled}</p>
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* CERTIFICATIONS */}
                  {certifications && (
                    <div>
                      {certifications.length != 0 && (
                        <div className="mt-5">
                          <p className="bg-gray-800 tracking-widest rounded-md mt-2 text-center text-white p-1 m-1 heading">
                            CERTIFICATION
                          </p>
                          { certifications.map((item) => (
                            <>
                              {item.enabled && (
                                <div key={item.title} className="pl-2 pt-1">
                                  <p className="font-semibold  font-serif text-[13px]">
                                    {item.title}{" "}
                                  </p>
                                  <p className="font-bold text-gray-600 text-[13px] font relative">
                                    {item.issuer}{" "}
                                    <span className=" font-bold font-sans text-gray-700 text-[12px] absolute right-1 ">
                                      [{item.date}]
                                    </span>{" "}
                                  </p>
                                  <p className="text-[12px]">
                                    {item.summary.data}
                                  </p>
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
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
