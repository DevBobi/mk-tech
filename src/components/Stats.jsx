import React from "react";

const Stats = () => {
  return (
    <div>
      <section className="p-6 bg-indigo text-slate">
        <h1 className="text-3xl drop-shadow-lg font-normal text-center text-slate capitalize lg:text-4xl dark:text-white pt-3">
          Title 1 
        </h1>
        <div className="container mx-auto py-20 grid justify-center grid-cols-1 text-center lg:grid-cols-3 drop-shadow-lg">
          <div className="flex flex-col justify-center m-2 lg:m-6 bg-indigo rounded-full h-80 w-80 border-dashed border-2">
            <p className="text-4xl font-bold leading-none lg:text-6xl">1 BN+</p>
            <p className="text-4xl sm:text-base">Daily Impressions</p>
          </div>
          <div className="flex flex-col justify-center m-2 lg:m-6 drop-shadow-lg bg-slate text-indigo rounded-full h-80 w-80">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              $500k+
            </p>
            <p className="text-4xl sm:text-base">Paid</p>
          </div>
          <div className="flex flex-col justify-center m-2 lg:m-6 drop-shadow-lg bg-orange rounded-full h-80 w-80">
            <p className="text-4xl font-bold leading-none lg:text-6xl drop-shadow-lg">
              8k+
            </p>
            <p className="text-4xl sm:text-base">Global Publisher</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
