import { Link } from "react-router-dom";
import React, {  useState } from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { FaArrowLeft } from "react-icons/fa";
import {toast ,Toaster} from "react-hot-toast";
import  emailjs  from "@emailjs/browser";


function ContactPage() {
  
  const [formData, setFormData] = useState({
    email:"",
    message:""
  });

  const [ errors, setErrors] = useState({});
  const [ isSending, setIsSending] = useState(false);
 
  const handleChange = (e) => {
       const {name,value} = e.target;
       console.log("event" , e.target.value)
       setFormData({
        ...formData,
        [name]:value,
       })
  }

  const validata = () => {
    let errors = {}
    if(!formData.email) {
      errors.email = "EMAIL is required"
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errors.email = "EMAIL is Invalid"
    }
    if(!formData.message) errors.message = "Message is required"

    return errors;
   
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const validataErrors = validata();
      if( Object.keys(validataErrors).length > 0){
        setErrors(validataErrors)
      }else{
        setErrors({});
        setIsSending(true);
      
        emailjs
        .send(
            "service_gi7djl7",
            "template_f1o228k",
             formData,
            "aK-U1gzeMDq-GwXGk",
        )
        .then( (response) => {
          console.log("SUCCESS" , response.status, response.text);
          toast.success("Message Sent Successfully");
          setFormData({
            email:"",
            message:""
          })
          setIsSending(false)

        }).catch( (error) => {
          console.log("ERROR", error);
          toast.error("Failed to Send Message")
          setIsSending(false)
        })
      }
  }

  return (  
  <> 
    
    <div className="min-h-screen bg-neutral-950 py-12 md:pt-36 relative overflow-hidden">
      <Toaster/>
      {' '}  
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute  top-0 left-0 w-full h-full z-0" />
        {/* BACK TO HOME ICON */}
        
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}

             <div className=" flex  w-fit rounded-sm py-2 mb-6  ">
               <Link to="/"   className=" text-xl font-bold md:text-3xl flex items-center justify-center ml-3 md:36  gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-100 border-b-2 border-red-600">
                    Back</div>
               </Link>
              </div>

        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-4xl md:text-5xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2  text-center mb-12">
          I'm currently looking for new opportunities to work with great people & companies.
          I'm highly adaptable and always willing to learn new technologies as required by the company.
          If you think I might be a good fit for your team or you just want to learn more about what I do, 
          don't hesitate to reach out via email <span className=" text-white">piyushkushwaha977</span> or anywhere you feel comfortable to contact.
           I am always excited to work on some awesome projects
        </p>
        <form onSubmit={handleSubmit} className="space-y-8 mt-4 border-gray-700 ">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email "
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-900 placeholder:text-neutral-400  text-neutral-200"
            required
          />
          {errors.message && (
            <p className=" text-sm text-red-700"> {errors.message} </p>
          )}


          <textarea
            type="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-900 placeholder:text-neutral-400 text-neutral-200"
            required
            rows={4}
          ></textarea>
          {errors.message && (
            <p className=" text-sm text-red-700"> {errors.message} </p>
          )}

          <button
            type="submit"
            className={` w-full  px-6 py-2 rounded-lg bg-teal-500 text-white font-medium transition-all duration-300 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
            ${ isSending && "cursor-not-allowed opacity-50"}`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
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