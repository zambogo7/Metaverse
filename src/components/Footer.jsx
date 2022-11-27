import React from "react";
import { Facebook, Instagram, LogoWhite, Twitter } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full lg:h-[322px] pt-16 pb-9 px-8 lg:px-[100px] bg-footer grid grid-cols-2 lg:flex gap-8 lg:flex-row justify-between items-start">
      <section className="flex flex-col gap-8 lg:gap-50">
  
        <img src={LogoWhite} alt="" />
        <div className="flex flex-col gap-4 lg:gap-14">
          <div className="flex items-center gap-4 lg:gap-8">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
          </div>
          <p className="font-normal text-white font-default text-base flex gap-2.5">
            <span>&copy;</span>
            <span>2022 Metraverse Safaris</span>
          </p>
          
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6 text-right lg:text-left">
        <p className="font-bold text-lg text-white font-default">Community</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">Hotels</p>
          <p className="footer__link">Restaurants</p>
          <p className="footer__link">Tour Guides</p>
          <p className="footer__link">Travel Agencies</p>
          <p className="footer__link">Tourist</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6">
        <p className="font-bold text-lg text-white font-default">Places</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">National Parks</p>
          <p className="footer__link">Game Reserves</p>
          <p className="footer__link">Swamps</p>
          <p className="footer__link">Islands</p>
          <p className="footer__link">Mountains/Hills</p>
        </div>
      </section>
      <section className="flex flex-col gap-2 lg:gap-6 text-right lg:text-left">
        <p className="font-bold text-lg text-white font-default">About us</p>
        <div className="flex flex-col gap-3.5">
          <p className="footer__link">Aims</p>
          <p className="footer__link">Creators </p>
          <p className="footer__link">Career</p>
          <p className="footer__link">Contact us</p>
        </div>
      </section>
     
    </footer>
  );
};

export default Footer;


