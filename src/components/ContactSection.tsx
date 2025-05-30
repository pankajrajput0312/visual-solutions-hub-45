import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Globe, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-brand-blue to-brand-navy dark:from-dark-bg dark:to-dark-surface text-white dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-8 text-white/90 dark:text-white transition-colors duration-300">
              Have questions about our products or services? Contact us today for a consultation or to request a quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-brand-teal dark:text-white flex-shrink-0 transition-colors duration-300" />
                <div>
                  <h3 className="font-medium text-xl">Phone</h3>
                  <a href="tel:+919910467633" className="text-white/90 dark:text-white hover:text-white dark:hover:text-gray-300 hover:underline transition-colors">
                    +91 99104 67633
                  </a>
                  <span className="mx-2">||</span>
                  <a href="tel:+917627050482" className="text-white/90 dark:text-white hover:text-white dark:hover:text-gray-300 hover:underline transition-colors">
                    +91 76270 50482
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-brand-teal dark:text-white flex-shrink-0 transition-colors duration-300" />
                <div>
                  <h3 className="font-medium text-xl">Email</h3>
                  <a href="mailto:virgirdtpl@gmail.com" className="text-white/90 dark:text-white hover:text-white dark:hover:text-gray-300 hover:underline transition-colors">
                    virgirdtpl@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="mr-4 h-6 w-6 text-brand-teal dark:text-white flex-shrink-0 transition-colors duration-300" />
                <div>
                  <h3 className="font-medium text-xl">Website</h3>
                  <a href="https://www.virgir.in" target="_blank" rel="noopener noreferrer" className="text-white/90 dark:text-white hover:text-white dark:hover:text-gray-300 hover:underline transition-colors">
                    www.virgir.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="mr-4 h-6 w-6 text-brand-teal dark:text-white flex-shrink-0 transition-colors duration-300" />
                <div>
                  <h3 className="font-medium text-xl">Social Media</h3>
                  <span className="text-white/90 dark:text-white transition-colors duration-300">@virgir</span>
                </div>
              </div>
              
              {/* WhatsApp Contact */}
              <div>
                <div className="flex items-center mb-2">
                  <MessageCircle className="mr-4 h-6 w-6 text-brand-teal dark:text-white flex-shrink-0 transition-colors duration-300" />
                  <h3 className="font-medium text-xl">WhatsApp</h3>
                </div>
                <div className="flex flex-col items-start ml-10">
                  <a 
                    href="https://wa.me/919910467633?text=Hi%20team%2C%20I%20have%20a%20question%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl mb-4"
                  >
                    Message Us on WhatsApp
                  </a>
                  <img
                    src="/Contact-us.png"
                    alt="WhatsApp QR Code"
                    className="w-32 h-32 bg-white p-1 rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="bg-white dark:bg-dark-card text-brand-navy dark:text-white p-6 rounded-lg shadow-lg dark:shadow-xl border border-gray-100 dark:border-dark-border transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-surface text-brand-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-white transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-surface text-brand-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-white transition-colors duration-300"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-surface text-brand-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-white transition-colors duration-300"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-surface text-brand-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue dark:focus:ring-white transition-colors duration-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex justify-center items-center"
              >
                Send Message <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
