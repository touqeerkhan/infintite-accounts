import React from 'react'
import {businessTypesData,servicesData} from "../data/business_types_data";

function BusinessTypes() {
  const businessData=businessTypesData;
  const services=servicesData;
  return(
    <section className={'business-types-area'}>
       <div className={'container'}>
           <h1 className={'font-weight-bold text-center'}>Types of Small Business We Help With our Accountancy Services</h1>
       </div>
        <div className={'container'}>
            <div className={'row row-eq-height justify-content-center mt-5'}>

                {businessData.map((data,index)=>(
                    <div className={'col-lg-4 col-md-6 text-center business-types-col'} key={index}>
                        <img  src={data.logo}  width={60} height={60} className={'img-fluid mt-3'}/>
                        <h3> {data.title}</h3>
                        <p className={'business-desc mt-3'}>{data.description}</p>
                       <button className={'btn btn-services mt-5'}>Find Out More</button>
                    </div>
                ))}
            </div>
        </div>
        <div className={'container mt-5'}>
            <div className={'row justify-content-center mt-5' }>

                {services.map(data=>(
                    <div className={'col-lg-4 col-md-12 text-center'}>
                        <img  src={data.logo} height={60} width={60}/>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        <button className={'btn btn-services mt-5'}>Find Out More</button>
                    </div>
                ))}
            </div>
        </div>
        <div className={'switch-area mt-5'}>
          <div className={'container'}>
              <div className={'row p-5 align-items-center'}>
                  <div className={'col-lg-8 md-12 col-12'}>
                      <p className={'font-weight-bold text-white'}>Looking to Switch Accountants?</p>
                      <p className={'text-white text-justify'}>As a small business owner, freelancer or contractor, spare time is precious. Switching your accountant
                          may not be a priority and often get pushed to the bottom of the “to-do” list.</p>
                  </div>
                  <div className={'col-lg-4 col-md-12 col-12 text-center'}>
                      <button className={'btn btn-lg switch-button'}>Switch Now</button>
                  </div>
              </div>
          </div>
        </div>
        <div className={'container mt-5'}>
            <div className={'row text-center align-items-center'}>
                <div className={'col-lg-6 col-12'}>
                 <img src={'./images/sub_news.png'} className={'img-fluid'}/>
                </div>
                <div className={'col-lg-6 col-12 text-center'}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email...."
                               aria-label="Email...." aria-describedby="button-addon2"/>
                            <button className="btn btn-services" type="button" id="button-addon2">Subscribe
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default BusinessTypes;