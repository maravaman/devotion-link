import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const trustees = [
  {
    name: "Sri Ramesh Kumar",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    description: "Leading the trust with devotion and dedication for over 20 years.",
  },
  {
    name: "Dr. Lakshmi Devi",
    role: "Secretary",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    description: "Managing temple administration and cultural activities.",
  },
  {
    name: "Sri Venkat Rao",
    role: "Treasurer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    description: "Overseeing financial management and transparency.",
  },
  {
    name: "Smt. Padma Sundaram",
    role: "Trustee",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    description: "Coordinating religious ceremonies and festivals.",
  },
];

const AboutTrust = () => {
  return (
    <Layout>
      <PageHeader
        title="About the Trust"
        subtitle="Sri Temple Charitable Trust - Serving humanity through devotion"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop"
      />

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-temple p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a spiritual sanctuary that fosters devotion, preserves our sacred traditions, and promotes the well-being of all beings. We envision a world where spiritual wisdom guides humanity towards peace and harmony.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-temple p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To maintain the temple as a center of spiritual excellence, conduct sacred rituals with utmost devotion, serve the community through charitable activities, and educate devotees about our rich cultural heritage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Trust Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond temple maintenance, our trust engages in various charitable and community activities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Anna Danam", desc: "Free meals served to devotees and the needy daily" },
              { title: "Education Support", desc: "Scholarships for underprivileged students" },
              { title: "Medical Camps", desc: "Regular health check-ups and medical assistance" },
              { title: "Cultural Programs", desc: "Promoting classical arts and spiritual education" },
              { title: "Temple Maintenance", desc: "Preserving and enhancing temple infrastructure" },
              { title: "Festival Celebrations", desc: "Grand celebrations of all major Hindu festivals" },
            ].map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-2">{activity.title}</h4>
                <p className="text-muted-foreground text-sm">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              <Users className="w-8 h-8 inline-block mr-3 text-primary" />
              Our Trustees
            </h2>
            <p className="text-muted-foreground">Meet the dedicated individuals guiding our temple</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustees.map((trustee, index) => (
              <motion.div
                key={trustee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full rounded-full object-cover shadow-temple group-hover:shadow-temple-lg transition-shadow"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {trustee.name}
                </h4>
                <p className="text-primary text-sm font-medium mb-2">{trustee.role}</p>
                <p className="text-muted-foreground text-sm">{trustee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutTrust;
