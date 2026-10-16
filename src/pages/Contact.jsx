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
  Sparkles
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
      {/* SECTION 1: CONTACT HERO */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#DCE5DD]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#236B45] bg-[#E9F3E9] px-3.5 py-1.5 rounded-full border border-[#236B45]/20">
              WE ARE HERE TO HELP
            </span>
            <h1 className="font-heading text-[32px] sm:text-[46px] lg:text-[52px] font-bold text-[#153F2C] tracking-tight leading-[1.2]">
              Get in Touch with Dairy & Pasture
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#657168] leading-relaxed">
              Have a question about our farm, dairy products, or processing practices? We would be happy to hear from you.
            </p>
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
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
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
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.phoneNumber ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
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
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors ${
                          errors.emailAddress ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
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
                        className={`w-full px-4 py-3 rounded-[8px] bg-white border text-sm text-[#202820] placeholder-gray-400 focus:outline-none transition-colors resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#DCE5DD] focus:border-[#236B45]'
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

      {/* SECTION 5: WHATSAPP CONTACT BANNER */}
      <section className="py-16 bg-[#E9F3E9] border-b border-[#236B45]/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[20px] border border-[#236B45]/30 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#236B45]">
                PREFER INSTANT CHAT?
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#153F2C]">
                Connect Directly on WhatsApp
              </h2>
              <p className="text-sm text-[#657168] leading-relaxed">
                Send us a direct message on WhatsApp with your questions about fresh cow milk, goat milk, current batch availability, or farm visits.
              </p>
            </div>

            <div>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base px-8 py-4 rounded-[8px] transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <MessageCircle className="w-6 h-6 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp (+92 301 5099459)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
