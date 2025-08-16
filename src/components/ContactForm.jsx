import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState(new Set());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailReges = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailReges.test(email);
  };

  const validatePhone = (phone) => {
    const phoneReges = /^(\+?[0-9]{8,16})$/;
    // keep only + and digits, remove everything else
    return phoneReges.test(phone.replace(/[^\d+]/g, ""));
  };

  /* 
      => ^\+? → allows optional + at the start.
      
      => [0-9]{7,15}$ → requires 7 to 15 digits (ITU international standard for phone numbers).
      
      => .replace(/[\s\-\(\)]/g, "") → cleans user input ((123) 456-7890 → 1234567890). 
  */

  // const validatePhone = (phone) => {
  //const cleaned = phone.replace(/[\s\-()\\.]/g, "");
  //return phoneReges.test(cleaned);
  
  //   const phoneReges = /^\+?[1-9][\d]{7,15}$/;
  //   // remove spaces, dashes, parentheses
  //   const cleaned = phone.replace(/[\s\-\(\)]/g, "");

  //   return phoneReges.test(cleaned);
  //   //return phoneReges.test(phone.replace(/[\s\-\(\)]/g, ""));
  // };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.name = "Please enter valid Email Address";
    }

    if (!formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a validate Phone Number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    } else if (formData.company.trim().length < 3) {
      newErrors.company = "Company must be at least 3 characters";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "subject must be at least 5 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    return newErrors;

    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone Number is required";
    // } else if (!validatePhone(formData.phone)) {
    //   newErrors.phone = "Please enter valid Phone Number";
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => new Set(prevTouched).add(name));

    const newErrors = validateForm();
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Stores those errors in state so you can show error messages under each field.
    const newErrors = validateForm();
    setErrors(newErrors);

    // Object.keys(newErrors) returns an array of the field names that failed validation. .length > 0 means: if there’s at least one error.

    // Marks all fields (name, email, phone, subject, message) as touched. This ensures error messages are immediately visible on all fields after the user hits Submit (instead of waiting until they blur each input).
    if (Object.keys(newErrors).length > 0) {
      setTouched(
        new Set(["name", "email", "phone", "company", "subject", "message"])
      );
      return; // stop here if errors exist
    }

    setStatus("loading");

    try {
      // simulate api call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      setErrors({});
      setTouched(new Set());
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }

    console.log(formData);
  };

  const getInputClasses = (fieldname) => {
    const hasError = touched.has(fieldname) && errors[fieldname];

    const baseClasses =
      "w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200";

    if (hasError) {
      return `${baseClasses} border-red-300 focus:border-red-500 focus:ring-red-500`;
    }

    return `${baseClasses} border-gray-300 focus:border-blue-500 focus:ring-blue-500 hover:gray-400`;
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 text-center border transform hover:scale-103 hover:-translate-y-0.5 transition-all duration-300 ease-in-out">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-out" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3 ">
              Message Sent Successfully
            </h2>

            <p className="text-gray-600 mb-8 font-medium leading-relaxed">
              Thank you for contacting us. we'll review your message and get
              back to you within 24 hours
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="bg-blue-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-blue-700 shadow-md group-hover:shadow-lg transform group-hover:scale-102 transition-colors duration-200 ease-in"
            >
              Send Another Massage
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                        className="cursor-pointer font-medium text-purple-700 hover:text-purple-800"
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
              <form className="p-8" onSubmit={handleSubmit}>
                {/* conditional rendering */}
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3 mb-6">
                    <AlertCircle className="w-5 h-5 text-red-600 rounded-lg p-4 flex items-center flex-shrink-0" />
                    <p>Something went wrong. Please try again.</p>
                  </div>
                )}
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
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Full Name"
                        className={`${getInputClasses("name")} pl-10`}
                      />

                      {/* conditional rendering */}
                      {touched.has("name") && errors.name && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name}
                        </p>
                      )}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Email Address"
                        className={`${getInputClasses("email")} pl-10`}
                      />

                      {/* conditional rendering */}
                      {touched.has("email") && errors.email && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
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
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Phone Number"
                        className={`${getInputClasses("phone")} pl-10`}
                      />

                      {/* conditional rendering */}
                      {touched.has("phone") && errors.phone && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
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
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Company Name"
                        className={`${getInputClasses("company")} pl-10`}
                      />

                      {/* conditional rendering */}
                      {touched.has("company") && errors.company && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.company}
                        </p>
                      )}
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
                        value={formData.subject}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="What's Regarding Your Inquiry?"
                        className={`${getInputClasses("subject")} pl-10`}
                      />

                      {/* conditional rendering */}
                      {touched.has("subject") && errors.subject && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.subject}
                        </p>
                      )}
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
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        maxLength={2000}
                        placeholder="Please Provide Details about Your Inquiry"
                        className={`${getInputClasses("message")} resize-none`}
                      />

                      {/* conditional rendering */}
                      {touched.has("message") && errors.message && (
                        <p className="text-red-600 text-sm flex items-center mt-2">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.message}
                        </p>
                      )}
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
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Send Message......</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight />
                    </>
                  )}
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
