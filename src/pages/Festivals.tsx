import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const festivals = [
  {
    id: 1,
    name: "Mandala Deeksha (41 Days)",
    date: "October 22 - December 1, 2025",
    month: "Oct-Dec",
    description: "41-day intensive spiritual observance with special poojas, Panchamrutha Abhishekam at 5:00 AM, special decoration, and Maha Deeparadhana.",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=400&h=300&fit=crop",
    rituals: ["Panchamrutha Abhishekam", "Alankarana", "Maha Deeparadhana"],
    highlight: true,
  },
  {
    id: 2,
    name: "Maha Shivaratri",
    date: "February / March",
    month: "Feb/Mar",
    description: "The great night of Lord Shiva with special abhishekam, bhajans, and night-long vigil at Lord Ekambareswara shrine.",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=400&h=300&fit=crop",
    rituals: ["Rudrabhishekam", "Night-long prayers", "Special Pooja"],
  },
  {
    id: 3,
    name: "Vinayaka Chaturthi",
    date: "August / September",
    month: "Aug/Sep",
    description: "Grand celebration for Lord Mahaganapathi with special poojas, decoration, and prasadam distribution.",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=400&h=300&fit=crop",
    rituals: ["Ganapathi Homam", "Special Abhishekam", "Modak offering"],
  },
  {
    id: 4,
    name: "Navaratri",
    date: "September / October",
    month: "Sep/Oct",
    description: "Nine nights dedicated to Goddess Kamakshi with Kumkum Archana and special decorations.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    rituals: ["Kumkum Archana", "Lalitha Sahasranamam", "Chandika Homam"],
  },
  {
    id: 5,
    name: "Deepavali",
    date: "October / November",
    month: "Oct/Nov",
    description: "Festival of lights celebrated with grand lamp lighting ceremonies and special poojas.",
    image: "https://images.unsplash.com/photo-1605102900605-43ddb45ab9b5?w=400&h=300&fit=crop",
    rituals: ["Lakshmi Pooja", "Deep Aradhana", "Prasadam Distribution"],
  },
  {
    id: 6,
    name: "Karthigai Deepam",
    date: "November / December",
    month: "Nov/Dec",
    description: "The festival of lamps with grand Deeparadhana and special abhishekam for Lord Ekambareswara.",
    image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=400&h=300&fit=crop",
    rituals: ["Mahadeepam", "108 Lamp Pooja", "Special Abhishekam"],
  },
];

const Festivals = () => {
  return (
    <Layout>
      <PageHeader
        title="Festivals & Celebrations"
        subtitle="Experience the divine joy of our sacred celebrations"
        image="https://images.unsplash.com/photo-1605102900605-43ddb45ab9b5?w=1200&h=400&fit=crop"
      />

      {/* Upcoming Mandala Highlight */}
      <section className="py-8 bg-gradient-to-r from-saffron/20 to-gold/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upcoming Special Event</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Mandala Deeksha 2025
            </h2>
            <p className="text-muted-foreground">
              41-Day Special Pooja begins <strong className="text-foreground">October 22, 2025</strong> | Panchamrutha Abhishekam: <strong className="text-foreground">₹501/-</strong>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Annual Festival Calendar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us throughout the year in celebrating these auspicious occasions at Sri Ekambareswara Temple
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card-temple overflow-hidden group ${festival.highlight ? 'ring-2 ring-primary' : ''}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={festival.image}
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-saffron text-primary-foreground text-sm font-medium rounded-full">
                      {festival.month}
                    </span>
                    {festival.highlight && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        Special
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {festival.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {festival.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {festival.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {festival.rituals.map((ritual) => (
                      <span
                        key={ritual}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {ritual}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Schedule Note */}
      <section className="py-12 bg-gradient-to-r from-saffron/10 to-maroon/10">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-10 h-10 mx-auto text-primary mb-4" />
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Special Festival Timings
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            During major festivals and Mandala period, the temple opens at 5:00 AM for special Panchamrutha Abhishekam. Please check our announcements for specific timings.
          </p>
          <a
            href="tel:+917207318809"
            className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
          >
            📞 Contact: +91 72073 18809
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;
