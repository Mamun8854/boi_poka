import React from "react";
import section1img from "./section1.jpg";

const Section1 = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${section1img})` }}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-xl font-medium text-gray-200">
              A book is a medium for recording information in the form of
              writing or images, typically composed of many pages bound together
              and protected by a cover. The technical term for this physical
              arrangement is codex.
            </p>
            <button className="btn btn-outline font-bold text-white border-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
