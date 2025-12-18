import { motion } from "framer-motion";
import { Star, Sparkles, Sun, Moon, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const specialPoojas = [
  {
    name: "Panchamrutha Abhishekam",
    description: "Sacred abhishekam performed with five holy substances - milk, curd, ghee, honey, and sugar. Conducted during the 41-day Mandala Deeksha period with special decoration (Alankarana) and Maha Deeparadhana.",
    benefit: "Divine blessings and spiritual purification",
    timing: "5:00 AM during Mandala period",
    price: "₹501/-",
  },
  {
    name: "Mandala Deeksha (41 Days)",
    description: "A 41-day intensive spiritual observance where devotees undertake special vows and participate in daily rituals. Continuous special prayers are conducted throughout this sacred period.",
    benefit: "Spiritual transformation and divine grace",
    timing: "Begins October 22, 2025",
  },
  {
    name: "Maha Deeparadhana",
    description: "Grand lamp offering ceremony performed with devotion and reverence to the presiding deities.",
    benefit: "Removes darkness of ignorance",
    timing: "During special occasions",
  },
  {
    name: "Special Alankarana",
    description: "Divine decoration of the deities with flowers, ornaments, and sacred items during festivals and special poojas.",
    benefit: "Blessed darshan of decorated deities",
    timing: "Festival days and Mandala period",
  },
];

const traditions = [
  {
    icon: Sun,
    title: "Early Morning Abhishekam",
    description: "The temple opens at 5:00 AM during the Mandala period with Panchamrutha Abhishekam, allowing devotees to start their day with divine blessings.",
  },
  {
    icon: Sparkles,
    title: "Vedic Rituals",
    description: "All ceremonies follow authentic Vedic traditions, performed by learned priests who maintain the sanctity of ancient practices.",
  },
  {
    icon: Moon,
    title: "Mandala Deeksha",
    description: "The renowned 41-day spiritual program attracts devotees who observe special vows and participate in intensive worship.",
  },
  {
    icon: Star,
    title: "Trinity Worship",
    description: "The unique blessing of worshipping Lord Ekambareswara, Goddess Kamakshi, and Lord Mahaganapathi together in one temple.",
  },
];

const TempleSpeciality = () => {
  return (
    <Layout>
      <PageHeader
        title="Temple Speciality"
        subtitle="Discover the unique spiritual traditions and sacred rituals"
        image="https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=1200&h=400&fit=crop"
      />

      {/* Upcoming Mandala */}
      <section className="py-8 bg-gradient-to-r from-saffron/20 to-gold/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Upcoming Event</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Mandala Deeksha 2025
            </h2>
            <p className="text-muted-foreground">
              41-Day Special Pooja Program begins <strong className="text-foreground">October 22, 2025</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              What Makes Us Special
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our temple is renowned for its unique rituals, powerful blessings, and authentic Vedic traditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {traditions.map((tradition, index) => (
              <motion.div
                key={tradition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center flex-shrink-0">
                  <tradition.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {tradition.title}
                  </h3>
                  <p className="text-muted-foreground">{tradition.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Poojas */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Special Poojas & Rituals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience powerful rituals performed by learned priests following authentic Vedic traditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {specialPoojas.map((pooja, index) => (
              <motion.div
                key={pooja.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-temple p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {pooja.name}
                </h3>
                <p className="text-muted-foreground mb-4">{pooja.description}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4 inline-block mr-1" />
                    {pooja.benefit}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gold/20 text-gold-light">
                    {pooja.timing}
                  </div>
                  {pooja.price && (
                    <div className="px-3 py-1 rounded-full bg-maroon/20 text-maroon font-medium">
                      {pooja.price}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Beliefs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=600&h=500&fit=crop"
                alt="Sacred Rituals"
                className="rounded-xl shadow-temple-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                The Divine Trinity
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sri Sri Sri Mahaganapathi Kamakshi Sametha Ekambareswara Temple offers the unique blessing of worshipping three powerful deities together - Lord Ekambareswara (Shiva), Goddess Kamakshi, and Lord Mahaganapathi.
                </p>
                <p>
                  Lord Mahaganapathi, the remover of obstacles, blesses devotees at the beginning of their worship. Goddess Kamakshi bestows prosperity and protection, while Lord Ekambareswara grants spiritual liberation.
                </p>
                <p>
                  The temple is particularly renowned for its Panchamrutha Abhishekam during the Mandala period, where devotees can participate in this sacred ritual by contributing ₹501/-.
                </p>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl border border-saffron/20">
                <p className="text-sm text-foreground italic">
                  "The worship of the divine trinity at this sacred temple brings complete blessings - removal of obstacles, prosperity, and spiritual enlightenment."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact for Pooja */}
      <section className="py-12 bg-gradient-to-r from-saffron/10 to-maroon/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              To Book Panchamrutha Abhishekam
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us to participate in the sacred abhishekam during Mandala period
            </p>
            <a
              href="tel:+917207318809"
              className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline"
            >
              📞 +91 72073 18809
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TempleSpeciality;
