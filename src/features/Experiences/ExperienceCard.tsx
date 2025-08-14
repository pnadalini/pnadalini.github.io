import { faCalendar, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  company: string;
  location: string;
  title: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

const ExperienceCard = ({
  company,
  location,
  title,
  period,
  achievements,
  technologies,
}: Props) => (
  <div className="bg-primary-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-primary-200">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-primary-900 mb-1">{company}</h3>
        <p className="text-primary-400 font-semibold mb-2">{title}</p>
        <div className="flex items-center gap-4 text-primary-300">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
            {period}
          </span>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <ul className="space-y-3">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <span className="text-primary-700 leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>

      {technologies && (
        <div className="pt-4 border-t border-primary-200">
          <p className="text-sm font-medium text-primary-900 mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default ExperienceCard;
