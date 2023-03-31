import React from 'react'
import Cart from '../../../images/cart.png'

const Retail = () => {
  return (
    <div className='grid grid-row-3 mx-10 md:mx-48'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
            <div className='my-8 text-2xl font-semibold text-sky-600'>
              Industries
            </div>

            <p className='text-6xl font-bold'>
            Retail
            </p>

            <p className='my-6 text-xl text-gray-700'>
            E-commerce was one of the early adopters of AI/ML models that used them to design data 
            clustering algorithms and automate which products should be shown on a user’s homepage. 
            AI is now present in nearly every action a user takes, which allows retail companies to 
            collect user data and offer more personalised services.
            </p>

            <div className='bg-slate-700 text-white px-6 py-2 rounded-full font-bold w-max hover:cursor-pointer'>
              <a href="/contact-us">Get in touch</a>
            </div>
        </div>
        
        <div className='mt-0 lg:mt-40'>
          <img src={Cart} alt="logo" className='object-scale-down h-48 w-96'/>
        </div>
      </div>

      <div className='py-2'/>
      <div>
        <div className='my-8 text-2xl font-semibold text-sky-600'>
          Use Cases
        </div>
        <div>
          <p className='text-2xl font-semibold'>
          Customer churn model
          </p>
          <p className='my-4 text-xl'>
          Predicting and reducing user churn rate with targeted recommendations and 
          offers is a common strategy of retail companies as retaining customers is a 
          key concern for them. betterdata helps to balance and generate synthetic data 
          that matches real user data and is free to use, share, and store across different 
          business units within the same company as well as externally with third-parties.
          </p>
        </div>

        <div className='my-10'>
          <p className='text-2xl font-semibold'>
          Recommendation systems that actually work
          </p>
          <p className='my-4 text-xl'>
          Advanced clustering algorithms power recommendation systems and need huge volumes of 
          user data for profiling. A recommendation system also requires AI models to be properly
           fine-tuned and capture complex correlations between different user profiles. With
            betterdata, real user data can be transformed into synthetic data that can be openly 
            shared and used for product development to offer users more personalised services.
          </p>
        </div>

        <div className='my-10'>
          <p className='text-2xl font-semibold'>
          Predictive sale analytics
          </p>
          <p className='my-4 text-xl'>
          Retail businesses usually forecast their revenue goals by predicting when users 
          are most likely to buy a certain product. Such predictive analytics can boost a 
          business multifold such as stock optimization and resource management can be effectively
           done by predicting user sentiment for a certain period of time. betterdata adds to this 
           capability with data synthesis that can amplify hidden data patterns, which are otherwise
            missed with traditional techniques.
          </p>
        </div>

        <div className='py-10'/>

      </div>
    </div>
  )
}

export default Retail
