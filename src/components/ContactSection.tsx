import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Globe, Instagram } from 'lucide-react';
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
    <section id="contact" className="py-16 bg-gradient-to-br from-brand-blue to-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-8 text-white/90">
              Have questions about our products or services? Contact us today for a consultation or to request a quote.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-brand-teal flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl">Phone</h3>
                  <a href="tel:+919910467633" className="text-white/90 hover:text-white hover:underline transition-colors">
                    +91 99104 67633
                  </a>
                  <span className="mx-2">||</span>
                  <a href="tel:+917627050482" className="text-white/90 hover:text-white hover:underline transition-colors">
                    +91 76270 50482
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-brand-teal flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl">Email</h3>
                  <a href="mailto:virgirdtpl@gmail.com" className="text-white/90 hover:text-white hover:underline transition-colors">
                    virgirdtpl@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="mr-4 h-6 w-6 text-brand-teal flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl">Website</h3>
                  <a href="https://www.virgir.in" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white hover:underline transition-colors">
                    www.virgir.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Instagram className="mr-4 h-6 w-6 text-brand-teal flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-xl">Social Media</h3>
                  <span className="text-white/90">@virgir</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img
                src="/Contact-us.png"
                alt="Virgir Social QR Code"
                className="bg-white p-2 rounded-lg shadow max-w-[160px] w-full h-auto"
              />
            </div>
          </div>
          
          <div className="bg-white text-brand-navy p-6 rounded-lg shadow-lg">
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
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
