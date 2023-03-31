import React from 'react'
import Tractor from '../../../images/tractor.png'

const Agriculutre = () => {
  return (
    <div className='grid grid-row-3 mx-10 md:mx-48'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
            <div className='my-8 text-2xl font-semibold text-sky-600'>
              Industries
            </div>

            <p className='text-6xl font-bold'>
            Agriculutre
            </p>

            <p className='my-6 text-xl text-gray-700'>
            AI can be used in many ways in Agriculture. By using AI to optimize resources,
             detect issues early, and improve efficiency, farmers can reduce costs and 
             increase yields, ultimately contributing to a more sustainable and secure 
             food supply.
            </p>

            <div className='bg-slate-700 text-white px-6 py-2 rounded-full font-bold w-max hover:cursor-pointer'>
              <a href="/contact-us">Get in touch</a>
            </div>
        </div>
        
        <div className='mt-0 lg:mt-40'>
          <img src={Tractor} alt="logo" className='object-scale-down h-48 w-96'/>
        </div>
      </div>

      <div className='py-2'/>
      <div>
        <div className='my-8 text-2xl font-semibold text-sky-600'>
          Use Cases
        </div>
        <div>
          <p className='text-2xl font-semibold'>
          Precision Agriculture
          </p>
          <p className='my-4 text-xl'>
          AI can be used in precision agriculture to optimize the use of resources 
          such as water, fertilizers, and pesticides. By analyzing data from sensors, 
          drones, and other sources, AI algorithms can provide insights into soil 
          moisture, plant health, and growth patterns. This information can help farmers 
          make data-driven decisions and reduce waste, ultimately improving crop yields 
          and efficiency.
          </p>
        </div>

        <div className='my-10'>
          <p className='text-2xl font-semibold'>
          Crop Monitoring and Yield Prediction
          </p>
          <p className='my-4 text-xl'>
          AI can be used to monitor crops and predict yields. By analyzing satellite 
          imagery and other data sources, AI algorithms can provide insights into plant 
          health, growth patterns, and stress levels. This information can help farmers 
          detect issues early and take corrective action to prevent yield losses.
          </p>
        </div>

        <div className='my-10'>
          <p className='text-2xl font-semibold'>
          Pest and Disease Detection
          </p>
          <p className='my-4 text-xl'>
          AI can be used to detect pests and diseases in crops. By analyzing images 
          and data from sensors, AI algorithms can identify signs of pests and diseases 
          before they spread. This information can help farmers take preventive measures 
          to protect their crops and reduce the use of pesticides.
          </p>
        </div>

        <div className='my-10'>
          <p className='text-2xl font-semibold'>
          Livestock Management
          </p>
          <p className='my-4 text-xl'>
          AI can be used in livestock management to monitor the health and behavior 
          of animals. By analyzing data from sensors and cameras, AI algorithms can 
          identify signs of illness or distress and alert farmers to take action. This 
          information can also help farmers improve the welfare of their animals and 
          optimize feed and water usage.
          </p>
        </div>

        <div className='py-10'/>

      </div>
    </div>
  )
}

export default Agriculutre
