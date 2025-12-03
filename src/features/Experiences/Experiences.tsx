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
        "Building Cryptocurrencies Hub, Blockchain, Crypto, and Digital Currencies (BCDC) product serving over 500M users",
        "Led web/mobile teams to increase TPV by more than 7% per year with new feature adoptions like recurring purchases",
        "Led and worked with the frontend team to increase PYUSD stablecoin market cap by 300%+ in a year (to $3.5b) by adding rewards for holders and expanding the crypto networks offered on the system",
        "Expanded capabilities of buy/hold/sell/transfer flows for more than 5 crypto networks on PayPal's financial section",
        "Improved e2e testing pass rate by 10% during regression testing, increasing unit test coverage to over 80%",
      ],
      technologies: ["React.js", "Redux", "Node.js", "Cypress", "Storybook", "Java"],
    },
    {
      company: "Lead Sherpa",
      location: "Colorado, USA",
      title: "Lead Frontend Engineer",
      period: "June 2022 - Oct 2024",
      achievements: [
        "Designed and developed SaaS WebApp achieving 92%+ retention rate",
        "Partnered with Customer Success to reduce lead times and improve agent engagement tools",
        "Created coding and style guidelines, refactored code architecture to improve productivity",
        "Reduced GitLab CI build time by 250% down to 3-4 minutes",
        "Reduced build size by 15% with strategic refactoring and elimination of unnecessary packages",
        "Managed international team from over 4 countries, organizing priorities and monitoring systems",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Docker",
        "Django",
        "Python",
        "Storybook",
        "Redis",
        "PostgreSQL",
        "Kubernetes",
      ],
    },
    {
      company: "RewardsWeb",
      location: "Guatemala, Guatemala",
      title: "Senior Software Engineer",
      period: "Sept 2019 - Oct 2021",
      achievements: [
        "Built chrome extension & website with over 100,000 users achieving 4.33 stars with 200+ ratings",
        "Improved UX using data from Analytics & ElasticSearch logs",
        "Internationalized the application with i18n to reach over 5 million potential customers",
        "Led 3 newly formed frontend teams when the company tripled in size",
        "Designed and implemented logic to process transactions for over $2M in Amazon",
        "Created CI/CD pipelines with Jenkins reducing deployment time to 4-6 minutes",
      ],
      technologies: ["React.js", "Redux", "Java", "MySQL", "Redis", "Jenkins"],
    },
    {
      company: "Viaro Networks",
      location: "Guatemala, Guatemala",
      title: "Full Stack Developer",
      period: "Oct 2017 - Aug 2019",
      achievements: [
        "Maintained website with AngularJS supporting over 100 campaign/donation pages",
        "Conducted code reviews using John Papa's style guide for syntax, conventions, & code structure",
        "Led teammates in Guatemala to collaborate effectively with international peers in Canada, USA, and India",
      ],
      technologies: ["AngularJS", "C#", "SQL Server"],
    },
  ];

  return (
    <Section id="experience" className="bg-indigo-dye">
      <SectionTitle subtitle="My professional journey and key achievements">
        Professional Experience
      </SectionTitle>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
