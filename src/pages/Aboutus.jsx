import React from 'react';

const Aboutus = () => {
  return (
    <>
      <div>
        <div style={{backgroundImage:'url(bn.jpg)', height:'200px'}} className="flex items-center justify-center w-full bg-center bg-no-repeat bg-cover transition-duration-75ms ">
        <h2 className=' p-3 bg-opacity-40 text-4xl font-bold transition-duration-75ms bg-gray-500'>About Us</h2>
         
        </div>

        <div className="max-w-screen-xl mx-auto px-4 py-8">
          

          <div className="border-l-4 border-gray-600 pl-4">
            <p className=' mx-50px my-100px   text-left text-align-justify '>
              At E-one soap, we believe that the essence of beauty lies in simplicity and purity. Rooted in the timeless tradition of artisanal craftsmanship, we meticulously curate each bar of soap to deliver an indulgent experience that rejuvenates both body and soul.
            </p>

            <p className='mb-5 text-left'>
              <strong>Our Story</strong><br />
              Founded on the principles of quality, sustainability, and authenticity, E-one soap was born from a deep passion for natural skincare. Our journey began with a simple desire to create handcrafted soaps using only the finest ingredients nature has to offer.
              Driven by our commitment to environmental stewardship, we handpick organic botanicals, nourishing oils, and fragrant essences sourced from sustainable and ethical suppliers worldwide. Each ingredient is thoughtfully selected to ensure that our products are as gentle on the earth as they are on your skin.
            </p>

            <p className='mb-5 text-left'>
              <strong>Our Philosophy</strong><br />
              At Beauty Soap, we believe in the transformative power of self-care rituals. Our soaps are more than just cleansing agents; they are moments of tranquility amidst the chaos of daily life. We invite you to immerse yourself in the sublime aromas and luxurious lather of our handcrafted creations, and let the cares of the world slip away.
            </p>

            <p className='mb-5 text-left'>
              <strong>Our Commitment to Sustainability</strong><br />
              As guardians of the earth, we are committed to minimizing our environmental footprint at every step of the production process. From eco-friendly packaging to biodegradable ingredients, we strive to create products that reflect our reverence for the planet and its precious resources.
            </p>

            <p className='mb-5 text-left'>
              <strong>Join Us on the Journey</strong><br />
              Whether you seek solace in the soothing embrace of lavender, the invigorating zest of citrus, or the grounding aroma of cedarwood, E-one soap offers a diverse range of scents to suit every mood and preference.
              We invite you to explore our collection, discover your signature scent, and embark on a journey of self-care and sustainability with Eone soaps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
