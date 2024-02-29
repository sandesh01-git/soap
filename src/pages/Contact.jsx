import React from 'react';

const Contact = () => {
  return (
    <>
      <div>
        <div style={{backgroundImage:'url(.././b.jpg)', height:'200px'}} className="w-full bg-center bg-no-repeat bg-cover ">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            
          </div>
        </div>
        <h2 className = "text-center text-4xl m-10">Contact For Any Query</h2>
        <div className='text-center text-4xl flex flex-row justify-between'> 
          <div className='w-4/5'>
            <form className=" ml-40 max-w-sm">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your Name</label>
                <input type="text" id="name" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your Email</label>
                <input type="email" id="email" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Subject</label>
                <input type="text" id="subject" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-10">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Message</label>
                <textarea className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
          <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6628495280443!2d85.31829767453416!3d27.66590102731993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1708672022961!5m2!1sen!2snp"  className="mx-auto w-3/4 h-96 border-0 allowfullscreen loading-lazy"
  referrerpolicy="no-referrer-when-downgrade"/>
  </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Contact;
