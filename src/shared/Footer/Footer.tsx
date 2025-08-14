import { Section } from "../Sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <Section id="footer" className="bg-primary-800 text-primary-50 py-16">
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
          Feel free to reach out to discuss how we can work together.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/pnadalini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-200 hover:text-primary-100 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/pnadalini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-200 hover:text-primary-50 transition-colors">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-primary-700">
        <p className="text-primary-300">
          © 2025 Pietro Nadalini. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </div>
  </Section>
);

export default Footer;
