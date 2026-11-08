import React from "react";
import { Section, SectionTitle } from "../../shared/Sections";
import { calculateYearsOfExperience } from "../../shared/yearsOfExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCode, faGraduationCap, faRobot, faUsers, faWrench } from "@fortawesome/free-solid-svg-icons";

const skillGroups = [
  { title: "Languages", icon: faCode, skills: ["TypeScript", "JavaScript", "Python", "Java", "Go", "C#"] },
  {
    title: "Technologies",
    icon: faWrench,
    skills: [
      "React",
      "Node.js",
      "Redux",
      "Django",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Cypress",
      "Jest",
      "Storybook",
      "Datadog",
    ],
  },
  {
    title: "AI Workflows",
    icon: faRobot,
    skills: ["Claude Code", "AI-Assisted Development", "Spec-Driven Development", "LLMs"],
  },
  {
    title: "Leadership",
    icon: faUsers,
    skills: ["People Management", "OKRs", "DORA Metrics", "A/B Testing", "RFCs", "Scrum"],
  },
];

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 bg-primary-100/20 text-primary-50 px-3 py-1 rounded-full text-sm font-medium border border-primary-100/40">
    {children}
  </div>
);

const About = () => {
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <Section id="about" className="bg-indigo-dye">
      <SectionTitle subtitle="Get to know more about my background and expertise">About Me</SectionTitle>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-primary-100 leading-relaxed mb-2">
              Hey! I'm a software engineer turned Engineering Manager with a growth mindset.
            </p>

            <p className="text-primary-100 leading-relaxed mb-2">
              For {yearsOfExperience}+ years I've built consumer and fintech products for 500M+ users, using data and
              testing to remove friction across acquisition, activation and retention.
            </p>

            <p className="text-primary-100 leading-relaxed">
              I've led distributed teams across LATAM and North America with AI-first workflows and clear guides and
              docs. Shipping fast matters, but a team that works well together is what makes a company thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faCalendar} size="2x" className="w-6 h-6 text-primary-200" />
                <h3 className="text-lg font-semibold text-primary-50">Experience</h3>
              </div>
              <p className="text-2xl font-bold text-primary-200">{yearsOfExperience}+ Years</p>
              <p className="text-primary-100">Building products and teams</p>
            </div>

            <div className="bg-oxford-blue-2 p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" className="w-6 h-6 text-primary-200" />
                <h3 className="text-lg font-semibold text-primary-50">Education</h3>
              </div>
              <p className="text-lg font-semibold text-primary-50">BSc. in Software Engineering</p>
              <p className="text-primary-100">Rafael Landivar University</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {skillGroups.map(({ title, icon, skills }) => (
            <div key={title}>
              <h3 className="text-xl font-semibold text-primary-50 mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={icon} size="2x" className="w-6 h-6 text-primary-200" />
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
