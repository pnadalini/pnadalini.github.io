import { Section, SectionTitle } from "../../shared/Sections";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      company: "NovoPayment",
      location: "Remote, Guatemala",
      title: "Engineering Manager",
      period: "Apr 2026 - Present",
      achievements: [
        "Lead and coach a distributed team of 8 engineers across 6 countries in LATAM through 1:1s, career growth plans and performance reviews, partnering closely with Product on priorities.",
        "Built Claude Code skills into the team's development workflow (code review, planning, PR summaries), reducing cycle time by 35% while cutting PR sizes and review time to under 4h, tracked through Swarmia.",
        "Increased team AI adoption from 45% to 100% of engineers using AI tools daily by running hands-on workshops and defining review guidelines to direct, validate and judge AI output.",
        "Led the launch of a multi-tenant MVP and customer portal demos with Product, removing friction from the first-use experience.",
        "Designed a multi-tenant architecture so new customers go live faster, cutting activation time from weeks to days and improving long-term retention.",
      ],
      skills: [
        "People Management",
        "AI-Assisted Development",
        "Claude Code",
        "Spec-Driven Development",
        "OKRs",
        "DORA Metrics",
        "React",
        "TypeScript",
        "Node.js",
        "Go",
        "PostgreSQL",
      ],
    },
    {
      company: "PayPal",
      location: "Hybrid, Guatemala",
      title: "Senior Software Engineer",
      period: "Nov 2024 - Mar 2026",
      achievements: [
        "Led multiple PYUSD stablecoin product expansions by architecting and implementing multi-network support and holder rewards program, growing market cap from $540M to $3.8B (700%+ increase).",
        "Led web and mobile teams with Product and Design to remove friction from the buy flow (buy optimizations, recurring purchases), growing TPV 7%+ per year across 500M+ users.",
        "Ran A/B tests on new releases with Product and Design, validating that each new flow was clear and frictionless for users before full rollout.",
        "Directed an AI-assisted e2e test refactor, reviewing and validating generated tests before merge, raising pass rate 10% and cutting regression effort 50% (~50 hours/month saved).",
        "Built Claude Code skills to automate repetitive development tasks and coached the team to adopt them, streamlining workflows and improving team velocity.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Cypress",
        "Datadog",
        "Java",
        "Claude Code",
        "A/B Testing",
        "FE Architecture",
      ],
    },
    {
      company: "Lead Sherpa",
      location: "Remote, United States",
      title: "Lead Frontend Engineer",
      period: "Nov 2021 - Oct 2024",
      achievements: [
        "Led a team of 3 frontend engineers, running 1:1s, code reviews and career conversations to help each engineer grow.",
        "Partnered with Customer Success to remove friction from lead workflows and give users better engagement tools, holding customer retention above 92% and reducing churn.",
        "Led GitLab CI build time reduction by 70% (from 12+ minutes to 3-4 minutes), enabling faster deployments and multiple releases per day for the distributed team.",
        "Wrote RFCs and frontend architecture standards that aligned the team on technical decisions and accelerated feature delivery.",
        "Decreased bundle size by 15% through strategic code refactoring to improve UX with shorter load times and faster development build times.",
        "Optimized database queries for 1M+ row tables, reducing API response times and cutting database load by 30%+.",
      ],
      skills: ["React", "TypeScript", "Django", "Python", "Kubernetes", "Storybook", "Redis", "PostgreSQL", "LLMs"],
    },
    {
      company: "RewardsWeb",
      location: "Hybrid, Guatemala",
      title: "Senior Software Engineer",
      period: "Sep 2019 - Oct 2021",
      achievements: [
        "Mentored 3 newly formed frontend teams during company expansion to reduce ramp up time.",
        "Used Analytics & ElasticSearch data with product designers to find and fix friction points in the shopping flow, raising customer satisfaction 20%+ to 4.33 stars across 200+ ratings.",
        "Expanded market reach to 10+ new countries by implementing internationalization (i18n) across 3 languages, unlocking 5M+ potential customers for user acquisition.",
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
