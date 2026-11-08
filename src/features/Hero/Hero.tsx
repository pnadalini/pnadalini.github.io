import { Section } from "../../shared/Sections";
import SocialLinks from "../../shared/SocialLinks";
import { calculateYearsOfExperience } from "../../shared/yearsOfExperience";
import heroPicture from "./assets/avatar.jpg";

import "./hero.css";

const Hero = () => (
  <Section id="hero" className="min-h-screen flex items-center text-platinum relative overflow-hidden hero-background">
    <div className="absolute inset-0 bg-gradient-to-br from-oxford-blue/70 via-indigo-dye/70 to-yinmn-blue/70"></div>
    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="flex justify-center lg:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-silver-lake-blue/30 transform hover:scale-105 transition-transform duration-300">
          <img src={heroPicture} alt="Pietro Nadalini" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pietro
            <span className="block text-silver-lake-blue">Nadalini</span>
          </h1>
          <p className="text-xl md:text-2xl text-french-gray font-light">Engineering Manager</p>
          <p className="text-lg text-platinum max-w-lg">
            {calculateYearsOfExperience()}+ years building consumer and fintech products for 500M+ users, and leading
            distributed teams across LATAM and North America with AI-first workflows.
          </p>
        </div>

        <SocialLinks />
      </div>
    </div>
  </Section>
);

export default Hero;
