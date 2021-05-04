import React from 'react'
import {homeData} from "../../../data/home_data";
import {partnerData} from "../../../data/home_data";

export function Content() {
   return(
       <div className={'content-area mt-5'}>
            <h1>When you need more from your Accountant…</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className={'container'}>
           <div className={'row justify-content-center text-center p-5'}>
               {homeData.map(data=>(
                   <div className={'col-lg-4 col-12 home-col-area'}>
                       <img src={data.logo}/>
                       <h3 className={'mt-2'}>{data.title}</h3>
                       <p className={'mt-2'}>{data.description}</p>
                   </div>
               ))}
           </div>
            </div>

           <div className={'quotes-area'}>
              <h3>Are you looking for professional advice for your Business or your industry?</h3>
               <button className={'btn btn-services mt-2'}> Get a Free Qoute </button>
           </div>
           <div className={'partner-area'}>
                   <h1>Our Accreditations</h1>
               <p>We have been working with some Fortune 500 clients</p>
               <div className={'partner-images'}>
                   {partnerData.map(data=>(
                       <img src={data}/>
                   ))}
               </div>
           </div>
           <div className={'home-divider-area'}>

           </div>
           <div className={'home-services-area'}>
               <h1>Stress-free accountancy services</h1>
               <div className={'row text-center'}>
                   <div className={'col-lg-3 col-md-6 col-6'}>
                      <img src={'./images/service_1.png'} className={'img-fluid'}/>
                      <p>Book keeping</p>
                   </div>
                   <div className={'col-lg-3 col-md-6 col-6'}>
                       <img src={'./images/service_2.png'} className={'img-fluid'}/>
                       <p>Monthly management accounts</p>
                   </div>
                   <div className={'col-lg-3 col-md-6 col-6'}>
                       <img src={'./images/service_3.png'} className={'img-fluid'}/>
                       <p>Statutory end of year accounts</p>
                   </div>
                   <div className={'col-lg-3 col-md-6 col-6'}>
                       <img src={'./images/service_4.png'} className={'img-fluid'}/>
                       <p>Self assessment tax return</p>
                   </div>
               </div>
           </div>
           <div className={'help_area'}>
               <div className={'container row m-0 text-center no-gutters'}>
                  <div className={'col-lg-6 col-12 align-self-end'}>
                      <img className={'img-fluid'} height={250} width={250} src={'./images/help_logo.svg'}/>
                  </div>
                   <div className={'col-lg-6 col-12 p-5 help-col'}>
                      <h1>How can we help ?</h1>
                       <ul>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing Eli Condimentum dia</li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing Eli Condimentum dia</li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing Eli Condimentum dia</li>
                       </ul>
                       <button className={'btn btn-services mt-2'}> Contact Us </button>
                   </div>
               </div>
           </div>
           <div className="container-fluid">
               <div className="row p-5 testimonial-area">
                   <h1>Testimonials</h1>
                   <div className="col-lg-6 col-12">
                       <div id="testimonial-slider" className="owl-carousel">
                           <div className="testimonial">
                               <div className="testimonial-content">
                                   <p className={'heading'}>Incredible Experience</p>
                                   <p className="description">We had an incredible experience working with Landify and were impressed
                                       They made such a big difference in only three weeks. Our team is so
                                       Grateful for the wonderful improvements they made and their ability to get
                                       Familiar with the concept so quickly. It acted as a catalyst to take our
                                       Design to the next level and get more eyes on our product.</p>
                               </div>
                               <div className="pic">
                                   <img src={'./images/user_logo.svg'} className="rounded-circle" alt="Cinque Terre"/>
                               </div>
                               <p className={'profile-name mb-0'}>Jane Cooper</p>
                               <p className={'profile-info'}>CEO, ABC Corporation</p>
                           </div>
                       </div>
                   </div>
                   <div className="col-lg-6 col-12">
                       <div id="testimonial-slider" className="owl-carousel">
                           <div className="testimonial">
                               <div className="testimonial-content">
                                   <p className={'heading'}>Dependable, Responsive, Professional Partner</p>
                                   <p className="description">
                                       Fermin App has collaborated with Landify team for several projects such
                                       As Photo Sharing Apps and Custom Social Networking Apps. The
                                       Experience has been pleasant, professional and exceeding our
                                       Expectations. The team is always thinking beyond the current tasks &
                                       Helps us formulate a vision and possibilities for future.
                                   </p>
                               </div>
                               <div className="pic">
                                   <img src={'./images/user_logo.svg'} className="rounded-circle" alt="Cinque Terre"/>
                               </div>
                               <p className={'profile-name mb-0'}>Jane Cooper</p>
                               <p className={'profile-info'}>CEO, ABC Corporation</p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className={'subscribe-area'}>
               <div className={'container row m-0 text-center align-items-center'}>
               <div className={'col-lg-6 col-12 p-5'}>
                    <img src={'./images/subscr.svg'} className={'img-fluid'} height={300} width={300}/>
               </div>
                   <div className={'col-lg-6 col-12 sub-col'}>
                      <h1>Subscribe to Our Newsletter </h1>
                       <div className="input-group mb-3">
                           <input type="text" className="form-control" placeholder="Your Work Email Here..."
                                  aria-label="work Email" aria-describedby="button-addon2"/>
                               <button className="btn btn-dark" type="button" id="button-addon2">Join the waitlist
                               </button>
                       </div>
                   </div>
               </div>
           </div>

       </div>
   )
}