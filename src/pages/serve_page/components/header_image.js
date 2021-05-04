import React from 'react'
export default function HeaderImage() {
   return(
       <div className={'header-image'} style={{
           backgroundImage: 'url("./images/serve_bg.png")',
           backgroundRepeat: "no-repeat",width: "100%", backgroundSize:"cover",
       }}>
           <div className={'mask blur-image-area'}>
               <div className={'center-title'}>
                   <h1 className="text-white mb-0">WHO WE SERVE</h1>
               </div>
           </div>
       </div>
   );
}