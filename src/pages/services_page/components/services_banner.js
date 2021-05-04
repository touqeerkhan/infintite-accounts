import React from 'react'
export function ServicesHeader() {
    return (
        <div className='services-area'>
            <div className={'header-image'} style={{
                backgroundImage: 'url("./images/serve_bg.png")',
                backgroundRepeat: "no-repeat", width: "100%", backgroundSize: "cover",
            }}>
                <div className={'mask blur-image-area'}>
                    <div className={'center-title'}>
                        <h1 className="text-white mb-0">SERVICES</h1>
                    </div>
                </div>
            </div>
            <div className={"services-area-content"}>
                <h1>We set up Indigo in response to
                listening carefully to the needs of individuals and businesses
</h1>
                <p>who wanted more than just a jobbing accountant.</p>
            </div>
        </div>

    )
}