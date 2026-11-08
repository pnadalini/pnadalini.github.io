const CAREER_START_DATE = new Date("2017-02-01");

const calculateYearsOfExperience = () => {
  const msSinceStart = Date.now() - CAREER_START_DATE.getTime();
  return new Date(msSinceStart).getUTCFullYear() - 1970;
};

export { calculateYearsOfExperience };
