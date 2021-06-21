import React from 'react';
export function ServicesHeader() {
  return (
    <div className='services-area'>
      <div
        className={'header-image'}
        style={{
          backgroundImage: 'url("./images/cloud-computing.jpeg")',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          backgroundSize: 'cover',
          backgroundColor: 'transparent',
          backgroundPosition: '50% 50%',
          height: '100%',
          opacity: '1',
          transform: 'translate(0px, 0px)',
          // visibility: inherit;
          zIndex: '20',
        }}
      >
        <div className={'mask '}>
          <div className={'center-title-cloud'}>
            {/* <h1 className='text-white mb-0'>SERVICES</h1> */}
          </div>
        </div>
      </div>
      <div className='cloud-area-content w-100 my-0'>
        <div
          className={'cloud-area-content pt-5 text-center w-75 mx-auto my-0'}
        >
          <h1 className='pt'>
            The digital revolution is coming. “We aim to make our tax system the
            most digitally advanced in the world,” says HMRC.
          </h1>

          <p>who wanted more than just a jobbing accountant.</p>
        </div>
        <div
          className='w-25 mx-auto'
          style={{ backgroundColor: '#3a2e60', height: '5px' }}
        >
          <span class='vc_sep_holder vc_sep_holder_l'>
            <span class='vc_sep_line'></span>
          </span>
        </div>
        <h4 className='pt-5  text-center w-75 mx-auto my-0'>
          The digital revolution is coming. “We aim to make our tax system the
          most digitally advanced in the world,” says HMRC.
        </h4>

        <h3 className='pt-5 mt-5 text-center w-50 mx-auto my-0'>
          MAKING TAX DIGITAL TIMELINE
        </h3>
        <div
          className={'header-image'}
          style={{
            backgroundImage: 'url("./images/cloud-timeline.png")',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            backgroundSize: 'contain',
            backgroundColor: 'transparent',
            backgroundPosition: '50% 50%',
            height: '100%',
            opacity: '1',
            transform: 'translate(0px, 0px)',
            // visibility: inherit;
            zIndex: '20',
          }}
        >
          <div className={'mask '}>
            <div className={'center-title-cloud'}>
                {/* <img src={} */}
              {/* <h1 className='text-white mb-0'>SERVICES</h1> */}
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
