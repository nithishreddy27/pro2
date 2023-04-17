import React from "react";
import { useResumeContext } from "../../../context/ResumeContext";
import { rename, months } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";

export const Vertical = ({ componentRef, filter = null }) => {
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
    setdesign,
  } = useResumeContext();
  const { r, g, b, a } = layout?.color || { r: "0", g: "0", b: "0", a: "0" };
  const headingClass =
    "text-lg text-center capitalize font-bold text-gray-700 mb-2 pb-1";
  const templateRef = document.getElementById("template");
  setdesign(templateRef);
  return (
    <div ref={componentRef} id="template" className="w-a4W bg-white mx-auto h-a4H my-5">
      

      <div className="relative">
        <div className="w-[205mm] h-40 bg-blue-500 absolute  z-0 mt-10">
          <h1 className="text-white ml-80 mt-8 text-5xl text-[25px]">
            {profile?.firstName} {profile?.lastName}
          </h1>
          <h6 className="text-white ml-80 mt-1 text-[16px] ">
            {profile?.role}
          </h6>
        </div>
        <div className="grid grid-cols-3">
          <div className="bg-slate-900 h-[292mm] ml-5 z-10">
            <img
              className="w-40 m-10 rounded-lg"
              //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              src={profile?.image}
              alt="ProfilePhoto"
            />
            {skills?.filter((skills) => skills?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px] ">
                    SKILLS
                  </h1>
                  {skills
                    ?.filter((skills) => skills?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-normal   text-white text-[12px]">
                          {item.name}
                        </h1>
                        <li className="text-sm ml-4 text-white text-[12px]">
                          {item.level}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {social?.filter((social) => social?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    SOCIAL
                  </h1>
                  {social
                    ?.filter((social) => social?.enabled === true)
                    .map((item) => (
                      <div className="ml-4 my-4 flex">
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          className="w-5 h-5"
                        />
                        <Link href={item.url}>
                          <h1 className="ml-4 text-white text-[12px]">
                            {item.username}
                          </h1>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {awards?.filter((awards) => awards?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    AWARDS
                  </h1>
                  {awards
                    ?.filter((awards) => awards?.enabled === true)
                    .map((item) => (
                      <div className="m-2">
                        <h1 className="text-white text-[12px]">
                          {item.awarder}
                        </h1>
                        <li className="text-white text-sm ml-4 text-[12px]">
                          {item.awarder}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {hobbies?.filter((hobbies) => hobbies?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-2 border-white m-6 p-3">
                  <h1 className="font-medium text-lg text-white text-[16px]">
                    HOBBIES
                  </h1>
                  {hobbies
                    ?.filter((hobbies) => hobbies?.enabled === true)
                    .map((item) => (
                      <div className="m-2">
                        <h1 className="text-white text-[12px]">{item.name}</h1>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2">
            {objective && (
              <div>
                <div className="pt-48">
                  <div className="border-b-4 border-black m-4 p-5">
                    <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                      ABOUT ME
                    </h1>
                    <p className="text-sm font-medium pt-1 text-[12px]">
                      {objective}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {work?.filter((wor) => wor?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    WORK EXPERIENCE
                  </h1>
                  {work
                    ?.filter((wor) => wor?.enabled === true)
                    .map((item) => (
                      <div className="p-1">
                        <h1 className="font-medium ml-4 text-lg text-[12px]">
                          {item.company}
                        </h1>
                        <h2 className="font-medium text-xs ml-4 text-[12px]">
                          {item.from} - {item.to}
                        </h2>
                        <li className="ml-10 list-disc font-medium text-[12px]">
                          {item.designation}
                        </li>
                        <li className="ml-10 list-disc font-medium text-[12px]">
                          {item.website}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {education?.filter((education) => education?.enabled)?.length >
              0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    EDUCATION
                  </h1>
                  {education
                    ?.filter((education) => education?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="font-medium ml-6 text-[12px]">
                          {item.institution}
                        </h1>
                        <h6 className="text-xs font-medium ml-6 text-[12px]">
                          {item.startDate} - {item.endDate}
                        </h6>
                        <li className="ml-8 font-medium text-[12px]">
                          {item.fieldOfStudy}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
            {awards?.filter((awards) => awards?.enabled)?.length > 0 && (
              <div>
                <div className="border-b-4 border-black m-4 p-2">
                  <h1 className="font-medium text-lg text-gray-600 text-[16px]">
                    AWARDS
                  </h1>
                  {awards
                    ?.filter((awards) => awards?.enabled === true)
                    .map((item) => (
                      <div>
                        <h1 className="ml-8 text-normal font-medium text-[12px]">
                          {item.name}
                        </h1>
                        <li className="ml-12 text-sm font-medium text-[12px]">
                          {item.awarder}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
