import { motion } from "framer-motion";
import { Star, Sparkles, Sun, Moon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const specialPoojas = [
  {
    name: "Maha Rudrabhishekam",
    description: "A powerful ritual involving 108 repetitions of sacred mantras while performing abhishekam with milk, honey, and sacred waters.",
    benefit: "Removes negative energies and brings peace and prosperity",
    timing: "Every Monday morning",
  },
  {
    name: "Sahasranamam Archana",
    description: "Recitation of 1000 divine names while offering flowers at the sacred feet of the deity.",
    benefit: "Fulfills wishes and brings divine blessings",
    timing: "Daily at 11:00 AM",
  },
  {
    name: "Pradhosham Pooja",
    description: "Special evening worship during the auspicious Pradhosham period dedicated to Lord Shiva.",
    benefit: "Absolves sins and grants moksha",
    timing: "13th day of each fortnight",
  },
  {
    name: "Navgraha Shanti",
    description: "Rituals to appease all nine planetary deities for cosmic harmony.",
    benefit: "Removes planetary afflictions",
    timing: "By appointment",
  },
];

const traditions = [
  {
    icon: Sun,
    title: "Morning Rituals",
    description: "The day begins at 5:30 AM with Suprabhatam - melodious wake-up hymns for the deity, followed by Abhishekam and Alankaram.",
  },
  {
    icon: Sparkles,
    title: "Sacred Offerings",
    description: "Our temple follows the ancient tradition of preparing fresh prasadam daily using pure ingredients and traditional recipes.",
  },
  {
    icon: Moon,
    title: "Evening Deeparadhana",
    description: "The magical evening aarti with hundreds of oil lamps creates an atmosphere of divine brilliance and peace.",
  },
  {
    icon: Star,
    title: "Festival Celebrations",
    description: "Each festival is celebrated with elaborate decorations, special poojas, cultural programs, and community feasts.",
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
              Our temple is renowned for its unique rituals, powerful blessings, and centuries-old traditions
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
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="w-4 h-4 inline-block mr-1" />
                    {pooja.benefit}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gold/20 text-gold-light">
                    {pooja.timing}
                  </div>
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
                Sacred Beliefs & Offerings
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our temple is believed to be a Swayambhu Kshetra - a place where the divine manifested naturally without human installation. This makes the spiritual energy here particularly potent and beneficial.
                </p>
                <p>
                  Devotees believe that prayers offered here during Pradosham time are especially powerful. Many have experienced miraculous blessings after sincere worship at this sacred site.
                </p>
                <p>
                  The temple prasadam, prepared using age-old recipes and offered with devotion, is considered highly sacred. Consuming it is believed to bring health, prosperity, and spiritual merit.
                </p>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl border border-saffron/20">
                <p className="text-sm text-foreground italic">
                  "Those who worship with pure devotion at this temple are blessed with the removal of all obstacles and the fulfillment of righteous desires."
                </p>
                <p className="text-xs text-muted-foreground mt-2">— Temple Scripture</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TempleSpeciality;
