import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initail: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3qpnz5i", "template_rd3qv63", formRef.current, {
        publicKey: "nfPcyCWcim1CDCoS9",
      })
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          formRef.current.reset(); // Reset the form
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initail"
      whileInView="animate"
    >
      <div className="formContainer">
        <form onSubmit={sendEmail} ref={formRef}>
          <input type="text" name="name" required placeholder="Name" />
          <input type="email" name="email" required placeholder="Email" />
          <textarea rows="8" placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && <div className="error-message">Error</div>}
          {success && (
            <div className="success-message">Message sent successfully!</div>
          )}
        </form>
      </div>
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&rsquo;s Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>bunhovlim1@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Phnom Penh</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+855 963 354 150</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
