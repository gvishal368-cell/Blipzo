import React from "react";
import "./CSS/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            {/* Left Side */}
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column ">
              <h1 className="display-2">
                Online Payment Made Easy
                <br />
                For You
              </h1>
              <p className="main-hero-para">
                Duis mollit pariatur laboris nulla laborum fugiat sint elit
                ipsum voluptate. Duis occaecat consectetur tempor voluptate do.
                Velit tempor aliqua voluptate labore culpa id aliqua aliquip
                elit quis laboris consequat. Est labore eiusmod et quis velit
                nostrud officia dolore magna id deserunt in laboris tempor.
                Cillum officia duis ullamco excepteur ipsum pariatur voluptate.
              </p>
              <h3>Get Early Access with Extra Benefits</h3>
              <div className="input-group mt-3">
                <input
                  className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text "
                  type="text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get Email</div>
              </div>
            </div>
            {/* Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt="Img1"
                className="img-fluid"
              ></img>
              <img
                src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt=""
                className="img-fluid main-hero-img2"
              ></img>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
