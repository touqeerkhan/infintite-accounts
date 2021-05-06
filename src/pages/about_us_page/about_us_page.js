import React from "react";
import '../../styleSheets/aboutUs.css';
import {BannerAboutUs} from "./components/about_us_banner";
import {AboutUsContent} from "./components/about_us_content";
export function AboutUsPage() {
   return(
       <>
           <BannerAboutUs/>
           <AboutUsContent/>
       </>
   )
}