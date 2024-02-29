import React from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server
    console.log(formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div>
        <div className="w-full h-30 bg-center bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/369376/pexels-photo-369376.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-blue-600-700 bg-blend-multiply size-auto">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">Contact Us</h1>
          </div>
        </div>
        <div className='text-center text-4xl'>
          <h2>Contact For Any Query</h2>
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your Name</label>
                <input type="text" id="name" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Your Email</label>
                <input type="email" id="email" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Subject</label>
                <input type="text" id="subject" className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.subject} onChange={handleChange}required />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-black-900 dark:text-black">Message</label>
                <textarea className="bg-blue-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message"  value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm
