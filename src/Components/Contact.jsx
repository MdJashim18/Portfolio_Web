import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaClock, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false); // এড করেছি
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (formData.message.length < 20) {
            toast.error('Message should be at least 20 characters long', {
                position: "top-right",
                autoClose: 3000,
                className: 'bg-error text-white',
            });
            return;
        }
        
        setIsSubmitting(true);
        
        emailjs.sendForm(
            "service_5kfgwdr", 
            "template_9rhqw5h", 
            form.current, 
            "SQk9NXkgsMJd-mc3e"
        ).then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                toast.success('Message sent successfully! I\'ll get back to you soon.', {
                    position: "top-right",
                    autoClose: 3000,
                    className: 'bg-success text-white',
                });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            },
            (error) => {
                console.error('Email sending failed:', error.text);
                toast.error('Failed to send message. Please try again or contact me directly.', {
                    position: "top-right",
                    autoClose: 5000,
                    className: 'bg-error text-white',
                });
            }
        ).finally(() => {
            setIsSubmitting(false);
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <FaEnvelope className="text-lg" />,
            title: 'Email',
            value: 'mdjashimuddinjnn22990@gmail.com',
            link: 'mailto:mdjashimuddinjnn22990@gmail.com', // ঠিক করেছি
            description: 'Send me an email anytime'
        },
        {
            icon: <FaPhone className="text-lg" />,
            title: 'Phone',
            value: '+880 1992-578305',
            link: 'tel:+8801992578305', // ঠিক করেছি
            description: 'Mon-Fri, 9AM-6PM'
        },
        {
            icon: <FaWhatsapp className="text-lg" />,
            title: 'WhatsApp',
            value: '+880 1992-578305',
            link: 'https://wa.me/8801992578305', // ঠিক করেছি
            description: 'Instant messaging'
        },
        {
            icon: <FaMapMarkerAlt className="text-lg" />,
            title: 'Location',
            value: 'Chittagong, Bangladesh',
            link: 'https://maps.google.com/?q=Chittagong,Bangladesh', // ঠিক করেছি
            description: 'Available for remote work'
        },
        {
            icon: <FaClock className="text-lg" />,
            title: 'Response Time',
            value: 'Within 24 hours',
            link: null,
            description: 'Usually much faster'
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/in/mohammadjashimuddinrubel/',
            color: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            link: 'https://github.com/MdJashim18',
            color: 'bg-gray-800 hover:bg-gray-900'
        },
        {
            icon: <FaFacebook />,
            label: 'Facebook',
            link: 'https://www.facebook.com/share/1BEhor8qZ6/',
            color: 'bg-blue-600 hover:bg-blue-700' // ঠিক করেছি
        }
    ];

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="section-padding bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden mb-10"
        >
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

            <ToastContainer />
            <div className="container mx-auto relative z-10">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-12 h-1 bg-primary"></div>
                        <span className="text-primary font-semibold tracking-wider">CONTACT</span>
                        <div className="w-12 h-1 bg-primary"></div>
                    </div>
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Let's Build Something
                        <span className="block mt-2">Amazing Together</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                        Send me a message and I'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                   
                    <div className={`lg:col-span-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        }`}>
                        <div className="card glass shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                            <div className="card-body p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                                        <FaEnvelope className="text-2xl text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Contact Details</h3>
                                </div>

                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div
                                            key={index}
                                            onMouseEnter={() => setHoveredCard(index)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            className={`p-4 rounded-xl border border-base-300 transition-all duration-300 ${hoveredCard === index ? 'bg-primary/5 border-primary/20 shadow-lg' : 'hover:bg-base-300/50'
                                                }`}
                                        >
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-4"
                                                >
                                                    <div className={`p-3 rounded-lg transition-all duration-300 ${hoveredCard === index
                                                        ? 'bg-primary text-white'
                                                        : 'bg-base-200 text-primary'
                                                        }`}>
                                                        {info.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg">{info.title}</h4>
                                                        <p className="text-gray-600 hover:text-primary transition-colors">
                                                            {info.value}
                                                        </p>
                                                        {info.description && (
                                                            <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                                                        )}
                                                    </div>
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 rounded-lg bg-base-200 text-primary">
                                                        {info.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-lg">{info.title}</h4>
                                                        <p className="text-gray-600">{info.value}</p>
                                                        {info.description && (
                                                            <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-8 border-t border-base-300">
                                    <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`btn btn-circle ${social.color} text-white border-0 transform transition-all duration-300 hover:scale-110 hover:rotate-12`}
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold text-lg mb-4">Currently Available For</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge badge-lg badge-primary badge-outline hover:badge-primary hover:text-white transition-all duration-300">
                                            Full-time
                                        </span>
                                        <span className="badge badge-lg badge-secondary badge-outline hover:badge-secondary hover:text-white transition-all duration-300">
                                            Contract Work
                                        </span>
                                        <span className="badge badge-lg badge-accent badge-outline hover:badge-accent hover:text-white transition-all duration-300">
                                            Freelance Projects
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`lg:col-span-2 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <div className="card glass shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 h-full">
                            <div className="card-body p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10">
                                        <FaPaperPlane className="text-2xl text-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Send a Message</h3>
                                </div>

                                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">Your Name *</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name" 
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="input input-bordered input-lg focus:input-primary focus:border-2 transition-all duration-300"
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold text-lg">Email Address *</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="input input-bordered input-lg focus:input-primary focus:border-2 transition-all duration-300"
                                                required
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Subject *</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="input input-bordered input-lg focus:input-primary focus:border-2 transition-all duration-300"
                                            required
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-lg">Your Message *</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="textarea textarea-bordered textarea-lg h-48 focus:textarea-primary focus:border-2 transition-all duration-300"
                                            required
                                            minLength="20"
                                            placeholder="Tell me about your project, timeline, and budget..."
                                        ></textarea>
                                        <label className="label">
                                            <span className="label-text-alt text-gray-500">
                                                {formData.message.length}/20 characters (minimum 20 required)
                                            </span>
                                        </label>
                                    </div>

                                    <div className="form-control mt-8">
                                        <button
                                            type="submit"
                                            className={`btn btn-lg btn-primary gap-3 transform transition-all duration-300 hover:scale-[1.02] ${isSubmitting ? 'loading' : ''
                                                }`}
                                            disabled={isSubmitting || formData.message.length < 20}
                                        >
                                            {!isSubmitting && <FaPaperPlane className="text-xl" />}
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                        <p className="text-center text-gray-500 mt-4 text-sm">
                                            I typically respond within 24 hours
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;