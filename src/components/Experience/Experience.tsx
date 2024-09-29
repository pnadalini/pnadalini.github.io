import React from "react";
import { careers } from "./constants";

interface Props {}

const Experience: React.FC<Props> = () => {
  return (
    <div>
      <h1>Experience</h1>
      {careers.map((career) => (
        <div key={career.company}>
          <div>
            <h3 className="highlight">{career.company}</h3>
            {career.positions.map((position, indx) => {
              return (
                <div className="flex justify-between my-2" key={indx}>
                  <h3 className="m-0">{position.title}</h3>
                  <p className="m-0">{position.date}</p>
                </div>
              );
            })}
            <p>{career.description}</p>

            {career.responsibilities.map((responsibility) => (
              <div key={responsibility}>
                <p>{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
