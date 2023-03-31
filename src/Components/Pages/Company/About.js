import React from 'react'
import Vision from '../../../images/vision.jpg'
import Story from '../../../images/our_story.jpg'
import Beatrix from '../../../images/Beatrix.jpg'
import Harriet from '../../../images/Harriet.jpg'
import Rosa from '../../../images/Rosa.png'
import Brian from '../../../images/Brian.jpg'
import  Bruce from '../../../images/Bruce.jpg'
import Jeffrey from '../../../images/Jeffrey.jpeg'

const About = () => {
  return (
    <>
      <div>
        
      </div>
      <div className='grid grid-row-3 mx-10 md:mx-48'>
        <p className='text-5xl font-bold'>
          Our Mission
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
        
          <div>
            <div className='my-10 text-xl text-gray-700'>

              <p className='my-6'>
              Our mission is to empower businesses and organizations to harness the full potential of artificial intelligence to solve complex problems and drive innovation. Through our consultancy services, we work closely with our clients to understand their unique challenges and design customized solutions that leverage the latest AI technologies and best practices.
              </p>
              
              <p className='my-6'>
              In addition to our consultancy services, <b>we also develop cutting-edge AI-based products that help our clients stay ahead of the curve. </b>Whether it's through developing intelligent chatbots, predictive analytics models, or computer vision systems, our team of AI experts is dedicated to delivering innovative solutions that drive real business value.

              </p>

              <p className='my-6'>

              Ultimately, our goal is to be a trusted partner for businesses and organizations looking to unlock the full potential of AI. We believe that by leveraging the power of AI, we can help our clients solve complex problems, gain valuable insights, and drive growth and innovation in today's rapidly evolving digital landscape.
              </p>

            </div>
          </div>
          <div className='mt-0 lg:mt-40'>
            <img src={Vision} alt="logo" className='object-scale-down h-80 w-100'/>
          </div>
        </div>

        <p className='text-5xl font-bold'>
          Our Story
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='mt-0 lg:mt-40'>
            <img src={Story} alt='story' className='object-scale-down h-80 w-100'/>
          </div>
          <div>
            <div className='my-10 text-xl text-gray-700'>
              <p className='my-6'>
                Our story began with a shared passion for artificial intelligence and its potential to transform the way we live, work, and interact with the world.
                As a team of experienced AI professionals, we saw firsthand the incredible power of AI to solve complex problems and unlock new opportunities for businesses and organizations.
              </p>

              <p className='my-6'>
              Our product development team has developed cutting-edge AI-based solutions, including intelligent chatbots, predictive analytics models, 
              and computer vision systems, that have helped our clients stay ahead of the curve in today's rapidly evolving digital landscape.
              </p>
              <p className='my-6'>
              Looking ahead, we remain committed to <b>our mission of empowering businesses and organizations to harness the full potential of AI in a responsible and ethical way.</b> We believe that AI has the power to transform the world for the better, 
              and we are excited to be at the forefront of this revolution.
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 place-items-center my-16'>
          <p className='text-5xl font-bold'>
            Our Leadership
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80' src={Bruce} alt='image'/>
            <p className='font-bold text-lg'>Bruce Peter</p>
            <p>CEO</p>
          </div>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80' src={Brian} alt='image'/>
            <p className='font-bold text-lg'>Brian George</p>
            <p>CTO & Co-Founder</p>
          </div>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80' src={Rosa} alt='image'/>
            <p className='font-bold text-lg'>Rosa Parks</p>
            <p>CFO</p>
          </div>
        </div>
        
        
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-0 lg:my-10'>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80 object-contain' src={Beatrix} alt='image'/>
            <p className='font-bold text-lg'>Beatrix Potter </p>
            <p>COO</p>
          </div>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80 object-contain' src={Jeffrey} alt='image'/>
            <p className='font-bold text-lg'>Jeffrey Gary</p>
            <p>President of Worldwide Field Operations</p>
          </div>
          <div className='flex flex-col place-items-center gap-1.5'>
            <img className='rounded-full w-80 h-80' src={Harriet} alt='image'/>
            <p className='font-bold text-lg'>Harriet Tubman </p>
            <p>SVP Global HR</p>
          </div>
        </div>

        <div className='my-10'/>
      </div>
      

      
    </>
  )
}

export default About
