import { useRef, useState, useContext } from "react";
import "./Contact.css";
import Phone from "../../IMG/phone.png";
import Email from "../../IMG/email.png";
import Address from "../../IMG/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const notify = () => toast("Message Send Successfully");

  // uncontrolled form
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const Theme = useContext(ThemeContext);
  const darkMode = Theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    // for send email by using email.js
    emailjs
      .sendForm(
        "service_gka53iv",
        "template_6mc1brc",
        formRef.current,
        "user_tiJWoyMMBmUSsFiNpPWub"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //   email.js End
  };

  return (
    <>
      <Helmet>
        <title>Contact Me</title>
        {/* <!-- SEO --> */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="React portfolio" content="Portfolio content" />
        <meta property="og:title" content="React Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/taha123618" />
        {/* <!-- SEO End  --> */}
      </Helmet>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="PhoneNo" className="c-icon" />
                03492994930
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="Email" />
                tahaahmedanees2@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="Location" />
                Pakistan, Karachi.
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button onClick={notify}>Submit</button>
              <br></br>
              {done && "Thank you...!"}
              <ToastContainer position="top-center" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
