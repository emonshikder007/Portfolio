import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9b03d7e9-5096-45fa-b8b6-72d67867cac3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Send Successfully!",
        icon: "success",
      });
    }
  };

  return (
    <section className="contact_section" id="contact">
      <div className="contact_header" data-aos="zoom-in">
        <h1 className="contact_title">
          Contact <span className="span_me">Me</span>
        </h1>
      </div>

      <form
        onSubmit={onSubmit}
        className="form"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="name">
          <input className="name_input" type="text" name="name" required />
          <div className="labelline">Enter Your Name</div>
        </div>
        <div className="email">
          <input className="email_input" type="email" name="email" required />
          <div className="label_line">Enter Your Email</div>
        </div>
        <div className="textarea">
          <textarea
            className="message_input"
            name="message"
            type="text"
            required
          />
          <div className="label_line_msg">Enter Your Message</div>
        </div>
        <div className="button_container">
          <button className="contact_btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
