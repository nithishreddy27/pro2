import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Casual = ({ componentRef, filter = null }) => {
  const {
    profile,
    objective,
    education,
    work,
    skills,
    languages,
    projects,
    certifications,
    social,
    layout,
    hobbies,
    awards,
    setdesign,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl captialize font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
  const templateRef = document.getElementById("template");
  setdesign(templateRef);
  return (
    <div
      ref={componentRef}
      id="template"
      className="my-5 w-a4W bg-white mx-auto h-a4H"
    >
      <div className="py-2 px-2 h-full">
        {console.log("profile", social)}

        <div className="grid grid-cols-3">
          <div>
            <div className="col-span-1 bg-gray-300 h-[295mm] w-[95%]">
              <div>
                <img
                  className="rounded-lg w-24 h-35 m-auto pt-3"
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  src={profile?.image}
                  alt="ProfilePhoto"
                />
              </div>

              <div>
                <h1 className="font-medium mx-8 my-2  text-lg  text-orange-800 mt-5 text-[16px]">
                  Details
                </h1>
                <h2 className=" font-medium mx-8  text-black text-[12px] ">
                  Phone
                </h2>
                <h6 className=" px-8 text-[12px]">{profile?.phone}</h6>
                <h2 className=" font-medium px-8 text-[12px] text-black">
                  Email
                </h2>
                <h6 className=" px-8 text-[12px]">{profile?.email}</h6>
                <h2 className=" font-medium px-8  text-black text-[12px]">
                  Date Of Birth
                </h2>
                <h6 className=" px-8 text-[12px]">{profile?.dob}</h6>
              </div>
              {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
                <div>
                  <h1 className="font-medium mx-8 my-0 text-orange-800 text-lg pt-5 text-[16px]">
                    Skills
                  </h1>
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-semibold ml-8 text-[12px]">
                          {item.name}
                        </h1>
                        <h2 className="ml-8 text-[12px]">{item.level}</h2>
                      </div>
                    ))}
                </div>
              )}
              {social?.filter((social) => social?.enabled)?.length > 0 && (
                <div>
                  <h1 className="font-medium mx-8 my-0 text-orange-800 text-lg pt-5 text-[16px]">
                    Social Network
                  </h1>
                  {social
                    ?.filter((social) => social?.enabled === true)
                    .map((item) => (
                      <div className="ml-8 my-4 flex text-[12px]">
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 h-5"
                        />
                        <Link href={item.url}>
                          <h1 className="ml-4 text-[12px]">{item.username}</h1>
                        </Link>
                      </div>
                    ))}
                </div>
              )}
              {hobbies?.filter((hobbies) => hobbies?.enabled)?.length > 0 && (
                <div>
                  <h1 className="font-medium mx-8 text-lg text-orange-800 pt-5 text-[16px]">
                    Hobbies
                  </h1>
                  {hobbies
                    ?.filter((hobbies) => hobbies?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="px-8 text-[12px]">{item.name}</h1>
                      </div>
                    ))}
                </div>
              )}
              {languages?.filter((languages) => languages?.enabled)?.length >
                0 && (
                <div>
                  <h1 className="font-medium px-8 text-lg text-orange-800 pt-5 text-[16px]">
                    Languages
                  </h1>
                  {languages
                    ?.filter((languages) => languages?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="px-8 text-[12px]">{item.name}</h1>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 p-2 ">
            <h1 className="mt-12 text-5xl text-[25px] font-semi-bold ">
              {profile?.firstName} {profile?.lastName}
            </h1>
            <h2 className="font-medium mt-2 ">{profile?.role}</h2>
            {objective && (
              <div>
                <h1 className="font-medium text-orange-800 text-lg text-[16px] pt-12">
                  Profile
                </h1>
                <p className="text-[12px]">{objective}</p>
              </div>
            )}
            {work?.filter((work) => work?.enabled)?.length > 0 && (
              <div>
                <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">
                  Employement History
                </h1>
                {work
                  ?.filter((work) => work?.enabled === true)
                  .map((item) => (
                    <div>
                      <li className="relative font-semibold text-[12px]">
                        {item.company}
                        <span className="absolute right-0 font-semibold text-[10px]">
                       [ {item.from.slice(0, 10)} ] - [ {item.to.slice(0, 10)} ]
                      </span>
                      </li>
                      
                      <p className="ml-8 list-disc text-[12px]">
                        {item.designation}
                      </p>
                      <p className="ml-8 list-disc text-[12px]">
                        {item.website}
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {education?.filter((education) => education?.enabled)?.length >
              0 && (
              <div>
                <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">
                  Education
                </h1>
                {education
                  ?.filter((education) => education?.enabled === true)
                  .map((item) => (
                    <div>
                      <li className="relative font-semibold text-[12px]">
                        {item.institution}
                        <span className="absolute right-0 font-semibold text-[10px]">
                        [ {item.startDate.slice(0, 10)} ] -{" "}
                        [ {item.endDate.slice(0, 10)} ]
                      </span>
                      </li>

                      <p className="px-8 text-[12px]">{item.fieldOfStudy}</p>
                    </div>
                  ))}
              </div>
            )}
            {projects?.filter((projects) => projects?.enabled)?.length > 0 && (
              <div>
                <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">
                  Projects
                </h1>
                {projects
                  ?.filter((projects) => projects?.enabled === true)
                  .map((item) => (
                    <div>
                      <li className="relative font-semibold text-[12px]">{item.name}
                      <span className="absolute right-0 font-semibold text-[10px]">
                       [ {item.from.slice(0, 4)} - {item.to.slice(0, 4)} ]
                      </span>
                      </li>
                      
                      <p className=" px-8 text-[12px]">
                        {item.website}
                      </p>
                      <p className=" px-8 text-[12px]">
                        {item.summary.data}
                      </p>
                    </div>
                  ))}
              </div>
            )}
            {certifications?.filter((certifications) => certifications?.enabled)
              ?.length > 0 && (
              <div>
                <h1 className="font-medium text-orange-800 text-lg pt-4 text-[16px]">
                  Certifications
                </h1>
                {certifications
                  ?.filter((certifications) => certifications?.enabled === true)
                  .map((item) => (
                    <div>
                      <li className=" relative font-semibold text-[12px]">
                          {item.title}
                          <span className="absolute right-0 font-semibold bottom-1 text-[10px]">
                          [ {item.date} ]{" "}
                        </span>
                        </li>
                        <p className=" px-8 text-[12px]">
                          {item.issuer}
                        </p>
                        <p className=" px-8 text-[12px]">
                          {item.summary.data}
                          
                        </p>
                      
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .heading {
            color: rgba(${r}, ${g}, ${b}, ${a});
          }
        `}
      </style>
    </div>
  );
};
