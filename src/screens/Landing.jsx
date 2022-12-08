import React from "react";
import { Link } from "react-router-dom";
import images from "../components/images";
import ImageSlider from "../components/ImageSlider";
import {
  HomeGroup,
  NFTGroup,
  Star,
} from "../assets";

import { Footer, Navbar } from "../components/";
import home from "../data/home";
import './index.css';

const Landing = () => {
  return (
    <div className="relative">
      <Navbar />
      <section className="flex flex-col items-center gap-14 lg:flex-row justify-between px-12 lg:px-[100px] mt-12 lg:mt-32 mb-[67px] relative">
        <div className="flex flex-col gap-6 lg:gap-12 md:w-[650px] lg:basis-2/4">
          <h1 className="text-text font-normal font-default text-[32px] lg:text-[56px]">
            Visit a <span className="color-primary font-bold">Park</span> away
            from <span className="color-primary font-bold">Home</span> in the{" "}
            <span className="color-primary font-bold">Metaverse</span>
          </h1>
          <p className="font-default font-normal text-text text-xl lg:text-2xl">
            We provide a sensational and quintessential preview of game parks and game reserves with specific animals of interest as a
            precursor to the actual visit to our affordable and prestigious tourist destinations in the Metaverse.
          </p>
          <form className="flex">
            <input
              type="text"
              placeholder="Search for location"
              className="h-[54px] w-full max-w-[390px] border border-priBorder bg-white rounded-tl-lg rounded-bl-lg px-4 py-[18px] placeholder:text-placeholder placeholder:font-normal placeholder:font-default placeholder:text-base text-text font-normal font-default text-base outline-none"
            />
            <button className=" search-btn background-color-primary flex justify-center items-center w-[230px] h-[54px] py-4 rounded-tr-lg rounded-br-lg text-white font-normal font-default text-base">
              Search
            </button>
          </form>
        </div>
        <div>
          <img src={HomeGroup} width="70%" alt="" />
        </div>
      </section>

      <section>
      <ImageSlider images={images}/>
      </section>

    

      {/* next adventure */}
      <section className="px-12 lg:px-[100px]  mt-10 lg:mt-[58px] flex flex-col items-center gap-[43px]">
        <h1 className="text-black text-3xl lg:text-5xl font-bold font-default">
          Inspiration for your next adventure
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center mx-auto max-w-full mb-[53px]">
          {home &&
            home.map((data) => (
              <div
                key={data.id}
                className=" default-cards-landing w-[292px] m-0 flex flex-col justify-start items-center rounded-[15px] border bg-white border-border  p-4 gap-3"
              >
                <section className=" w-[260px] h-[265px] rounded-[15px] overflow-hidden border border-border">
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
                  <div className="rating w-full flex justify-start items-center gap-2">
                    <img  src={Star} alt="" />
                    <img  src={Star} alt="" />
                    <img  src={Star} alt="" />
                    <img  src={Star} alt="" />
                    <img  src={Star} alt="" />
                  </div>
                </section>
                <div >
                    <button className="button">View in VR</button>
                </div>
              </div>
            ))}
        </div>
      </section>
      

      {/* Metabnb Nfts */}
      <section className="background-color-primary p-8 md:p-[100px] flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full max-w-[415px] flex flex-col basis-2/4">
          <h1 className="font-default font-bold text-white text-5xl mb-[35px]">
            Metraverse Safaris VR
          </h1>
          <p className="mb-14 text-white font-default">
            Discover our Game Parks and Game reserves in the Metaverse. We guarantee our customers a thrilling, entertaining, and immersive 
            user experience. We have partnered with an assortment of game parks and game reserves to provide easy access to the enriched, native 
            wildlife ecosystem. Get a bonus on your next tour by booking with us.
          </p>
          <button className=" learnmore-btn h-12 rounded-lg flex justify-center items-center w-[156px] bg-white color-primary font-default font-light font-base">
            <Link to="/">Learn More</Link>
          </button>
        </div>
        <div className="relative w-full max-w-[704px]">
          <img src={NFTGroup} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
