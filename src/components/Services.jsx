import { Announce, Rss, Send } from "grommet-icons";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="bg-slate-50 dark:bg-gray-900 py-10">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-normal text-center text-indigo capitalize lg:text-4xl dark:text-white">
            Available for everyone
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-2xl font-light text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl: mx-auto md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
              <div className="flex flex-col justify-center items-center m-2 lg:m-6 drop-shadow-md bg-slate rounded-full h-44 w-44">
                <Announce color="#0062cc" size="xlarge" />
              </div>

              <h1 className="text-2xl font-normal pb-3 text-gray-700 capitalize dark:text-white group-hover:text-white">
                Text 1
              </h1>

              <a
                className="px-20 mt-5 py-2.5 text-lg font-medium text-slate bg-indigo rounded-full shadow"
                href="/"
              >
                Hello 3
              </a>
            </div>

            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <div className="flex flex-col justify-center items-center m-2 lg:m-6 drop-shadow-md bg-slate rounded-full h-44 w-44">
                <Send color="#0062cc" size="xlarge" />
              </div>

              <h1 className="text-2xl font-normal pb-3 text-gray-700 capitalize dark:text-white group-hover:text-white">
                Text 1
              </h1>

              <a
                className="px-20 mt-5 py-2.5 text-lg font-medium text-slate bg-indigo rounded-full shadow"
                href="/"
              >
                Hello 3
              </a>
            </div>

            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
            <div className="flex flex-col justify-center items-center m-2 lg:m-6 drop-shadow-md bg-slate rounded-full h-44 w-44">
                <Rss color="#0062cc" size="xlarge" />
              </div>

              <h1 className="text-2xl font-normal pb-3 text-gray-700 capitalize dark:text-white group-hover:text-white">
                Text 1
              </h1>

              <a
                className="px-20 mt-5 py-2.5 text-lg font-medium text-slate bg-indigo rounded-full shadow"
                href="/"
              >
                Hello 3
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
