import { Section, SectionTitle } from "../../shared/Sections";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "PayPal",
      location: "Guatemala, Guatemala",
      title: "Senior Software Engineer",
      period: "Nov 2024 - Present",
      achievements: [
        "Led multiple PYUSD stablecoin product expansions by architecting and implementing multi-network support and holder rewards program, growing market cap from $540M to $3.8B (700%+ increase).",
        "Led web/mobile teams to increase TPV for more than 7% per year for 500M+ users with new features like buy optimizations, recurring purchases.",
        "Designed and implemented e2e refactors leveraging AI, increasing pass rate by 10%, and reducing engineering time 50% during regression testing (saving ~50 hours/month).",
      ],
      skills: [
        "React",
        "TypeScript",
        "Jest",
        "Node.js",
        "Cypress",
        "Storybook",
        "Java",
        "GraphQL",
        "CSS",
        "FE Architecture",
      ],
    },
    {
      company: "Lead Sherpa",
      location: "Colorado, USA",
      title: "Lead Frontend Engineer",
      period: "June 2022 - Oct 2024",
      achievements: [
        "Achieved a 92%+ customer retention rate, partnering with Customer Success to reduce lead times, giving tools to the team so they could engage with users more eﬀectively and reduce churn rate",
        "Led GitLab CI build time reduction by 70% (from 12+ minutes to 3-4 minutes), enabling faster deployments and multiple releases per day for the distributed team",
        "Established frontend architecture standards to accelerate feature development velocity.",
        "Decreased bundle size by 15% through strategic code refactoring to improve UX with shorter load times and faster development build times.",
        "Optimized database queries for 1M+ row tables, reducing API response times and cutting database load by 30%+.",
      ],
      skills: ["React", "TypeScript", "Django", "Python", "Kubernetes", "Storybook", "Redis", "PostgreSQL", "LLMs"],
    },
    {
      company: "RewardsWeb",
      location: "Guatemala, Guatemala",
      title: "Senior Software Engineer",
      period: "Sept 2019 - Oct 2021",
      achievements: [
        "Improved UI/UX using data from Analytics & ElasticSearch to increase customer satisfaction 20%+, achieving 4.33 stars with 200+ ratings collaborating with product designers & stakeholders.",
        "Expanded market reach to 10+ new countries by implementing internationalization (i18n) across 3 languages, unlocking 5M+ potential customers for user acquisition.",
        "Mentored 3 newly formed frontend teams during company expansion to reduce ramp up time.",
        "Designed and implemented logic to process transactions for over $2M in Amazon purchases.",
        "Established CI/CD pipelines to reduce deployment time to ~5 min for faster release cycles.",
      ],
      skills: ["React", "TypeScript", "Redux", "Java", "MySQL", "Redis", "Terraform", "AWS", "CSS", "Google Analytics"],
    },
    {
      company: "Viaro Networks",
      location: "Guatemala, Guatemala",
      title: "Full Stack Developer",
      period: "Oct 2017 - Aug 2019",
      achievements: [
        "Maintained website with AngularJS supporting over 100 campaign/donation pages.",
        "Conducted code reviews using John Papa's style guide for syntax, conventions, & code structure.",
        "Led teammates in Guatemala to collaborate effectively with international peers in Canada, USA, and India.",
      ],
      skills: ["AngularJS", "JavaScript", "C#", "SQL Server", "Leadership"],
    },
  ];

  return (
    <Section id="experience" className="bg-indigo-dye">
      <SectionTitle subtitle="My professional journey and key achievements">Professional Experience</SectionTitle>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
