import React from "react";
import { Section, SectionTitle } from "../../shared/Sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCode, faDatabase, faGraduationCap, faWrench } from "@fortawesome/free-solid-svg-icons";

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 bg-primary-100/20 text-primary-50 px-3 py-1 rounded-full text-sm font-medium border border-primary-100/40">
    {children}
  </div>
);

const calculateYearDiff = (beginDate: Date) => {
  const msDiff: number = Date.now() - beginDate.getTime();
  const ageDate: Date = new Date(msDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const About = () => {
  const workingStartDate = new Date("2017-02-02");
  const yearsOfExperience = calculateYearDiff(workingStartDate);

  return (
    <Section id="about" className="bg-indigo-dye">
      <SectionTitle subtitle="Get to know more about my background and expertise">About Me</SectionTitle>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-primary-100 leading-relaxed mb-2">
              Hey! I'm a full-stack engineer and leader with a growth-minded brain.
            </p>

            <p className="text-primary-100 leading-relaxed mb-2">
              I excel at building the best products, focusing on great user experience. From looking at data, analytics
              or testing the product, I can improve the system from all angles. I design, build and integrate end to end
              products with clear documentation, so the team or an LLM can understand the product.
            </p>

            <p className="text-primary-100 leading-relaxed">
              From small startups to enterprises I like to shape the product, team dynamics and company culture.
              Internally I like building maintainable applications, automate processes and scale the product. Shipping
              fast matters, but building a team that works well together will make the company thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faCalendar} size="2x" className="w-6 h-6 text-primary-200" />
                <h3 className="text-lg font-semibold text-primary-50">Experience</h3>
              </div>
              <p className="text-2xl font-bold text-primary-200">{yearsOfExperience}+ Years</p>
              <p className="text-primary-100">Software Engineering</p>
            </div>

            <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="w-6 h-6 text-primary-200" />
                <h3 className="text-lg font-semibold text-primary-50">Education</h3>
              </div>
              <p className="text-lg font-semibold text-primary-50">Bachelor in Computer Science</p>
              <p className="text-primary-100">Rafael Landivar University</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-primary-50 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} size="2x" className="w-6 h-6 text-primary-200" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript", "Python", "Java", "C#"].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-50 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faWrench} size="2x" className="w-6 h-6 text-primary-200" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Redux",
                "Git",
                "Docker",
                "Jest",
                "Redis",
                "Node.js",
                "NextJS",
                "Jenkins",
                "Kubernetes",
                "Django",
              ].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary-50 mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faDatabase} size="2x" className="w-6 h-6 text-primary-200" />
              Other
            </h3>
            <div className="flex flex-wrap gap-2">
              {["SQL", "NoSQL", "Storybook", "Scrum", "Jira", "Figma"].map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
