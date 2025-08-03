import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='row text-center mt-5'>
                <h1 className='mt-5 fs-1 mb-2 text-muted'>Zerodha Products</h1>
                <h3 className='fs-4' style={{fontWeight:"Normal"}}>Sleek, modern, and intuitive trading platforms</h3>
                <h4 className='fs-6 mt-2 mb-5' style={{fontWeight:"Normal"}}>Check out our <a href=''>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></h4>
            </div>
        </div>
    );
}

export default Hero;