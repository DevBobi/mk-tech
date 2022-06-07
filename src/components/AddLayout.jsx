import React, { useState } from "react";
import BannerAd from "./BannerAd";
import Native from "./Native";
import PopUnder from "./PopUnder";
import Skim from "./Skim";

const AddLayout = () => {
  const [active, setActive] = useState("Pop Under");
  return (
    <div className="mt-7">
      <div className="flex divide-x-2 justify-center rounded dark:text-gray-100 divide-indigo gap-10">
        <button
          onClick={() => {
            setActive("Pop Under");
          }}
          type="button"
          className={
            active === 'Pop Under' ? "px-3 py-1.5 bg-orange border-0 rounded transition duration-500" :
            "px-3 py-1.5 bg-slate border-0 rounded"
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
            active === 'Banner Ad' ? "px-3 py-1.5 bg-orange border-0 rounded transition duration-500" :
            "px-3 py-1.5 bg-slate border-0 rounded"
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
            active === 'Native' ? "px-3 py-1.5 bg-orange border-0 rounded transition duration-500" :
            "px-3 py-1.5 bg-slate border-0 rounded"
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
            active === 'Skim' ? "px-3 py-1.5 bg-orange border-0 rounded transition duration-500" :
            "px-3 py-1.5 bg-slate border-0 rounded"
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
