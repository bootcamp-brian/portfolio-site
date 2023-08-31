import { MailIcon } from "@heroicons/react/solid";
import React from "react";

export default function Contact() {

  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-5">
          <MailIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Want to get in touch? You can reach me at the email or phone number below.
          </p>
        </div>
          <div className="text-center">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a href="mailto: braintm2@gmail.com" className="text-indigo-400 leading-relaxed">
              braintm2@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">213-324-3778</p>
          </div>
      </div>
    </section>
  );
  }