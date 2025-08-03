import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='row' style={{marginLeft:"95px"}}>
                <div className='col-md-6 mb-5'>
                    <h2 className='mt-5 fs-5 mb-5'>Support Portal</h2>
                    <h1 className='fs-4 mb-4'>Search for an answer or browse help topics to create a ticket</h1>

                    <div className='search-ip-grp'>
                    <form>
                        <input  id="search-text" autoComplete="off" className="mb-3"type="text" placeholder='Eg:how do i active F&O, why is my order getting rejected' style={{width:"90%",height:"50px",display:"inline"}}></input>
                    </form>

                    <a className="border-bottom" href='' style={{color:"white",textDecoration:"none", marginRight:"20px"}}>Track account opening</a>
                    <a className="border-bottom" href='' style={{color:"white",textDecoration:"none",marginRight:"20px"}}>Track segment activation</a>
                    <a className="border-bottom" href='' style={{color:"white",textDecoration:"none",marginRight:"20px"}}>Intraday margins</a>
                    <br/>
                    <a className="border-bottom mb-5 " href='' style={{color:"white",textDecoration:"none"}}>Kite user manual</a>

                    </div>
                </div>

                    <div className='col-md-6 mb-5'>
                    <h2 className='mt-5 fs-5 mb-5' style={{marginLeft:"370px"}}>Track tickets</h2>

                    <h2 className="fs-4" style={{marginLeft:"100px",marginTop:"100px"}}>Featured</h2>

                    <ol type='numbers' style={{marginLeft:"100px",fontSize:"15px"}}>
                        <li className='mb-3'>Latest Intraday leverages and Square-off timings</li>
                        <li>Surveillance measure on scrips - January 2025</li>
                    </ol>
                </div>
            </div>
    </section>
    );
}

export default Hero;
