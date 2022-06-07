import React from "react";

const Skim = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange">
              Skim
            </h1>
            <p className="mb-10 leading-relaxed">
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-indigo border-0 py-2 pr-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn more..
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skim;
