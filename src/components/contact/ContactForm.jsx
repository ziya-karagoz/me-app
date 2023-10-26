import React from "react";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {

	const [theme, setTheme] = React.useState(localStorage.theme);


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();
	console.log(name, email, message)
    if (!name || !email || !message) {
      return;
    }
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
		  toast.success("Message sent successfully!");
          setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
          }, 5000);
        },
        (error) => {
			toast.error("Message could not be sent!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>
          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
			value={name}
			onChange={(e) => setName(e.target.value)}
			
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
			value={email}
			onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
			  value={message}
			  onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div  onClick={sendEmail} className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-yellow-500 hover:bg-yellow-600 focus:ring-1 focus:ring-yellow-900 rounded-lg mt-6 duration-500">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
             
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
