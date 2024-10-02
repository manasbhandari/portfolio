import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We will get in touch with you at ${email}`);
  };

  return (
    <div>
      <div className='h-32 w-full bg-[#FFCD29] flex items-center p-8'>
        <form onSubmit={handleSubmit} className='flex gap-4 items-center'>
          <label htmlFor='email' className='text-black text-lg '>
            Get in touch with me:
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email address'
            className='p-2 rounded'
            required
          />
          <button
            type='submit'
            className='bg-black text-white p-2  rounded hover:bg-gray-800'
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;