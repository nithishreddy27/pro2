import Image from "next/image";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import {FiMail} from "react-icons/fi"
import { BsTelephone} from "react-icons/bs";
import {VscDebugBreakpointLog} from "react-icons/vsc";
import {MdSchool} from "react-icons/md";
import {FaSquareFull} from "react-icons/fa";
import {BsFillAwardFill} from "react-icons/bs";
import {MdWork} from "react-icons/md";
import { useResumeContext } from "../../../context/ResumeContext";
import { months, rename } from "../../../lib/helper";
import { MarkdownRenderer } from "../../../lib/MarkdownRenderer";
import Link from "next/link";
export const Symmetric = React.forwardRef(function NonCore({ componentRef }) {
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
  return (
    <div
      ref={componentRef}
      style={{ fontFamily: layout?.font }}
      className="flex my-5 w-a4W bg-white mx-auto h-a4H"
    >
      <div>
        <div className="first w-[210mm] h-[30mm] bg-zinc-300 flex">
          <div className="name font-serif">
            <h1 className="text-lg font-semibold px-10 pt-5">
              {profile?.firstName}
              <span className="font-normal pl-2"> {profile?.lastName}</span>
            </h1>
            <div className="flex">
            <h2 className="text-base px-10 pt-5 font-sans font-medium">
              {profile?.role}
            </h2>
            {social?.filter((soc) => soc?.enabled)?.length > 0 && (
                <div className="social pl-5 pt-5 flex">
                  {social
                    ?.filter((soc) => soc?.enabled === true)
                    .map((item) => (
                      <div className="pr-2">
                        <span>
                          <Link href={item.url}>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              className="w-5 grayscale-[40%]"
                            ></img>
                          </Link>
                        </span>
                      </div>
                    ))}
                </div>
              )}
              </div>
          </div>
          <div className="photo">
            <div className="pl-[80px] pt-16 ml-20">
              <img
                src="https://th.bing.com/th/id/R.3f1e3fb67a36a4f0e88e267a39fc5fe4?rik=SWNFXn5k1gxRFA&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2fpassport-026.jpg&ehk=MqDfVA9i8hE5HdOOiYBteZYzQTs1TxhQivfpM8mk9EA%3d&risl=&pid=ImgRaw&r=0"
                className="w-[130px] h-[130px] rounded-full"
              ></img>
            </div>
          </div>
        </div>
        <div className="second flex">
          <div className="side1 w-[85mm]">
            <div className="contact  border-b-2 border-r-2 border-gray-500 mx-6 mt-2">
              <div className="dob pl-5 pt-2 text-sm">
              <MdDateRange className="inline"></MdDateRange>
                <span className=" relative top-[2px] left-2">{profile?.dob}</span>
              </div>
              <div className="phone pl-5 pt-2 text-sm">
              <BsTelephone className="inline"></BsTelephone>
                <span className=" relative top-[2px] left-2">{profile?.phone}</span>
              </div>
              <div className="mail pl-5 pt-2 text-sm">
              <FiMail className="inline"></FiMail>
                <span className=" relative top-[2px] left-2">{profile?.email}</span>
              </div>
              
              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
            </div>
            {education?.filter((edu) => edu?.enabled)?.length > 0 && (
              <div className="education border-b-2 border-r-2 border-gray-500 mx-6">
                <div className="pb-1">
                  <h2 className="text-center text-base font-serif font-bold underline pt-2">
                    E D U C A T I O N
                  </h2>
                  {education
                    ?.filter((edu) => edu?.enabled === true)
                    .map((item) => (
                      <p className="pl-5 pr-2 pt-2 text-sm">
                        <MdSchool className=" inline text-lg relative right-1 bottom-[2px]"></MdSchool>
                        <span className="font-medium">{item.institution}</span>{" "}
                        in{" "}
                        <span className="font-medium">
                          {item.fieldOfStudy}
                          <br />({item.startDate.slice(0,4)} - {item.endDate.slice(0,4)})
                        </span>
                        <br />
                         {item.typeOfDegree} in{" "}
                        {item.fieldOfStudy} ({item.gpa})
                      </p>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
              </div>
            )}
            {certifications?.filter((cert) => cert?.enabled)?.length > 0 && (
              <div className="certifications border-r-2 border-b-2 border-gray-500 mx-6">
                <div className="pb-1">
                  <h2 className="text-center text-base font-serif font-bold underline pt-2 pb-2">
                    C E R T I F I C A T I O N S
                  </h2>
                  {certifications
                    ?.filter((cert) => cert?.enabled === true)
                    .map((item) => (
                      <p className="pl-5 pr-2 pb-1 text-sm">
                        <FaSquareFull className="inline  text-[10px] relative right-1 bottom-[2px]"></FaSquareFull>
                        <i className="bx bxs-square text-xs pr-3"></i>
                        {item.title} from {item.issuer}
                      </p>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
              </div>
            )}
            {skills?.filter((skill) => skill?.enabled)?.length > 0 && (
              <div className="skills border-r-2 border-b-2 border-gray-500 mx-6">
                <div className="pl-5 pb-1">
                  <h2 className="text-center text-base font-serif font-bold underline pt-2 pb-2">
                    S K I L L S
                  </h2>
                  {skills
                    ?.filter((skill) => skill?.enabled === true)
                    .map((item) => (
                      <span className="pr-2 text-sm">{item.name} </span>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
              </div>
            )}
            {awards?.filter((awa) => awa?.enabled)?.length > 0 && (
              <div className="awards border-r-2 border-b-2 border-gray-500 mx-6">
                <div className="pl-5 ">
                  <h2 className="text-center text-base font-serif font-bold underline pt-2 pb-2">
                    A W A R D S
                  </h2>
                  {awards
                    ?.filter((awa) => awa?.enabled === true)
                    .map((item) => (
                      <p className="pr-2 pb-1 text-sm">
                        <BsFillAwardFill className="inline relative right-1 bottom-[2px] text-zinc-700"></BsFillAwardFill>
                        <span className="font-medium">
                          {item.name}
                        </span> from {item.awarder}
                      </p>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[266px] bottom-[-5px] bg-white "></div>
              </div>
            )}
            {languages?.filter((lang) => lang?.enabled)?.length > 0 && (
              <div className="languages border-r-2  border-gray-500 mx-6">
                <div className="pl-10 pb-1">
                  <h2 className="text-center text-base font-serif font-bold underline pt-2 pb-2">
                    L A N G U A G E S
                  </h2>
                  {languages
                    ?.filter((lang) => lang?.enabled === true)
                    .map((item) => (
                      <span className="text-sm">{item.name}</span>
                    ))}
                </div>
              </div>
            )}
          </div>
          <div className="side2 w-[125mm]">
            <div className="career-objective border-b-2 border-gray-500 ml-[-24px] mr-5">
              <h2 className="text-center text-base font-serif font-bold underline pt-[85px]">
                C A R E E R O B J E C T I V E
              </h2>
              <p className="pl-10 pr-5 pt-2 pb-3 text-sm">{objective}</p>
              <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
            </div>
            {work?.filter((wor) => wor?.enabled)?.length > 0 && (
              <div className="experience border-b-2 border-gray-500 ml-[-24px] mr-5">
                <h2 className="text-center text-base font-serif font-bold underline pt-3">
                  E X P E R I E N C E
                </h2>
                <div className="pb-2">
                  {work
                    ?.filter((wor) => wor?.enabled === true)
                    .map((item) => (
                      <p className="pl-10 pr-5 pt-2 text-sm">
                        <MdWork className="inline relative bottom-[2px] right-1"></MdWork>
                        <span class="font-medium  pr-3">
                          {item.designation} in {item.company}
                        </span>
                        <br></br>({item.from.slice(0,4)} - {item.to.slice(0,4)})<br />
                        <Link href={item.website}>{item.website}</Link>
                        <br></br>
                        {item.summary.data}
                      </p>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
              </div>
            )}
            {projects?.filter((pro) => pro?.enabled)?.length > 0 && (
              <div className="projects border-gray-500 border-b-2 ml-[-24px] mr-5">
                <h2 className="text-center text-base font-serif font-bold underline pt-3">
                  P R O J E C T S
                </h2>
                <div className="pb-2">
                  {projects
                    ?.filter((pro) => pro?.enabled === true)
                    .map((item) => (
                      <p className="pl-10 pr-5 pt-3 text-sm">
                        <FaSquareFull className="inline text-[10px] relative right-1 bottom-[2px]"></FaSquareFull>
                        <span className="font-medium pr-3">{item.name}</span> (
                        {item.from.slice(0,4)} - {item.to.slice(0,4)})<br />
                        <Link href={item.website}>{item.website}</Link>
                        <br></br>
                        {item.summary.data}
                      </p>
                    ))}
                </div>
                <div className="w-3 h-3 rounded-full border-2 border-gray-500 relative left-[-7px] bottom-[-6px] bg-white "></div>
              </div>
            )}
            {hobbies?.filter((hob) => hob?.enabled)?.length > 0 && (
              <div className="hobbies border-gray-500 border-l-2  ml-[-25.5px] mr-5">
                <h2 className="text-center text-base font-serif font-bold underline pt-1">
                  H O B B I E S
                </h2>
                <div className="pl-10">
                  {hobbies
                    ?.filter((hob) => hob?.enabled === true)
                    .map((item) => (
                      <span className="pr-3 text-sm">{item.name}</span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

// export default function Preview({ userInfo }) {
//   return (
//     userInfo && (
//           <hr />
//           <hr />
//         </div>
//
//           <hr />
//           <div>
//             <h3>Areas of Expertise</h3>
//             <div>
//               <h5>Tech skills:</h5> {userInfo.techSkills}
//             </div>
//             <h5>Non Tech Skills:</h5>
//             {userInfo.nonTechSkills &&
//               userInfo.nonTechSkills.map((nts) => {
//                 return (
//                   <div key={nts.id} id={nts.id}>
//                     <div>•{nts.nonTechSkill}</div>
//                   </div>
//                 );
//               })}
//           </div>
//           <hr />
//
//           <hr />
//         </div>
//       </div>
//     )
//   );
// }
