import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row mb-5">
                <h1 className='text-center mt-5'>Charges</h1>
                <p className='text-center text-muted fs-4 mb-5'>List of all charges and taxes</p>
                </div>


            <div className='row mt-5 mb-5'>
                <div className='col-4 text-center mt-5'>
                    <img src='media/images/pricing-eq.svg' alt='pricing' style={{width:"70%"}} className='mb-2'/>
                    <h2 className=' text-muted mt-2'>Free equity delivery</h2>
                    <p className='mt-3 text-muted fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className='col-4 text-center mt-5'>
                    <img src='media/images/other-trades.svg' alt='pricing' style={{width:"70%"}} className='mb-2'/>
                    <h2 className=' text-muted mt-2'>Intraday and F&O trades</h2>
                    <p className='mt-3 text-muted fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className='col-4 text-center mt-5'>
                    <img src='media/images/pricing-eq.svg' alt='pricing' style={{width:"70%"}} className='mb-2'/>
                    <h2 className=' text-muted mt-2'>Free direct MF</h2>
                    <p className='mt-3 text-muted fs-6'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                </div>

            </div>
     );
}

export default Hero;
<h1>Hero</h1>