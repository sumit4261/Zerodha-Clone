import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 fs-2 text-center text-muted">
          The Zerodha Universe
        </h1>
        <p
          className="mt-3 text-center text-muted mb-5"
          style={{ fontWeight: "50px" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodhafund"
            style={{ width: "50%" }}
          />
          <br />
          <small class="text-small text-muted text-center mt-2">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </small>
        </div>

        <div className="col-4 p-3 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull"
            style={{ width: "55%" }}
            className="mb-2"
          />
          <br />
          <small className="mt-2 text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </small>
        </div>

        <div className="col-4 p-3 text-center">
          <img
            src="media/images/tijori.svg"
            alt="tijori"
            style={{ width: "38%" }}
          />
          <br />
          <small class="text-small text-muted mt-1">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </small>
        </div>
      </div>

      <div className="row mt-4 text-center">
        <div className="col-4 p-3 text-center">
          <img
            src="media/images/streakLogo.png"
            alt="sensibull"
            style={{ width: "50%" }}
            className="mb-2"
          />

          <br />

          <small className="mt-2 text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </small>
        </div>

        <div className="col-4 p-3 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="sensibull"
            style={{ width: "50%" }}
            className="mb-2"
          />

          <br />

          <small className="mt-2 text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </small>
        </div>

        <div className="col-4 p-3 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt="sensibull"
            style={{ width: "35%" }}
            className="mb-3"
          />

          <br />

          <small className="mt-2 text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </small>
        </div>

        <button className='mt-5 text-center p-2 btn btn-primary fs-5 mb-5'  style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
