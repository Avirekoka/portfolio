'use client'
import { IContactUs } from '@/interface';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {

  const [contactUs, setContactUs] = useState<IContactUs>({
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log("This is my data : ", contactUs);
      setContactUs({
        fullName: "",
        email: "",
        message: ""
      })
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  return (
    <div className='h-screen bg-white bg-contact-us-page'>
      <p className='text-center text-3xl pt-10 font-bold'>CONTACT US</p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, bounce: 0.5, type: "spring" }}
        className='mt-5 p-5 flex justify-evenly items-center'>
        <div className='flex justify-center items-center gap-3'>
          <motion.img src="/phone-call.png" width={50} height={50} />
          <p>+91-9892583723</p>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <motion.img src="/email.png" width={50} height={50} />
          <p>avi1999kokare@gmail.com <br />avinash.kokare@fitcircle.in</p>
        </div>

        <div className='flex justify-center items-center gap-3'>
          <motion.img src="/placeholder.png" width={50} height={50} />
          <p>Omkar Krishna Park - 2, Vichumbe <br /> New Panvel, Raigad 410206</p>
        </div>
      </motion.div>
      <div className='w-full grid grid-cols-2 gap-4p'>
        <div className='flex justify-center p-10 mt-20 mb-20'>
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.7, duration: 2 }}
          >
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex-col items-center">
                <input

                  className="w-full text-gray-700 border border-black rounded py-3 px-4 mb-5" type="text" placeholder="Full Name" style={{ height: "40px" }} value={contactUs.fullName} onChange={(e) => setContactUs({ ...contactUs, fullName: e.target.value })} />
                <input className="w-full text-gray-700 border border-black rounded py-3 px-4  mb-5" type="email" placeholder="Email" style={{ height: "40px" }} value={contactUs.email} onChange={(e) => setContactUs({ ...contactUs, email: e.target.value })} />
                <textarea className="w-full text-gray-700 border border-black rounded py-3 px-4 mb-3" placeholder='Message' style={{ height: "100px" }} value={contactUs.message} onChange={(e) => setContactUs({ ...contactUs, message: e.target.value })} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
        <div className='flex justify-center items-center'>
          <motion.img src='/contactus-1.png' alt='contactus image' initial={{ width: 200, height: 200 }} animate={{ width: 400, height: 400 }} transition={{ type: "spring", bounce: 0.7, duration: 4 }} />
        </div>
      </div>
    </div>
  )
}

export default Contact;