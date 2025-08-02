import { Section } from "../../shared/Sections";
import heroPicture from "./assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./hero.css";

const Hero = () => (
  <Section
    id="hero"
    className="min-h-screen flex items-center text-platinum relative overflow-hidden hero-background">
    <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue/70 via-indigo-dye/70 to-yinmn-blue/70"></div>
    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="flex justify-center lg:justify-end">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-silver-lake-blue/30 transform hover:scale-105 transition-transform duration-300">
          <img src={heroPicture} alt="Pietro Nadalini" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pietro
            <span className="block text-silver-lake-blue">Nadalini</span>
          </h1>
          <p className="text-xl md:text-2xl text-french-gray font-light">
            Senior Software Engineer
          </p>
          <p className="text-lg text-platinum max-w-lg">
            8+ years of experience leveraging data to drive product decisions into successful user
            experiences
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/pnadalini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-lake-blue hover:text-french-gray transition-colors duration-300 transform hover:scale-110"
            aria-label="Visit Pietro's LinkedIn profile">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/pnadalini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-silver-lake-blue hover:text-french-gray transition-colors duration-300 transform hover:scale-110"
            aria-label="Visit Pietro's GitHub profile">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;
