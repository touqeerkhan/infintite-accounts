import React from 'react';
import '../../styleSheets/services.css'
import { ServicesHeader } from './components/services_banner';
import { ServicesList } from './components/services_list';
import {ChoosingUs} from "./components/choosing_us";
export function ServicesPage() {
   return(

      <div>
    <ServicesHeader/>
    <ServicesList/>
    <ChoosingUs/>
    </div>

   ) ;
}