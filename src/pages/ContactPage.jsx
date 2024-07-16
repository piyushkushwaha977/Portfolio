import { Link } from "react-router-dom";
import React, {  useState } from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { FaArrowLeft } from "react-icons/fa";
// import Footer from "../components/custom/Footer";

function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (  
  <> 
    
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 py-12 pt-36 relative overflow-hidden">
      {' '}  
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute  top-0 left-0 w-full h-full z-0" />
        {/* BACK TO HOME ICON */}
        
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}

       <div className=" text-white flex  w-fit rounded-sm py-2 ">
       <Link to="/" 
         className=" text-lg md:text-3xl flex gap-2  ">
          <FaArrowLeft className=" inline md:text-2xl text-white mt-2"/>
            <div className="  text-gray-300 border-b-2 border-red-600">
              Back</div>
            
        </Link>
       </div>

        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-4xl md:text-5xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center mb-12">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8 mt-4 border-gray-700 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-900 placeholder:text-neutral-200"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-900 placeholder:text-neutral-200"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className=" px-6 py-2 rounded-lg bg-teal-500 text-white font-medium transition-all duration-300 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

        {/* <div className=" bg-black">
            <Footer/>
        </div> */}

      </div>
    </div>

   
</> 
  );
}

export default ContactPage;