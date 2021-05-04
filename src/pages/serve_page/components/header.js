import React from 'react'
function Header() {
    return(
        <div className={'header-area'}>
        <div className={'container py-5'}>
          <h1 className={'font-weight-bold header-area-title text-center'}>
              Hassle-Free Accounting Services for Small Business
          </h1>
            <h3 className={'header-area-subtitle text-center'}>Cake makers to consultants, we’ve got you all covered.</h3>

            <p className={'header-area-paragraph'}>Our monthly accounting services subscription means that any small business can use our services from
                as little as £28 per month + VAT. From assisting with self employed NI contributions, to providing tax
                advice, or filing your tax returns with HMRC; we
                ’
                re here to help the self-employed folk who are
                currently managing their own finances. Once you
                ’
                ve subscribed to our multi award-winning service,
                you
                ’ll never look back.</p>



        </div>
        </div>
    );

}
export default Header;