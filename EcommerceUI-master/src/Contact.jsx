import React, { useState } from "react";
import "./CSS/Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setContactData({ ...contactData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = contactData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://ecommerceui-32f3f-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setContactData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading">Connect With Us!</h1>
                  <p className="main-hero-para">
                    Velit ex reprehenderit consequat ut amet cillum magna non
                    reprehenderit eiusmod. Lorem et sit voluptate ipsum velit
                  </p>
                  <figure>
                    <img
                      className="img-fluid"
                      src="https://images.unsplash.com/photo-1556740720-776b84291f8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHNhbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                      alt="SalesImage"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          placeholder="First Name"
                          value={contactData.firstName}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          placeholder="Last Name"
                          value={contactData.lastName}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          placeholder="Contact Number"
                          value={contactData.phone}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          placeholder="Email Address"
                          value={contactData.email}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          placeholder="Address"
                          value={contactData.address}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          placeholder="Your Message For Us"
                          value={contactData.message}
                          onChange={postData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label main-hero-para">
                        Dolore consectetur ipsum dolore commodo sint aliqua
                        officia commodo.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
