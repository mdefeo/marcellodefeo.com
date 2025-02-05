"use client";
import { useState } from "react";
import { CaseStudiesInterface } from "@/interfaces/CaseStudiesInterface";
import CaseStudy from "@/components/ui/CaseStudyItem";
import caseStudiesData from "@/data/experience/caseStudyData.json";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";

export default function CaseStudiesSection() {
  const [caseStudies] = useState<CaseStudiesInterface[]>(caseStudiesData);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudiesInterface>(caseStudies[0]);

  const handleTabSelect = (study: CaseStudiesInterface) => {
    setSelectedCaseStudy(study);
  };

  return (
    <section
      aria-labelledby="case-studies-heading"
      id="case-studies"
      role="contentinfo"
      className="case-studies-section flex flex-col items-center justify-center h-auto md:h-screen gap-4"
    >
      <TabGroup onChange={(index) => handleTabSelect(caseStudies[index])}>
        <TabList className="tabs tabs-bordered mb-6">
          {caseStudies.map((study) => (
            <Tab
              key={study.name}
              className={`tab ${selectedCaseStudy.name === study.name ? "tab-active focus-visible:outline-none text-gray-700 font-semibold" : ""}`}
            >
              {study.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="w-full md:max-w-3xl lg:max-w-7xl">
          {caseStudies.map((study) => (
            <Tab.Panel key={study.name} className="rounded-xl bg-white p-6">
              <CaseStudy caseStudy={study} />
            </Tab.Panel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}