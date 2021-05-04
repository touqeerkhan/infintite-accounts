import React from 'react';
import { servicesData } from '../../../data/services_dara';


export function ServicesList() {
    const providedServices=servicesData
    return(
       
        <div className={'services-list-data'}>

          <div className={'row text-center list-row m-0 gx-5'}>
            {servicesData.map(data=>(
                <div className={'col-lg-4 col-md-6 col-12 services-col-area'}>
                    <img src={data.logo} />
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}