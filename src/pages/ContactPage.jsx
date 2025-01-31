import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact us</h2>
      <p className="mb-4">
            Want to reach out? Email, call,text  or fill out the form on the side
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +254 745913429
          </p>
          <p className="mb-8">
            <strong>Email:</strong> joyce04mwangi@gmail.com
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Work with us</h3>
              <p className="text-sm">
                Interested in partnering with us? Reach out and explore collaboration opportunities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm">
                Need help with an issue? Our team is ready to assist you as soon as possible.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Feedback and suggestions</h3>
              <p className="text-sm">
                Your feedback helps us improve better! Share your thoughts and suggestions.
              </p>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4">
            Let us know how we can help you, and we will get in touch as soon as possible.
          </p>
          <form className="space-y-4">
          <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-2 bg-black border border-gray-600 rounded" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-2 bg-black border border-gray-600 rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 bg-black border border-gray-600 rounded" />
            <div className="flex gap-4">
              <select className="w-1/4 p-2 bg-black border border-gray-600 rounded">
                <option value="+254">+254 ---</option>
              </select>
              <input type="tel" placeholder="712 345678" className="w-3/4 p-2 bg-black border border-gray-600 rounded" />
            </div>
            <textarea placeholder="Message" rows="4" className="w-full p-2 bg-black border border-gray-600 rounded"></textarea>
            <button type="submit" className="w-full bg-gray-800 py-2 rounded text-white hover:bg-blue-700">Send message</button>
          </form>

          </div>
          
    </div>
  )
}

export default ContactPage
