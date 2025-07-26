import Button from "../shared/Button";
import { Section } from "../shared/Sections";
import heroPicture from "../assets/hero-picture.png";

const Hero = () => (
  <Section
    id="hero"
    className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pietro
            <span className="block text-blue-300">Nadalini</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Senior Software Engineer Leader
          </p>
          <p className="text-lg text-blue-200 max-w-lg">
            8+ years of experience leveraging data to drive product decisions into successful user
            experiences
          </p>
        </div>

        <div className="flex items-center gap-2 text-blue-200">
          <span>Guatemala</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href="https://linkedin.com/in/pnadalini"
            variant="primary"
            className="justify-center sm:justify-start">
            {/* <FontAwesomeIcon icon={["far", "square-linkedin"]} /> */}
            LinkedIn
          </Button>
          <Button
            href="https://github.com/pnadalini"
            variant="secondary"
            className="justify-center sm:justify-start">
            GitHub
          </Button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300">
          <img src={heroPicture} alt="Pietro Nadalini" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;
