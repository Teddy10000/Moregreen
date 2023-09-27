'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import Modal from './Modal';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  subject: string;
}

interface FormErrors {
  name?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
  subject?: string;
}

const ContactFormSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [success, setSuccess] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    subject:'Client Enquiries',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Perform validation checks
    const errors: FormErrors = {};
    if (!formData.name) {
      errors.name = 'Name is required.';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required.';
    }
    if (!formData.email) {
      errors.email = 'Email address is required.';
    }
    if (!formData.message) {
      errors.message = 'Message is required.';
    }

    if (Object.keys(errors).length === 0) {
      // All fields are populated, proceed to send the message
      try {
        setLoading(true)
        console.log(formData)
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (response.status === 200) {
          // Successful submission
          setSubmitted(true);
          setLoading(false)
          setShowModal(true)
          setSuccess(true)
          setModalMessage('Thank You, Your form has been submitted successfully, and we will call you soon')
          setFormData({
            name: '',
            phoneNumber: '',
            email: '',
            message: '',
            subject:"Enquiries"
          });
        } else {
          // Handle the error here
          console.error('Failed to submit the form.');
          setLoading(false)
        }
      } catch (error) {
        console.error('An error occurred while submitting the form.', error);
        setLoading(false)
      }
    } else {
      // Set the formErrors state to display error messages
      setFormErrors(errors);
      setLoading(false)
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section with Form */}
        <div className="md:w-1/2 md:h-60 md:-mt-32">
          <div className="bg-green-500 p-8 rounded-lg mb-6 relative">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`p-2 border rounded ${formErrors.name && 'border-red-500'}`}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              <div className="flex flex-row gap-7">
                <div className="flex flex-col">
                  <label htmlFor="phonenumber" className="text-sm">Phone Number</label>
                  <input
                    type="text"
                    id="phonenumber"
                    name="phoneNumber"
                    className={`p-2 border rounded ${formErrors.phoneNumber && 'border-red-500'}`}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`p-2 border rounded ${formErrors.email && 'border-red-500'}`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`p-2 border rounded ${formErrors.message && 'border-red-500'}`}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
              </div>
              {loading ? (<div className="spinner-circle"></div>):
              (<button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Send Message
              </button>)}
            </form>
            {
              showModal &&  <Modal showModal={showModal} closeModal={closeModal} modalMessage={modalMessage} success={success} />
            }
          </div>
        </div>
      

        {/* Right Section with Location and Contact Info */}
        <div className="md:w-1/2  md:-mt-32 ">
          <div className="bg-blue-500 p-8 md:h-[471px] rounded-lg relative">
            {/* SVG Stars */}
           

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Info</h2>
            <div className="space-y-4 md:space-y-10 text-white">
              <div className="flex items-center space-x-2">
                <FiMapPin />
                <p className="md:text-xl">123 Main St, City, Country</p>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone />
                <p className="md:text-xl">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail />
                <p className="md:text-xl">contact@example.com</p>
              </div>
              <div className="flex space-x-4 pt-28">
                <a href="google" className="hover:text-yellow-500"><FiFacebook className="md:text-3xl hover:text-yellow-700" /></a>
                <a href="#" className="hover:text-yellow-500"><FiTwitter className="md:text-3xl hover:text-yellow-700" /></a>
                <a href="#" className="hover:text-yellow-500"><FiInstagram className="md:text-3xl hover:text-yellow-700" /></a>
              </div>
            </div>
          </div> 
      
        </div>
   
      </div>
    </div>
  );
};

export default ContactFormSection;