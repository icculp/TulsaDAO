import React from "react";

function About() {
  return (
    <div className="intake">
      <div class="container">
        <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/Full_Lockup_Transparent.png"
              alt=""
            />
          </div> */}
          {/*<div class="col-lg-5">*/}
            {/* <h1 id="intake" class="font-weight-light">Intake</h1> */}
            <p>
            <iframe id='intake' title='intake' src="https://docs.google.com/forms/d/e/1FAIpQLSdwQyXaCS8VI_s9BvcF28A1maBqtke04r66h7MxidPtJ6xVQw/viewform?embedded=true" width="1000" height="3013" >Loading…</iframe>
            </p>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default About;