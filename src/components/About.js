import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Brian.
            <br className="hidden lg:inline-block" />I love to build apps and solve problems.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a full stack web developer with a knack for problem-solving and a continued commitment to self-improvement through learning.
            <br/>
            <br/>
            I attended college early at the age of 15 and found myself majoring in Philosophy because it appealed to my natural inclinations towards critical thinking and logical analysis.
            <br/>
            <br/>
            After college, I found myself doing a stint as a professional internet gaming personality. Also known as a Twitch streamer for those familiar with the term.
            <br/>
            <br/>
            Recently, I decided to pursue a career in technology as a software engineer and completed an immersive coding bootcamp program with Fullstack Academy.
            I gained a good, solid foundation in web development from my time in bootcamp and am really looking forward to bringing my strengths, background, and technical skillset to a company that is making exciting, cutting-edge products in the tech space.
            <br/>
            <br/>
            Currently, I am taking the opportunity to be a part-time mentor for a web development bootcamp program while also searching for a full-time position as a developer.
            I provide support for the course's students and help them learn the fundamentals of web development while honing my own skills as I teach others.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Connect With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./profile-pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}