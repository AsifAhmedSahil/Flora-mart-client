import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">About Our Nursery</h1>
    
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-1/2 mb-4 lg:mb-0 ">
              <img 
                src="https://as1.ftcdn.net/v2/jpg/02/35/48/90/1000_F_235489007_Gpr40wSoP6Ei4XkCKXPaLGIvo3VagS0m.jpg"
                alt="Nursery Image"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Welcome to our online nursery, where we specialize in providing a wide variety of
                plants and gardening products to enhance your indoor and outdoor spaces. Our mission is
                to make gardening accessible to everyone by offering quality products, expert advice,
                and exceptional customer service.
              </p>
            </div>
          </div>
    
          <div className="border-t border-gray-200 py-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to make gardening accessible to everyone by offering quality products,
              expert advice, and exceptional customer service. We believe in the transformative power
              of plants and aim to inspire our customers to create beautiful and sustainable green
              spaces.
            </p>
          </div>
    
          <div className="border-t border-gray-200 py-8">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <ul className="text-lg text-gray-700">
              <li className="mb-2">
                <span className="font-semibold">Email:</span> info@ournursery.com
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +123 456 7890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Address:</span> 123 Nursery Lane, Garden City,
                PLANTZ
              </li>
            </ul>
          </div>
        </div>
      );
}

export default About