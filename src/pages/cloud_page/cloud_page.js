import React from 'react';
import '../../styleSheets/services.css'
import { ServicesHeader } from './components/cloud_banner';
import { ServicesList } from './components/cloud_list';
import {ChoosingUs} from "./components/choosing_us";
import { TaxInfo } from './components/tax_info';
export function CloudPage() {
   return(

      <div>
    <ServicesHeader/>
    <TaxInfo />
    {/* <ServicesList/> */}
    {/* <ChoosingUs/> */}

    </div>

   ) ;
}