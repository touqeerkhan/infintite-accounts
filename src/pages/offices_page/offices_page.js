import React from 'react';
import '../../styleSheets/offices.css';
import {OfficesContent} from "./components/offices_content";
import {BannerAreaOffices} from "./components/banner_area";
export function OfficesPage() {
   return(
       <>
           <BannerAreaOffices/>
           <OfficesContent/>
       </>
   )
}