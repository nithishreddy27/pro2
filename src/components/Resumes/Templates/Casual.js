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
    setdesign
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-xl captialize font-bold text-gray-700 border-b-2 border-black mb-2 pb-1";
    const templateRef = document.getElementById("template");
    setdesign(templateRef)
    return (
    <div ref={componentRef} id="template" className="my-5 w-a4W bg-white mx-auto h-a4H">
      <div className="py-2 px-2 h-full">
        {console.log("profile", social)}

        <div className="grid grid-cols-3">
          <div>
            <div className="col-span-1 bg-gray-300 h-[100%] w-[95%]">
              <div>
                <img
                  className="rounded-full w-[119px] ml-10 pt-3"
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
                        <h1 className="font-medium ml-8 text-[12px]">
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
                      <h1 className="font-medium text-[12px]">
                        {item.company}
                      </h1>
                      <h2 className="font-semibold text-xs text-[12px]">
                        {item.from.slice(0, 8)} - {item.to.slice(0, 8)}
                      </h2>
                      <li className="ml-8 list-disc text-[12px]">
                        {item.designation}
                      </li>
                      <li className="ml-8 list-disc text-[12px]">
                        {item.website}
                      </li>
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
                      <h1 className="font-medium text-[12px]">
                        {item.institution}
                      </h1>
                      <h6 className="text-xs font-semibold text-[12px]">
                        {item.startDate.slice(0, 8)} -{" "}
                        {item.endDate.slice(0, 8)}
                      </h6>
                      <li className="px-8 text-[12px]">{item.fieldOfStudy}</li>
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
                      <h2 className="font-medium text-[12px]">{item.name}</h2>
                      <h6 className="text-xs font-semibold     text-[12px]">
                        {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                      </h6>
                      <li className="text-sm px-8 text-[12px]">
                        {item.website}
                      </li>
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
                      <h2 className="font-medium text-[12px]">{item.name}</h2>
                      <h6 className="text-xs font-semibold text-[12px]">
                        {item.from} - {item.to}
                      </h6>
                      <li className="text-sm px-8 text-[12px]">
                        {item.website}
                      </li>
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
