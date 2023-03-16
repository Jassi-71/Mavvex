import React from 'react'
import Robot from '../../../images/robot.png'

const Conversational_ai = () => {
  return (
    <div className='grid grid-row-3 gap-10 mx-72'>
      <div className='grid grid-cols-2 gap-10'>
        <div>
            <div className='my-8 text-2xl font-semibold text-sky-600'>
              Industries
            </div>

            <p className='text-6xl font-bold'>
            Conversational AI
            </p>

            <p className='my-6 text-xl text-gray-700'>
            Conversational AI systems can simulate natural language interactions between 
            humans and computers, using natural language processing (NLP) and machine 
            learning techniques to understand and respond to user input.They can be 
            designed to handle a wide range of tasks, from simple queries and requests
             to more complex interactions that require context and understanding of user
              intent.
            </p>

            <div className='bg-slate-700 text-white px-6 py-2 rounded-full font-bold w-max hover:cursor-pointer'>
              Get in touch
            </div>
        </div>
        
        <div className='m-28'>
          <img src={Robot} alt="logo" />
        </div>
      </div>

      <div className='py-2'/>
      <div>
        <div className='my-8 text-2xl font-semibold text-sky-600'>
          Use Cases
        </div>
        <div className='mx-10'>
          <p className='text-2xl font-semibold'>
          Customer Service and Support
          </p>
          <p className='my-4 text-xl'>
          Conversational AI can be used to provide customer service and support through 
          chatbots, voice assistants, or messaging apps. By automating responses to 
          frequently asked questions and providing personalized support, conversational 
          AI can improve customer satisfaction and reduce response times.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          User Engagement
          </p>
          <p className='my-4 text-xl'>
          Conversational AI can be used to improve user engagement and retention on a 
          website. Chatbots can be programmed to initiate conversations with users, 
          provide personalized recommendations, and encourage users to explore more 
          content on the site.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          Feedback and Surveys
          </p>
          <p className='my-4 text-xl'>
          Conversational AI can be used to gather feedback and conduct surveys on a website. 
          Chatbots can be programmed to ask questions, collect responses, and provide insights 
          into user preferences and opinions.
          </p>
        </div>

        <div className='py-20'/>

      </div>
    </div>
  )
}

export default Conversational_ai
