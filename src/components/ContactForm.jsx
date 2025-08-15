import { Clock, Mail, MapPin, Phone } from "lucide-react";

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
            </div>
          </div>
          {/* contact form */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
