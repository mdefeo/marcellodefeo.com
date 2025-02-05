"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SkillIcon from "@/components/ui/SkillIcon";
import { CaseStudyProps } from "@/interfaces/CaseStudiesInterface";
import icons from "@/lib/icons";

const CaseStudy: FC<CaseStudyProps> = ({ caseStudy }) => {
  const { name, title, image, url, description, challenges = [], outcomes = [], skills = [], clientLogo, role, team, duration } = caseStudy;

  return (
    <div className="flex flex-col items-start md:flex-row md:items-start gap-8 mb-8">
      <div className="w-full md:w-1/3 mx-auto">
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <Image
            src={`/images/studies/${image || 'default.jpg'}`}
            alt={name}
            width={500}
            height={300}
            className="object-cover rounded-lg shadow-lg mx-auto"
          />
        </Link>
        <h3 className="text-xl text-gray-700 mt-6 py-0">{title}</h3>
        <p className="text-gray-500 mb-4 italic">{description}</p>
        <div className="flex flex-wrap mt-6">
          {skills.length > 0 ? (
            skills.map((skill, index) => {
              const isLocalIcon = skill.icon in icons;
              return (
                <SkillIcon
                  key={index}
                  name={skill.icon as keyof typeof icons}
                  alt={skill.alt}
                  size={18}
                  className="inline-flex text-lg mr-4 mb-4"
                  isFontAwesome={!isLocalIcon}
                />
              );
            })
          ) : (
            <p>No skills available.</p>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 self-start text-gray-700">
        <h4 className="pt-0 font-semibold">Challenges</h4>

        {Array.isArray(challenges) ? (
          <ul className="list-disc list-outside mt-4 pl-3">
            {challenges.map((challenge, index) => (
              <li key={index} className="text-sm leading-relaxed">{challenge}</li>
            ))}
          </ul>
        ) : (
          <p>{challenges}</p>
        )}

        <hr className="my-4 border-gray-300" />

        {outcomes.length > 0 && (
          <>
            <h4 className="pt-4 font-semibold">Outcomes</h4>
            <ul className="list-disc list-outside mt-4 pl-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: outcome }} />
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="w-full lg:block hidden md:w-1/6 self-start text-sm text-gray-700">
        <div className="mb-4">
          <Image
            src={`/images/businesses/${clientLogo || 'default-logo.jpg'}`}
            alt="Client Logo"
            width={100}
            height={50}
            className="object-contain w-full"
          />
        </div>
        <div className="mb-4">
          <h5 className="font-semibold">Role</h5>
          <p>{role}</p>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="mb-4">
          <h5 className="font-semibold">Team</h5>
          {Array.isArray(team) ? (
            <ul className="list-none list-outside mt-4 pl-0">
              {team.map((member, index) => (
                <li key={index} className="text-sm leading-relaxed">{member}</li>
              ))}
            </ul>
          ) : (
            <p>{team}</p>
          )}
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="mb-4">
          <h5 className="font-semibold">Duration</h5>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;