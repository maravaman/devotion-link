import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnnouncementBanner from "@/components/home/AnnouncementBanner";
import QuickLinks from "@/components/home/QuickLinks";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import LatestBlog from "@/components/home/LatestBlog";
import DailyQuote from "@/components/home/DailyQuote";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={templeHero} alt="Temple" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/20 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-saffron/20 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20"
            >
              <span className="text-5xl">🕉</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gold">Sri Temple</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light max-w-2xl mx-auto">
              A sacred sanctuary of peace, devotion, and divine blessings. Experience the eternal grace of the divine.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/about/temple">
                <Button variant="gold" size="xl" className="group">
                  Explore Temple
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Announcements */}
      <AnnouncementBanner />

      {/* Quick Links */}
      <QuickLinks />

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Daily Quote */}
      <DailyQuote />

      {/* Latest Blog */}
      <LatestBlog />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-saffron/10 to-maroon/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plan Your Visit
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Experience the divine presence and participate in our sacred rituals. The temple welcomes all devotees seeking blessings and spiritual peace.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="temple" size="lg">
                  Get Directions
                </Button>
              </Link>
              <Link to="/function-hall">
                <Button variant="outline" size="lg">
                  Book Function Hall
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
