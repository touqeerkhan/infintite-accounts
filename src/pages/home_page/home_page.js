import React from 'react';
import {Content} from "./components/content_area";
import '../../styleSheets/home.css'
import {HomeSlider} from "./components/home_slider";
export function HomePage() {
   return(
       <>
       <HomeSlider/>
       <Content/>
       </>
   )
}