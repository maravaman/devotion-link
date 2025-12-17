import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Calendar, Images, BookOpen, Building, Phone } from "lucide-react";

const quickLinks = [
  {
    icon: Heart,
    title: "Online Donation",
    description: "Support the temple",
    path: "/donate",
    color: "from-saffron to-saffron-dark",
  },
  {
    icon: Calendar,
    title: "Festivals",
    description: "Upcoming celebrations",
    path: "/festivals",
    color: "from-gold to-saffron",
  },
  {
    icon: Images,
    title: "Photo Gallery",
    description: "Temple memories",
    path: "/gallery",
    color: "from-maroon to-maroon-light",
  },
  {
    icon: BookOpen,
    title: "Blog",
    description: "Spiritual insights",
    path: "/blog",
    color: "from-saffron-dark to-maroon",
  },
  {
    icon: Building,
    title: "Function Hall",
    description: "Book for events",
    path: "/function-hall",
    color: "from-gold-light to-gold",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "Get in touch",
    path: "/contact",
    color: "from-maroon-light to-saffron",
  },
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quick Access
          </h2>
          <div className="divider-ornament max-w-xs mx-auto">
            <span className="text-saffron">✦</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-temple text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-temple group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground">{link.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
