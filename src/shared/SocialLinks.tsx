import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";

const socialProfiles = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pnadalini", icon: faLinkedin },
  { label: "GitHub", href: "https://github.com/pnadalini", icon: faGithub },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/9801177", icon: faStackOverflow },
];

const SocialLinks = () => (
  <div className="flex items-center gap-6">
    {socialProfiles.map(({ label, href, icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit Pietro's ${label} profile`}
      >
        <FontAwesomeIcon
          icon={icon}
          size="2x"
          className="text-mint-green hover:text-dark-mint-green transition-colors duration-300 transform hover:scale-110"
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
