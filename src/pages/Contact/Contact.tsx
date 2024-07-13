

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
    
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    
                    placeholder="Enter your message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </section>
    
            {/* Contact Information Section */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-700">123 Nursery Lane, Garden City, PLANTZ</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-700">info@ournursery.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-700">+123 456 7890</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
}

export default Contact