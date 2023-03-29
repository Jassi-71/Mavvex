import React from 'react'

const Contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-5xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 class="font-bold text-4xl tracking-wide">
              Contact Us 
            </h1>
            <p className="pt-2 text-cyan-100 text-md">
              Don't hesitate to get in touch with us to discuss any inquiries or 
              to learn more about our products/services. Contact us today! 
            </p>
          </div>
          <div className="flex flex-col space-y-6 text-2xl">
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="call" className="text-teal-300"></ion-icon>
              <span className="text-base"><a href="tel:+1(202)918-2132" target="_blank">+1 (202) 918-2132</a></span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="mail" className="text-teal-300"></ion-icon>
              <span className="text-base"> <a href="mailto:admin@mavvexlabs.com" target="_blank">admin@mavvexlabs.com</a></span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ion-icon name="location" className="text-teal-300"></ion-icon>
              <span className="text-base">1197 Sainik Colony Sector 49, Faridabad HR 121001, India</span>
            </div>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>

        <div className="relative">
          <div class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div class="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-96">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label for="" className="text-sm font-bold after:content-['*']">First name</label>
                <input type="text" placeholder="Ashley" required className="text-sm ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-non focus:ring-2 focus:ring-teal-300 mt-2"/>
              </div>

              <div>
                <label for="" className="text-sm font-bold after:content-['*']">Last name</label>
                <input type="text" placeholder="Johnson" required className="text-sm ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-non focus:ring-2 focus:ring-teal-300 mt-2"/>
              </div>

              <div>
                <label for="" className="text-sm font-bold">Company</label>
                <input type="text" placeholder="Example" className="text-sm ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-non focus:ring-2 focus:ring-teal-300 mt-2"/>
              </div>

              <div>
                <label for="" className="text-sm font-bold after:content-['*']">Email</label>
                <input type="email" placeholder="ashley.johnson@example.com" required className="text-sm ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-non focus:ring-2 focus:ring-teal-300 mt-2"/>
              </div>

              <div>
                <label for="" className="text-sm font-bold after:content-['*']">Message</label>
                <textarea placeholder="Please type your message and we'll respond as soon as possible." rows="5" className="text-sm ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-non focus:ring-2 focus:ring-teal-300 mt-2"/>
              </div>

              <button class="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact