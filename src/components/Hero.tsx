import React from "react";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div className="flex justify-center mx-5">
      <div className="flex flex-column items-center">
        <h1>Deliver scalable and reliable code, improve UX with great attention to detail</h1>
        <p>Hello I&apos;m Pietro, a Senior Software Engineer.</p>
        <button>See my work</button>
      </div>
    </div>
  );
};

export default Hero;
