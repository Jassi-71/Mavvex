import React from 'react'
import HealthcareImg from '../../../images/healthcare.png'

const Healthcare = () => {
  return (
    <div className='grid grid-row-3 gap-10 mx-72'>
      <div className='grid grid-cols-2 gap-10'>
        <div>
            <div className='my-8 text-2xl font-semibold text-sky-600'>
              Industries
            </div>

            <p className='text-6xl font-bold'>
              Healthcare
            </p>

            <p className='my-6 text-xl text-gray-700'>
            AI has been widely used to diagnose diseases in clinical situations and assist 
            medical professionals in determining the best course of therapy. However, one of the most significant difficulties that healthcare organisations face is data collection. For providing the best possible healthcare solutions to patients, 
            it is very important that medical data be easily shared across organisations.
            </p>

            <div className='bg-slate-700 text-white px-6 py-2 rounded-full font-bold w-max hover:cursor-pointer'>
              <a href="/contact-us">Get in touch</a>
            </div>
        </div>
        
        <div className='m-28'>
          <img src={HealthcareImg} alt="logo" />
        </div>
      </div>

      <div className='py-2'/>
      <div>
        <div className='my-8 text-2xl font-semibold text-sky-600'>
          Use Cases
        </div>
        <div className='mx-10'>
          <p className='text-2xl font-semibold'>
            Instant access to patients' data
          </p>
          <p className='my-4 text-xl'>
          Due to data privacy concerns, it is very difficult for healthcare organisations to share patients’ data. If such data could be shared across 
          different departments and organisations while preserving patient privacy, many applications can be unlocked. With betterdata, patients' data 
          can be easily shared within internal teams as well as external organisations.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          Data augmentation
          </p>
          <p className='my-4 text-xl'>
          In medical institutes that are highly regulated, data often exists in 
          isolated silos and is insufficient to train an AI model that can offer 
          good accuracy. betterdata offers robust data augmentation techniques to 
          address situations where there is a lack of data, by synthesising data 
          without changing its inherent structure.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
            Bias mitigation
          </p>
          <p className='my-4 text-xl'>
          ML models are being frequently used for diagnosis of different diseases 
          in the clinical domain. If subject selection is done incorrectly, the 
          dataset can end up being heavily imbalanced and skewed. With betterdata, 
          your datasets can be balanced to ensure that your AI models are not trained 
          on the wrong data.
          </p>
        </div>

        <div className='py-20'/>

      </div>
    </div>
  )
}

export default Healthcare
