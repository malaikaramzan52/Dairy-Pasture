import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';

export default function Contact({ preselectedInquiry = 'General Inquiry' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    inquiryType: preselectedInquiry || 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inquiryOptions = [
    'General Inquiry',
    'Farm Information',
    'Dairy Products',
    'Processing and Packaging',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone Number is required.';
    } else if (!/^(\+92|0)?3\d{2}-?\d{7}$/.test(formData.phoneNumber.trim().replace(/\s+/g, ''))) {
      // Gentle validation for Pakistani phone numbers
      if (formData.phoneNumber.trim().length < 8) {
        errs.phoneNumber = 'Please enter a valid phone number.';
      }
    }
    if (formData.emailAddress.trim()) {
      if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
        errs.emailAddress = 'Please enter a valid email address.';
      }
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  const handleWhatsAppForward = () => {
    const msg = `Assalamualaikum Dairy & Pasture,%0A%0A*Name:* ${encodeURIComponent(formData.fullName || 'Customer')}%0A*Phone:* ${encodeURIComponent(formData.phoneNumber || 'N/A')}%0A*Inquiry:* ${encodeURIComponent(formData.inquiryType)}%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to inquire about Dairy & Pasture.')}`;
    window.open(`https://wa.me/923015099459?text=${msg}`, '_blank');
  };

  const whatsappDirectUrl = `https://wa.me/923015099459?text=${encodeURIComponent(
    'Assalamualaikum, I would like to know more about Dairy & Pasture and your dairy products.'
  )}`;

  return (
    <div className="w-full bg-[#F8FAF7]">
      {/* SECTION 1: CONTACT HERO WITH BACKGROUND IMAGE */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 border-b border-[#DCE5DD]">
        {/* Background Image */}
        <img
          src="/images/hero-cows.jpg"
          alt="Dairy & Pasture farm contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay with Opacity for Clear Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07190F]/90 via-[#07190F]/75 to-[#07190F]/50 sm:to-[#07190F]/40" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#5EE59D] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#5EE59D]" />
              <span>WE ARE HERE TO HELP</span>
            </div>

            <h1 className="font-heading text-[34px] sm:text-[46px] lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] drop-shadow-sm">
              Get in Touch with Dairy & Pasture
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#E0EBE2] leading-[1.7] max-w-xl font-normal drop-shadow-sm">
              Have a question about our farm, dairy products, or processing practices? We would be happy to hear from you.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:03015099459"
                className="bg-[#236B45] hover:bg-[#1b5336] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>0301-5099459</span>
              </a>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION CARDS */}
      <section className="py-12 bg-[#F8FAF7] border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Phone */}
            <div className="bg-white rounded-[16px] p-8 border border-[#DCE5DD] shadow-xs hover:border-[#236B45] transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-5 text-[#236B45]">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-1">
                Call Us
              </h3>
              <p className="text-xs text-[#657168] mb-4">
                Direct phone inquiries for orders & questions
              </p>
              <a
                href="tel:03015099459"
                className="font-heading font-bold text-lg text-[#236B45] hover:text-[#153F2C] hover:underline"
              >
                0301-5099459
              </a>
            </div>

            {/* Card 2: Location */}
            <div className="bg-white rounded-[16px] p-8 border border-[#DCE5DD] shadow-xs hover:border-[#236B45] transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-5 text-[#236B45]">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-1">
                Our Location
              </h3>
              <p className="text-xs text-[#657168] mb-4">
                Farm operations and supply in Punjab
              </p>
              <span className="font-heading font-bold text-lg text-[#153F2C]">
                Lahore, Pakistan
              </span>
            </div>

            {/* Card 3: Instagram */}
            <div className="bg-white rounded-[16px] p-8 border border-[#DCE5DD] shadow-xs hover:border-[#236B45] transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#E9F3E9] flex items-center justify-center mb-5 text-[#236B45]">
                <InstagramIcon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-[#153F2C] mb-1">
                Instagram Profile
              </h3>
              <p className="text-xs text-[#657168] mb-4">
                Follow updates, farm videos & stories
              </p>
              <a
                href="https://www.instagram.com/dairyandpasture?cplk=MXgwcnV6ZmMzaTR0cg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-lg text-[#236B45] hover:text-[#153F2C] hover:underline inline-flex items-center gap-1.5"
              >
                <span>@dairyandpasture</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: CONTACT FORM & LOCATION PLACEHOLDER */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAF7] border border-[#DCE5DD] rounded-[20px] p-6 sm:p-10 shadow-xs">
                <div className="mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                    SEND A MESSAGE
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#153F2C] mt-2">
                    Inquire Online
                  </h2>
                  <p className="text-sm text-[#657168] mt-1">
                    Fill out the form below and we will follow up with you.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white border-2 border-[#236B45] rounded-[16px] p-8 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#E9F3E9] text-[#236B45] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#153F2C]">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-sm text-[#657168] max-w-md mx-auto leading-relaxed">
                      Your inquiry details have been received on this demonstration portal. For immediate response or delivery scheduling, you can also forward this directly to our official WhatsApp.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                      <button
                        onClick={handleWhatsAppForward}
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm px-6 py-3 rounded-[8px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp (+92 301 5099459)</span>
                      </button>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            phoneNumber: '',
                            emailAddress: '',
                            inquiryType: 'General Inquiry',
                            message: ''
                          });
                        }}
                        className="bg-white hover:bg-gray-50 text-[#153F2C] border border-[#DCE5DD] font-semibold text-sm px-5 py-3 rounded-[8px] transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-[#153F2C] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Muhammad Ali"
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
                          }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-semibold text-[#153F2C] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="e.g. 0300-1234567"
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
                          }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address (Optional) */}
                    <div>
                      <label htmlFor="emailAddress" className="block text-sm font-semibold text-[#153F2C] mb-1.5">
                        Email Address <span className="text-xs text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="e.g. yourname@example.com"
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${errors.emailAddress ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
                          }`}
                      />
                      {errors.emailAddress && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-semibold text-[#153F2C] mb-1.5">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] bg-white border border-[#DCE5DD] text-sm text-[#202820] focus:outline-none focus:border-[#236B45] transition-colors cursor-pointer"
                      >
                        {inquiryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#153F2C] mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your questions about milk availability, delivery, or farm practices..."
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
                          }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#236B45] hover:bg-[#153F2C] text-white font-semibold text-[15px] py-3.5 px-6 rounded-[8px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                      >
                        {submitting ? (
                          <span>Processing...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[12px] text-[#657168] text-center pt-1">
                      We treat your contact information respectfully and never send unsolicited spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Location & Map Placeholder Side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8FAF7] border border-[#DCE5DD] rounded-[20px] p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3 py-1 rounded-md">
                    LOCATION OVERVIEW
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-[#153F2C] mt-2">
                    Visit or Contact Us in Lahore
                  </h3>
                  <p className="text-sm text-[#657168] mt-1 leading-relaxed">
                    Our farm operations and dairy supply are based in Lahore, Punjab. We serve local families seeking wholesome, farm-fresh cow and goat milk.
                  </p>
                </div>

                {/* Real Lahore Google Map with Logo Overlay */}
                <div className="rounded-[16px] overflow-hidden border border-[#DCE5DD] bg-white relative aspect-[4/3] shadow-md group">
                  {/* Google Map of Lahore */}
                  <iframe
                    title="Lahore Region Map"
                    src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter contrast-[1.02]"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>

                  {/* Floating Logo & Lahore Region Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#DCE5DD] shadow-md flex items-center gap-2">
                      <img
                        src="/Logo.jpg"
                        alt="Dairy & Pasture Logo"
                        className="w-6 h-6 rounded-full object-cover border border-[#236B45]"
                      />
                      <span className="font-heading font-bold text-xs text-[#153F2C]">
                        Dairy & Pasture
                      </span>
                    </div>

                    <span className="bg-[#153F2C] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      Lahore Region
                    </span>
                  </div>

                  {/* Bottom Info Strip */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-[10px] border border-[#DCE5DD] shadow-md text-[11px] text-[#153F2C] text-center font-medium pointer-events-none">
                    📍 Lahore, Punjab, Pakistan — Serving Farm Fresh Milk Daily
                  </div>
                </div>

                {/* Direct Help Callout */}
                <div className="p-4 rounded-[12px] bg-white border border-[#DCE5DD] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#153F2C]">
                    <Clock className="w-4 h-4 text-[#236B45]" />
                    <span>Inquiry Response</span>
                  </div>
                  <p className="text-xs text-[#657168] leading-relaxed">
                    Messages received through phone or WhatsApp are promptly reviewed by our Lahore team during standard morning and afternoon farm shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHATSAPP CONTACT BANNER (STYLED LIKE CTABANNER) */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-[1360px] mx-auto">
        <section className="relative overflow-hidden bg-[#0C3522] text-white rounded-[28px] sm:rounded-[40px] border border-[#1C5438] shadow-xl">
          {/* Botanical Leaves - Left Side */}
          <div className="absolute left-0 top-0 bottom-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none overflow-hidden z-0">
            <svg
              viewBox="0 0 240 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover -translate-x-6 sm:-translate-x-4 opacity-75"
            >
              <path d="M-20 180 C30 150 70 90 35 20 C5 70 -5 130 -20 180 Z" fill="#27784E" />
              <path d="M-15 175 C18 135 48 85 30 25" stroke="#1B5537" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 190 C60 170 120 120 100 40 C60 80 20 140 0 190 Z" fill="#328D5E" />
              <path d="M5 185 C45 155 85 110 95 45" stroke="#1F613E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 200 C80 200 150 160 155 90 C110 115 55 160 20 200 Z" fill="#2A7E53" />
              <path d="M25 198 C70 185 120 155 150 95" stroke="#1B5537" strokeWidth="2" strokeLinecap="round" />
              <path d="M-30 110 C10 100 50 60 30 0 C0 30 -20 70 -30 110 Z" fill="#1E5C3B" opacity="0.8" />
            </svg>
          </div>

          {/* Botanical Leaves - Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-60 md:w-80 pointer-events-none select-none overflow-hidden z-0">
            <svg
              viewBox="0 0 240 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover translate-x-6 sm:translate-x-4 scale-x-[-1] opacity-75"
            >
              <path d="M-20 180 C30 150 70 90 35 20 C5 70 -5 130 -20 180 Z" fill="#27784E" />
              <path d="M-15 175 C18 135 48 85 30 25" stroke="#1B5537" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 190 C60 170 120 120 100 40 C60 80 20 140 0 190 Z" fill="#328D5E" />
              <path d="M5 185 C45 155 85 110 95 45" stroke="#1F613E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 200 C80 200 150 160 155 90 C110 115 55 160 20 200 Z" fill="#2A7E53" />
              <path d="M25 198 C70 185 120 155 150 95" stroke="#1B5537" strokeWidth="2" strokeLinecap="round" />
              <path d="M-30 110 C10 100 50 60 30 0 C0 30 -20 70 -30 110 Z" fill="#1E5C3B" opacity="0.8" />
            </svg>
          </div>

          {/* Content Container with increased padding */}
          <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
              {/* Left Side */}
              <div className="space-y-3.5 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-[#5EE59D] text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/15 backdrop-blur-sm">
                  <MessageCircle className="w-3.5 h-3.5 text-[#5EE59D]" />
                  <span>PREFER INSTANT CHAT? — LAHORE</span>
                </div>

                <h2 className="font-heading text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white tracking-tight leading-[1.2]">
                  Connect Directly on WhatsApp
                </h2>

                <p className="text-[15px] sm:text-[17px] text-[#D3E4D7] leading-relaxed font-normal">
                  Send us a direct message on WhatsApp with your questions about fresh cow milk, goat milk, current batch availability, or farm visits.
                </p>
              </div>

              {/* Right Side Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 shrink-0">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#F2F7F3] text-[#0C3522] text-[15px] font-semibold px-7 sm:px-8 py-3.5 rounded-[8px] transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="tel:03015099459"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white text-[15px] font-semibold px-7 sm:px-8 py-3.5 rounded-[8px] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>0301-5099459</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
