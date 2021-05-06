import React from 'react';
import {officeUlData,similarContent,reviewDataRight,accountantInfo} from "../../../data/offices_data";
import {FaSearch} from "react-icons/all";


export function OfficesContent() {
    return(
        <div className={'offices-content'}>
          <div className={'row p-5 m-0'}>
              <div className={'col-lg-8 col-12'}>
                 <h1>Chartered Accountants for Businesses in Newbury</h1>
                  <p>At Treetops we provide chartered accounting services to help individuals, start-ups and established companies in and around Newbury in Berkshire achieve their business goals and aspirations.</p>
                  <p> Our team of experienced accountants will assist you in staying on top of your taxes and remaining familiar with your finances whilst advising on how to succeed in a competitive, modern business environment.</p>
                  <div className={'office-image-area'}>
                   <img src={'./images/office_image_1.svg'} className={'img-fluid'} alt={'img'}/>
                   <div className={'image-content-area'}>
                      <p>Helping you and your business
                          form acorn to mighty oak</p>
                   </div>
                  </div>
                  <div className={'office-ul-area mt-5'}>
                      <h1>Welcome to Treetops Chartered Accounting</h1>
                      <p>Although our offices are situated in Farnborough, at Treetops Chartered Accountants, we support a number of national clients across the UK as well as local businesses, partnerships and individuals based in the Newbury area.</p>
                      <p>Our list of accounting services covers a wide selection of business scenarios, from planning, budgeting, VAT, Tax and raising finance, right through to pensions and payroll.  Take a look at what we can do for you.</p>

                          {officeUlData.map((data,index)=>(
                              <div className={'list-data'}>
                              <img src={'./images/circle.svg'} alt={'circle-imag'} className={'img-fluid p-1'}/>
                                  <p className={'mb-0'}>{data}</p>
                              </div>
                          ))}

                          <p>We can also provide bespoke specialist accounting expertise for resident associations, charities, friendly societies, solicitors and those who benefit from government grants.</p>

                  </div>
                  <div className={'similar-content'}>
                      {similarContent.map(data=>(
                          <>
                              <h1>{data.heading}</h1>
                              <p>{data.para1}</p>
                              <p>{data.para2}</p>
                              <p>{data.para3}</p>
                          </>
                      ))}
                  </div>

              </div>
              <div className={'col-lg-4 col-12'}>
                <div className={'contact-treetops-area p-5'}>
                <h3>Contact TreeTops</h3>
                    <p>Please call or email to arrange your FREE consultation for any of our services.</p>
                    <div className={'d-flex align-items-center treetoops-flex-items'}>
                        <img src={'./images/mail_logo.svg'} alt={''} width={20} height={20}/>
                        <p className={'mb-0 p-1 fw-bold'}>help@ttca.co.uk</p>
                    </div>
                    <div className={'d-flex align-items-center treetoops-flex-items'}>
                        <img src={'./images/contact_logo.svg'} alt={''} width={20} height={20}/>
                        <p className={'mb-0 p-1 fw-bold'}>01252 541 401</p>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search.."
                               aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn btn-services" type="btn" id="button-addon2">
                             <FaSearch/>
                            </button>
                    </div>
                </div>
                  <div className={'reviews-area-right text-center'}>
                      {reviewDataRight.map(data=>(
                          <div className={'data-div p-2'}>
                              {data.heading}
                              {data.title}
                              {data.button}
                          </div>
                      ))}
                  </div>
                  <div className={'star-rating-area text-center p-5'}>
                      <div className={'starts d-flex align-items-center justify-content-center'}>
                          <img src={'./images/star_logo.svg'} alt={''} width={15} height={15}/>
                          <img src={'./images/star_logo.svg'} alt={''} width={15} height={15}/>
                          <img src={'./images/star_logo.svg'} alt={''} width={15} height={15}/>
                          <img src={'./images/star_logo.svg'} alt={''} width={15} height={15}/>
                          <img src={'./images/star_logo.svg'} alt={''} width={15} height={15}/>
                      </div>
                      <p>Treetops Chartered Accountants is
                          rated 5 out of 5 based on 195
                      </p>
                      <a href={''}> <p className={'g-review'}>reviews on Google.</p></a>
                  </div>
                  <div className={'accountant-info-area'}>
                      {accountantInfo.map(data=>(
                          <div className={'accountant-data-div text-center p-2'}>
                              {data.heading}
                              {data.des}
                              {data.button}
                          </div>
                      ))}
                  </div>
              </div>
          </div>
            <div className={'schedule-calling-area m-0 p-5'}>
               <div className={'schedule-area-content'}>
                   <h3>An accounting expert from Treetops can call
                       you back at a time that suits you.</h3>
                   <button className={'btn btn-services p-2'}>Schedule a call</button>
               </div>
            </div>
        </div>
    )
}