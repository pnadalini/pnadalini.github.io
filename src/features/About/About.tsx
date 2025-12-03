import React from "react";
import { Section, SectionTitle } from "../../shared/Sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCode,
  faDatabase,
  faGraduationCap,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 bg-primary-100/20 text-primary-50 px-3 py-1 rounded-full text-sm font-medium border border-primary-100/40">
    {children}
  </div>
);

const About = () => (
  <Section id="about" className="bg-indigo-dye">
    <SectionTitle subtitle="Get to know more about my background and expertise">
      About Me
    </SectionTitle>

    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <div className="prose prose-lg max-w-none">
          <p className="text-primary-100 leading-relaxed">
            I'm a software engineer leader with <strong>8+ years of experience</strong> leveraging
            data to drive product decisions into successful user experiences. I'm a growth minded
            individual that looks into improving software, processes and products for consumers and
            businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faCalendar}
                size="2x"
                className="w-6 h-6 text-primary-200"
              />
              <h3 className="text-lg font-semibold text-primary-50">Experience</h3>
            </div>
            <p className="text-2xl font-bold text-primary-200">8+ Years</p>
            <p className="text-primary-100">Software Engineering</p>
          </div>

          <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                size="2x"
                className="w-6 h-6 text-primary-200"
              />
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
            {["React.js", "Redux", "Node.js", "NextJS", "Docker", "Jest", "Cypress", "Kubernetes"].map(
              (skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-primary-50 mb-4 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faDatabase}
              size="2x"
              className="w-6 h-6 text-primary-200"
            />
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

export default About;
