import React, { useState } from "react";
import BannerAd from "./BannerAd";
import Native from "./Native";
import PopUnder from "./PopUnder";
import Skim from "./Skim";

const AddLayout = () => {
  const [active, setActive] = useState("Pop Under");
  return (
    <div className="mt-7">
      <div className="flex lg:px-5 justify-center rounded divide-indigo lg:gap-20 sm:gap-10 md:gap-10 md:mx-3">
        <button
          onClick={() => {
            setActive("Pop Under");
          }}
          type="button"
          className={
            active === 'Pop Under' ? "lg:px-5 py-1.5 bg-orange rounded-full uppercase transition duration-500 drop-shadow-md" :
            "lg:px-5 py-1.5 bg-slate rounded-full uppercase drop-shadow-md"
          }
        >
         Pop Under
        </button>
        <button
          onClick={() => {
            setActive("Banner Ad");
          }}
          type="button"
          className={
            active === 'Banner Ad' ? "lg:px-5 py-1.5 bg-orange rounded-full uppercase transition duration-500 drop-shadow-md" :
            "lg:px-5 py-1.5 bg-slate rounded-full uppercase drop-shadow-md"
          }
        >
          Banner Ad
        </button>
        <button
          onClick={() => {
            setActive("Native");
          }}
          type="button"
          className={
            active === 'Native' ? "lg:px-5 py-1.5 bg-orange rounded-full uppercase transition duration-500 drop-shadow-md" :
            "lg:px-5 py-1.5 bg-slate rounded-full uppercase drop-shadow-md"
          }
        >
          Native
        </button>
        <button
          onClick={() => {
            setActive("Skim");
          }}
          type="button"
          className={
            active === 'Skim' ? "lg:px-5 py-1.5 bg-orange rounded-full uppercase transition duration-500 drop-shadow-md" :
            "lg:px-5 py-1.5 bg-slate rounded-full uppercase drop-shadow-md"
          }
        >
          Skim
        </button>
      </div>
      <div>
        {active === "Pop Under" && <PopUnder />}
        {active === "Banner Ad" && <BannerAd />}
        {active === "Native" && <Native />}
        {active === "Skim" && <Skim />}
      </div>
    </div>
  );
};

export default AddLayout;
