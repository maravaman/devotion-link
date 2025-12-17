import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const festivals = [
  {
    id: 1,
    name: "Maha Shivaratri",
    date: "March 8, 2024",
    month: "March",
    description: "The great night of Lord Shiva. Devotees observe fasting and night-long vigil with special abhishekam and bhajans.",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=400&h=300&fit=crop",
    rituals: ["Rudrabhishekam", "Night-long prayers", "Pradosham Pooja"],
  },
  {
    id: 2,
    name: "Ram Navami",
    date: "April 17, 2024",
    month: "April",
    description: "Celebrating the birth of Lord Rama with special poojas, bhajans, and prasadam distribution.",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400&h=300&fit=crop",
    rituals: ["Rama Charitra Path", "Sundarkand", "Anna Danam"],
  },
  {
    id: 3,
    name: "Hanuman Jayanti",
    date: "April 23, 2024",
    month: "April",
    description: "Birthday celebration of Lord Hanuman with Sundarkand recitation and special decorations.",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=400&h=300&fit=crop",
    rituals: ["Hanuman Chalisa", "Oil offering", "Sindoor Pooja"],
  },
  {
    id: 4,
    name: "Navaratri",
    date: "October 3-12, 2024",
    month: "October",
    description: "Nine nights dedicated to Goddess Durga with special Kumkum Archana and Dandiya celebrations.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    rituals: ["Kumkum Archana", "Durga Saptashati", "Dandiya nights"],
  },
  {
    id: 5,
    name: "Deepavali",
    date: "November 1, 2024",
    month: "November",
    description: "Festival of lights celebrated with grand lamp lighting ceremonies and fireworks.",
    image: "https://images.unsplash.com/photo-1605102900605-43ddb45ab9b5?w=400&h=300&fit=crop",
    rituals: ["Lakshmi Pooja", "1008 Diyas", "Prasadam Distribution"],
  },
  {
    id: 6,
    name: "Karthigai Deepam",
    date: "December 15, 2024",
    month: "December",
    description: "The festival of lamps with the lighting of the sacred Mahadeepam on the temple gopuram.",
    image: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=400&h=300&fit=crop",
    rituals: ["Mahadeepam", "108 Lamp Pooja", "Annabhishekam"],
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
              Join us throughout the year in celebrating these auspicious occasions with devotion and joy
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
                className="card-temple overflow-hidden group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={festival.image}
                    alt={festival.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-saffron text-primary-foreground text-sm font-medium rounded-full">
                      {festival.month}
                    </span>
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            During major festivals, the temple remains open for extended hours. Please check our announcements for specific timings and special darshan arrangements.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Festivals;
