import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="bg-white p-5 rounded-xl  text-2xl font-bold tracking-wider text-center mb-10">
            Here is some important topic that you have to know.
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <strong>
                What are the different ways to manage a state in a React
                application?
              </strong>
              <p className="bg-white p-5 rounded-xl mt-1 dark:text-gray-400">
                1. Local (UI) state – Local state is data we manage in one or
                another component. <br />
                2. URL state – Data that exists on our URLs, including the
                pathname and query parameters. <br />
                3. Server state – Data that comes from an external server that
                must be integrated with our UI state. <br />
                4. Global (UI) state – Global state is data we manage across
                multiple components.
              </p>
            </div>
            <div>
              <strong>How does prototypical inheritance work?</strong>
              <p className="bg-white p-5 rounded-xl mt-1 dark:text-gray-400">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object
              </p>
            </div>
            <div>
              <strong>What is a unit test? </strong>
              <p className="bg-white p-5 rounded-xl mt-1 dark:text-gray-400">
                Unit testing is a software testing method by which individual
                units of source code—sets of one or more computer program
                modules together with associated control data, usage procedures,
                and operating procedures—are tested to determine whether they
                are fit for use
              </p>
              <strong>Why should we write unit tests?</strong>
              <p className="bg-white p-5 rounded-xl mt-1 dark:text-gray-400">
                They enable you to catch bugs early in the development process.
                Automated unit tests help a great deal with regression testing.
                They detect code smells in your codebase. For example, if you're
                having a hard time writing unit tests for a piece of code, it
                might be a sign that your function is too complex.
              </p>
            </div>
            <div>
              <strong>React vs Angular vs Vue</strong>
              <p className="bg-white p-5 rounded-xl mt-1 dark:text-gray-400">
                React is a UI library, Angular is a fully-fledged front-end
                framework, while Vue.js is a progressive framework. <br /> They
                can be used almost interchangeably to build front-end
                applications, but they’re not 100 percent the same, so it makes
                sense to compare them and understand their differences. Each
                framework is component-based and allows the rapid creation of UI
                features.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
