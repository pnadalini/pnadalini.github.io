import { Section } from "../Sections";
import SocialLinks from "../SocialLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <Section id="footer" className="bg-oxford-blue-2 text-primary-50 pt-16 pb-0">
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Feel free to reach out to discuss how we can work together.
        </p>
      </div>

      <div className="flex justify-center">
        <SocialLinks />
      </div>

      <div className="py-8 border-t border-primary-700">
        <p className="text-primary-300">
          Made with <FontAwesomeIcon icon={faHeart} className="w-4 h-4" /> by{" "}
          <a href="https://linkedin.com/in/pnadalini" target="_blank" rel="noopener noreferrer">
            Pietro Nadalini
          </a>
          . Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </div>
  </Section>
);

export default Footer;
