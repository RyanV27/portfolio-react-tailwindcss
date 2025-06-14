import { Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser"; 

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

     // Sending an email with EmailJS
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(() => {
            const serviceId = import.meta.env.VITE_SERVICE_ID;
            const templateId = import.meta.env.VITE_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_PUBLIC_KEY;

            const templateParams = {
                from_name: userName,
                reply_to_email: userEmail,
                message: userMessage,
                sent_time: timestamp
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey).then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    toast({
                        title: "Message sent!", 
                        description: "Thank you for your message. I'll get back to you as soon as I can."
                    });

                    setUserName('');
                    setUserEmail('');
                    setUserMessage('');
                    setTimestamp('');
                },
                (error) => {
                    console.log('Error sending email!', error);

                    toast({
                        title: "Error!", 
                        description: "Failed to send message. Please try again."
                    });
                }
            );

            setIsSubmitting(false);
        }, 1500)
    }
    
    return(
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new opportunities or collaborating on new preojcts. Feel free to reach out, I'd love to connect!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                        {" "}
                        Contact Information
                        </h3>

                        {/* <div className="space-y-6 justify-center"> */}
                        <div className="space-y-6 flex flex-col items-start">
                            <div className="flex items-start space-x-4 text-left">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:rsvargh2@asu.edu"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        rsvargh2@asu.edu
                                    </a>
                                </div>
                            </div>
                        
                            <div className="flex items-start space-x-4 text-left">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Tempe, AZ, United States
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a 
                                    href="https://linkedin.com/in/ryan-sam-varghese"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"    
                                >
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-card p-8 rounded-lg shadow-xs"
                        // onSubmit={handleSubmit}
                    >
                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                            <form 
                                className="space-y-6"
                                onSubmit={handleSubmit}    
                            >
                                <div>
                                    <label 
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Name
                                    </label>
                                    <input 
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Ryan Sam Varghese"
                                    />
                                </div>

                                <div>
                                    <label 
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Email
                                    </label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="rsvargh2@asu.edu"
                                    />
                                </div>

                                <div>
                                    <label 
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        {" "}
                                        Your Message
                                    </label>
                                    <input 
                                        id="message"
                                        name="message"
                                        value={userMessage}
                                        onChange={(e) => setUserMessage(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Hi, I'd like to talk about..."
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={() => setTimestamp(new Date().toLocaleString())}
                                    className={cn(
                                        "cosmic-button w-full flex items-center justify-center gap-2",
                                    )}
                                >
                                    {isSubmitting ? "Sending" : "Send Message"}
                                    <Send size={16}/>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
      </div>
        </section>
    )
}