import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="card-temple p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="temple" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-temple p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+917207318809" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    +91 72073 18809
                  </a>
                  <p className="text-xs text-muted-foreground mt-2">
                    (BHIM, GPay, PhonePe, Paytm accepted)
                  </p>
                </div>

                <div className="card-temple p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Bondada Veedhi,<br />
                    Vizianagaram – 535001,<br />
                    Andhra Pradesh, India
                  </p>
                </div>

                <div className="card-temple p-6 sm:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-dark to-maroon flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Temple Timings</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Morning</p>
                      <p>5:30 AM - 12:30 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Evening</p>
                      <p>4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * During Mandala period, special timings apply with Abhishekam at 5:00 AM
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="card-temple overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.123456789!2d83.3956!3d18.1066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzIzLjgiTiA4M8KwMjMnNDQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Ekambareswara Temple Location - Vizianagaram"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
