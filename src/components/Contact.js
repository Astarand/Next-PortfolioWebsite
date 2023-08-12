import React from "react";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { firstName, lastName, email, phone, message } = mailData;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "firstName" || name === "lastName") {
      // Limit the first and last name fields to 10 characters
      newValue = value.substring(0, 10);
    } else if (name === "phone") {
      // Limit the phone number to 10 digits and allow only digits
      newValue = value.replace(/\D/g, "").substring(0, 10);
    }

    setMailData({ ...mailData, [name]: newValue });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !message) {
      setError("Please fill all required fields.");
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phone.match(phoneRegex)) {
        setError("Please enter a valid 10-digit phone number.");
      } else {
        setError(null); // Clear any previous error

        try {
          const formData = {
            firstName,
            lastName,
            email,
            phone,
            message,
          };

          const response = await fetch("https://formspree.io/f/xoqoelzb", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            setMailData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            });
            setSuccessMessage("Message sent Successfully!"); // Set success message
            setTimeout(() => {
              setSuccessMessage(""); // Clear success message after 3 seconds
            }, 10000);
          } else {
            setError("Something went wrong. Please try again later.");
          }
        } catch (error) {
          setError("Something went wrong. Please try again later.");
        }
      }
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <div className="rsk_tm_section" id="contact">
      <div className="rsk_tm_contact">
        <div className="container">
          <div
            className="rsk_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Happy to help you!</span>
            <h3>Connect with Me for anything you required</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 7:00 a.m IST. and 10:00 p.m. IST, Monday
                  through Friday
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>+91-9609412418</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a
                        className="line_anim"
                        href="mailto:rittiksadhukhan49@gmail.com"
                      >
                        rittiksadhukhan49@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="https://formspree.io/f/xoqoelzb"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error ? "block" : "none" }}
                  >
                    <span>{error}</span>
                  </div>
                  <div
                    className="returnmessage"
                    style={{
                      display: successMessage ? "block" : "none",
                      color: "green",
                    }}
                  >
                    <span>{successMessage}</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="firstName"
                          type="text"
                          name="firstName"
                          onChange={(e) => onChange(e)}
                          value={firstName}
                          placeholder="First Name"
                        />
                      </li>
                      <li>
                        <input
                          id="lastName"
                          type="text"
                          name="lastName"
                          onChange={(e) => onChange(e)}
                          value={lastName}
                          placeholder="Last Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="text"
                          placeholder="Your Phone"
                          name="phone"
                          onChange={(e) => onChange(e)}
                          value={phone}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="rsk_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Submit Message {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
