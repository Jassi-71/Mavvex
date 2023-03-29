import React from 'react'
import Privacy from '../../../images/privacy.png'

const Security_Privacy = () => {
  return (
    <div className='grid grid-row-3 gap-10 mx-72'>
      <div className='grid grid-cols-2 gap-10'>
        <div>
            <div className='my-8 text-2xl font-semibold text-sky-600'>
              Industries
            </div>

            <p className='text-6xl font-bold'>
              Security and Privacy in AI
            </p>

            <p className='my-6 text-xl text-gray-700'>
            AI can be a powerful tool for improving security and privacy in organizations.
            By leveraging the power of machine learning and data analytics, AI can help 
            detect threats, prevent fraud, and protect user data, allowing organizations 
            to operate with confidence and trust.
            </p>

            <div className='bg-slate-700 text-white px-6 py-2 rounded-full font-bold w-max hover:cursor-pointer'>
              <a href="/contact-us">Get in touch</a>
            </div>
        </div>
        
        <div className='m-28'>
          <img src={Privacy} alt="logo" />
        </div>
      </div>

      <div className='py-2'/>
      <div>
        <div className='my-8 text-2xl font-semibold text-sky-600'>
          Use Cases
        </div>
        <div className='mx-10'>
          <p className='text-2xl font-semibold'>
          Threat Detection
          </p>
          <p className='my-4 text-xl'>
          AI can be used to detect and prevent cyber threats such as malware, phishing, 
          and ransomware. Machine learning algorithms can analyze patterns of network 
          activity and identify suspicious behavior, allowing security teams to take 
          action before a breach occurs.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          Fraud Detection
          </p>
          <p className='my-4 text-xl'>
          AI can be used to detect and prevent fraud by analyzing patterns of user 
          behavior and identifying anomalies. Machine learning algorithms can flag 
          suspicious transactions or activity and alert security teams, reducing the 
          risk of financial losses.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          Privacy Protection
          </p>
          <p className='my-4 text-xl'>
          AI can be used to protect user privacy by analyzing patterns of data use and 
          identifying potential privacy risks. Machine learning algorithms can identify 
          sensitive data such as social security numbers or credit card information and 
          encrypt or anonymize the data to prevent unauthorized access.
          </p>
        </div>

        <div className='mx-10 my-10'>
          <p className='text-2xl font-semibold'>
          Identity Verification
          </p>
          <p className='my-4 text-xl'>
          AI can be used to verify user identity and prevent unauthorized access to 
          sensitive data. Facial recognition and biometric technologies can be used 
          to authenticate users and provide an additional layer of security.
          </p>
        </div>

        <div className='py-20'/>

      </div>
    </div>
  )
}

export default Security_Privacy
