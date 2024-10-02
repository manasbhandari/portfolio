import React from 'react'
import yashhealthimg from "../assets/yashhealthimg.png"
import yashskills from "../assets/yashskills.png"
import wittyimg from "../assets/wittyhack.png"
import wittyskills from "../assets/wittyskills.png"
import krishiimg from "../assets/krishimitra.png"

const Project = () => {
  return (
    <div className='bg-[#1E1E1E]'>

        <h1 className='  text-[#FFCD29] text-4xl ml-14 pt-16 font-semibold '>projects</h1>

        <h1 className="text-white text-5xl pt-16 text-center ">
        these are some of my  <span className="text-[#FFCD29]">cool </span>projects
      </h1>


        <div className='flex flex-col justify-center gap-60 items-center pt-32  '>

        
        
        <section className='flex mt-10 gap-20 justify-around items-center '>
            <div className='pr-10 text-center'>
                <h1 className='text-white  text-4xl font-bold '>YashHealth</h1>
                <br />
                <p className='text-white text-center'>your health companion</p>
                <img className='h-12  ' src={yashskills} alt="" />
            </div>
            <div className='border-8 border-[#FFCD29] rounded-lg'>
              <img className='h-72' src={yashhealthimg} alt="" />
            </div>
        </section>

        <section className='flex mt-10 gap-20 justify-around items-center '>
            <div className='pr-10 text-center'>
                <h1 className='text-white  text-4xl font-bold '>Krishi Mitra</h1>
                <br />
                <p className='text-white text-center'>Empowering Farmers of India</p>
                <img className='h-12' src={yashskills} alt="" />
            </div>
            <div className='border-8 border-[#FFCD29] rounded-lg'>
              <img className='h-72' src={krishiimg} alt="" />
            </div>
        </section>

        <section className='flex mt-10 gap-20 justify-around items-center '>
            <div className='pr-10 text-center'>
                <h1 className='text-white  text-4xl font-bold '>E-Commerce</h1>
                <br />
                <p className='text-white text-center'>one stop for all  clothing need</p>
                <img className='h-14 pl-4  ' src={wittyskills} alt="" />
            </div>
            <div className='border-8 border-[#FFCD29] rounded-lg'>
              <img className='h-72' src={wittyimg} alt="" />
            </div>
        </section>
        
        {/* <section className='flex mt-10 gap-20 justify-around items-center mb-10 '>
            <div className='pr-10 text-center pl-6'>
                <h1 className='text-white  text-4xl font-bold '>JS Mini project</h1>
                <br />
                <p className='text-white text-center '>see cool functionalities of JS</p>
                <img className='h-12 pl-10' src={jsskills} alt="" />
            </div>
            <div className='border-8 border-[#FFCD29] rounded-lg'>
              <img className='h-72' src={yashhealthimg} alt="" />
            </div>
        </section> */}




        </div>
      
    </div>
  )
}

export default Project
