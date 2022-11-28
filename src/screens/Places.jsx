import React from "react";
import {  Star } from "../assets";
import { Footer, Navbar } from "../components";
import metaBNB from "../data/data";

const Places = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="w-full mx-auto flex flex-col justify-between item px-12 pb-24 lg:px-[100px] mt-12 lg:mt-32 gap-10 lg:gap-[75px]">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mx-auto max-w-full">
          {metaBNB &&
            metaBNB.map((data) => (
              <div
                key={data.id}
                className="default-cards-places w-[292px] m-0 flex flex-col justify-start items-center rounded-[15px] border bg-white border-border p-4 gap-3"
              >
                <section className="w-[260px] h-boxImg rounded-[15px] overflow-hidden border border-border">
                  <img src={data.image} alt="" className="m-0" />
                </section>
                <section className="w-full flex flex-col gap-2.5">
                  <div className="w-full flex justify-between">
                    {" "}
                    <span className="text-text text-xs font-normal font-default">
                      {data.name}
                    </span>
                   
                  </div>
                  <div className="w-full flex justify-between">
                    {" "}
                    <span className="text-text text-xs font-normal font-default">
                      {data.animals}
                    </span>
                   
                  </div>
                  <div className="w-full flex justify-start items-center gap-2">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                  </div>
                </section>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Places;
