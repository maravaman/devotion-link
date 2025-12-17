import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, CheckCircle, XCircle, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const hallFeatures = [
  "Air-conditioned hall with 500 seating capacity",
  "Modern audio-visual equipment",
  "Traditional decoration options",
  "Catering services available",
  "Parking for 100 vehicles",
  "Backup power supply",
];

// Sample availability data
const availabilityData = [
  { date: "2024-03-15", status: "booked" },
  { date: "2024-03-16", status: "available" },
  { date: "2024-03-17", status: "available" },
  { date: "2024-03-18", status: "booked" },
  { date: "2024-03-19", status: "available" },
  { date: "2024-03-20", status: "booked" },
  { date: "2024-03-21", status: "available" },
];

const FunctionHall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted!",
      description: "Our team will contact you within 24 hours to confirm your booking.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      eventType: "",
      guests: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader
        title="Function Hall"
        subtitle="Book our hall for your special occasions"
        image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Hall Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Sri Temple Function Hall
              </h2>
              <p className="text-muted-foreground mb-6">
                Our spacious function hall is the perfect venue for your religious ceremonies, weddings, receptions, and community events. Located within the sacred temple premises, your special occasions are blessed with divine presence.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {hallFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop"
                alt="Function Hall"
                className="rounded-xl shadow-temple-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-saffron to-gold p-4 rounded-xl shadow-temple">
                <p className="text-primary-foreground font-display text-lg font-bold">500+</p>
                <p className="text-primary-foreground/80 text-sm">Seating Capacity</p>
              </div>
            </div>
          </motion.div>

          {/* Availability Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              <Calendar className="w-6 h-6 inline-block mr-2 text-primary" />
              Check Availability
            </h3>
            <div className="card-temple p-8">
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 rounded bg-primary" />
                  <span className="text-muted-foreground">Available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 rounded bg-destructive/50" />
                  <span className="text-muted-foreground">Booked</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2 max-w-2xl mx-auto">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
                {[...Array(31)].map((_, i) => {
                  const day = i + 1;
                  const dateStr = `2024-03-${day.toString().padStart(2, "0")}`;
                  const availability = availabilityData.find((d) => d.date === dateStr);
                  const isBooked = availability?.status === "booked";
                  
                  return (
                    <div
                      key={i}
                      className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-colors ${
                        isBooked
                          ? "bg-destructive/20 text-destructive cursor-not-allowed"
                          : "bg-primary/10 text-primary hover:bg-primary/20 cursor-pointer"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-4">
                * Calendar shows March 2024. Contact us for other months.
              </p>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              <Building className="w-6 h-6 inline-block mr-2 text-primary" />
              Submit Booking Inquiry
            </h3>
            <div className="card-temple p-8 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
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
                      required
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

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate">Preferred Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Expected Guests</Label>
                    <Input
                      id="guests"
                      type="number"
                      placeholder="Number of guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="eventType">Event Type</Label>
                  <select
                    id="eventType"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="mt-1 w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="reception">Reception</option>
                    <option value="upanayanam">Upanayanam</option>
                    <option value="naming">Naming Ceremony</option>
                    <option value="birthday">Birthday</option>
                    <option value="meeting">Community Meeting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event and any special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <Button type="submit" variant="temple" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FunctionHall;
