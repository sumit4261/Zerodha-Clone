import React from "react";

function Signup() {
  return (
    <div className="container p-5 mb-5">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="row text-center">
            <form>
              <label className="username" for="username">
                Username:
              </label>
              <br/>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              ></input>
              <br />
              <label class="password" for="password">
                Password:
              </label>
              <br/>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              ></input>
              <br/>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-2"
          style={{width:"20%", height:"20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
