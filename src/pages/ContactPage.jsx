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
          
    </div>
  )
}

export default ContactPage
