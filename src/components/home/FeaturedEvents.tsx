import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Maha Shivaratri",
    date: "March 8, 2024",
    time: "6:00 PM onwards",
    description: "Grand celebration with special abhishekam, bhajans, and night-long prayers.",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Ram Navami",
    date: "April 17, 2024",
    time: "5:00 AM - 9:00 PM",
    description: "Celebrate the birth of Lord Rama with special poojas and prasadam distribution.",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Hanuman Jayanti",
    date: "April 23, 2024",
    time: "4:00 AM - 10:00 PM",
    description: "Special Sundarkand path and Hanuman Chalisa recitation.",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=400&h=300&fit=crop",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Festivals & Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating divine occasions and participate in sacred rituals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-temple overflow-hidden group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-primary-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <Link to={`/festivals/${event.id}`}>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/festivals">
            <Button variant="temple" size="lg">
              View All Festivals
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
