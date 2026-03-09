import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./contactMe.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const [buttonSuccess, setButtonSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [showCaptcha, setShowCaptcha] = useState(false); // <-- new state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show captcha if it's not already visible
    if (!showCaptcha) {
      setShowCaptcha(true);
      return; // stop submission until captcha is done
    }

    if (!captchaValue) {
      alert("Please verify that you are not a robot!");
      return;
    }

    const serviceID = "service_ldmsnna";
    const templateID = "template_njgqxke";
    const publicKey = "-8nZ5DPCOj84nL4l1";

    const templateParams = {
      subject: formData.subject,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setButtonSuccess(true);
        setFormData({ subject: "", email: "", message: "" });
        setCaptchaValue(null);
        setShowCaptcha(false); // hide captcha again

        setTimeout(() => setButtonSuccess(false), 3000);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        {/* Only show reCAPTCHA when button clicked */}
        {showCaptcha && (
          <div style={{ margin: "10px 0" }}>
            <ReCAPTCHA
              sitekey="6Ldp1IQsAAAAALCmFFILijbpdBZhAU5tIMqn8_Zm"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
        )}

        <button type="submit" className={buttonSuccess ? "success-button" : ""}>
          {buttonSuccess ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
