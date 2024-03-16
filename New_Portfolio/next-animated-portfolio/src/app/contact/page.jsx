"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { host } from "@/utils/host";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [lodaing, setLoading] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      setSuccess(false);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            form.current.reset();
          },
          () => {
            setError(true);
            setLoading(false);
          }
        );
    } catch (error) {
      console.log("Email", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("")?.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear {host?.name},</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Message"
          />
          <span>{host?.address}:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Email"
          />
          <span>Regards</span>
          <button className="bg-black rounded font-bold text-white p-4">
            {lodaing ? (
              <>
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </>
            ) : (
              "Send"
            )}
          </button>
          {/* <span className="text-green-600 font-semibold">
              {host?.message}
            </span> */}
          {success && (
            <div
              className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">{host?.message}</p>
                </div>
              </div>
            </div>
          )}
          {error && (
            <span className="text-red-600 font-semibold">{host?.error}</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
