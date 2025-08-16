import {
  AlertCircle,
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* contact info */}
          <div className="lg:col-span-2 group">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-sm">
                    <Mail className="w-6 h-6 text-blue-600 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-transform duration-200 ease-in-out" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>

                    <p className="text-gray-600 mb-1">
                      Send us an email anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-sm">
                    <Phone className="w-6 h-6 text-green-600 transform group-hover:scale-110 group-hover:-rotate-[360deg] transition-transform duration-200 ease-in-out" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>

                    <p className="text-gray-600 mb-1">Mon-Fri, 8 AM - 5 PM</p>

                    <a
                      href="tel:+8801689190142"
                      className="text-blue-700 font-medium hover:text-blue-800"
                    >
                      +880 1689 190142
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-sm">
                    <MapPin className="w-6 h-6 text-purple-600 transform group-hover:scale-110 group-hover:rotate-[360deg] transition-transform duration-200 ease-in-out" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h3>

                    <p className="text-gray-600 mb-1">
                      Come say hello at our office
                    </p>

                    <address>
                      <a
                        href="https://maps.app.goo.gl/TZQrDRBGdmNeQPEN7"
                        target="_blank"
                        class="cursor-pointer font-medium text-purple-700 hover:text-purple-800"
                      >
                        Someshpur, Belkichi, Sirajganj, Rajshahi <br />{" "}
                        Bangladesh
                      </a>
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-sm">
                    <Clock className="w-6 h-6 text-orange-600 transform group-hover:scale-110 group-hover:-rotate-[360deg] transition-transform duration-200 ease-in-out" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h3>

                    <div>
                      <p className="text-gray-600 font-medium">
                        Monday - Friday: 08:00 - 17:00
                      </p>

                      <p className="text-gray-600 font-medium">
                        Saturday: 09:00 - 14:00
                      </p>

                      <p className="text-red-700 font-medium">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* info */}

              {/* quick response */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Quick Response
                  </h4>

                  <p className="text-sm text-blue-800">
                    We typically respond to all inquiries within 2-4 hours
                    during business hours.
                  </p>
                </div>
              </div>
              {/* quick response */}
            </div>
          </div>
          {/* contact info */}

          {/* contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* header */}
              <div className="bg-gray-900 px-8 py-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send us a Message
                </h2>

                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>
              {/* header */}

              {/* form */}
              <form className="p-8">
                {/* conditional rendering */}
                {/* <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600 rounded-lg p-4 flex items-center flex-shrink-0" />

                  <p>Something went wrong. Please try again.</p>
                </div> */}
                {/* conditional rendering */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name*
                    </label>

                    <div className="relative">
                      <User className="absolute left-3 top-4 w-5 h-5 text-gray-400" />

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Full Name"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address*
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number*
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-3 top-4 w-5 h-5 text-gray-400" />

                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company*
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-3 top-4 w-5 h-5 text-gray-400" />

                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter Your Company Name"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject*
                    </label>

                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />

                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's Regarding Your Inquiry?"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message*
                    </label>

                    <div className="relative">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        placeholder="Please Provide Details about Your Inquiry"
                        className={` pl-10`}
                      />

                      {/* conditional rendering */}
                      {/* <p className="text-red-600 text-sm flex items-center mt-2">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Something went wrong...
                      </p> */}
                      {/* conditional rendering */}
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-gray-500">
                          Maximum 2000 characters
                        </p>

                        <p className="text-xs text-gray-400">
                          *Required Fields
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full pv-6 py-3 text-white font-medium flex items-center justify-center space-x-2 rounded-lg shadow-sm bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200">
                  <span>Send Message</span>
                  <ArrowRight />
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  By Submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
              {/* form */}
            </div>
          </div>
          {/* contact form */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
