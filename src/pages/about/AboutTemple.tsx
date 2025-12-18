import { motion } from "framer-motion";
import { MapPin, Clock, Compass } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const AboutTemple = () => {
  return (
    <Layout>
      <PageHeader
        title="About the Temple"
        subtitle="Sri Sri Sri Mahaganapathi Kamakshi Sametha Ekambareswara Temple"
        image="https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Welcome to Sri Ekambareswara Temple
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sri Sri Sri Mahaganapathi Kamakshi Sametha Ekambareswara Temple is a traditional Hindu temple located in Bondada Veedhi, Vizianagaram, Andhra Pradesh. The temple is dedicated to Lord Ekambareswara (Shiva) along with Goddess Kamakshi and Lord Mahaganapathi.
                </p>
                <p>
                  The temple follows long-established religious customs and Vedic rituals. Our learned priests perform sacred ceremonies with utmost devotion, following authentic traditions passed down through generations.
                </p>
                <p>
                  The temple regularly conducts special spiritual observances for devotees, including mandala (41-day) pooja programs and abhishekams for the welfare of devotees and society at large.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=600&h=500&fit=crop"
                alt="Temple Architecture"
                className="rounded-xl shadow-temple-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-saffron to-gold rounded-xl flex items-center justify-center shadow-temple">
                <span className="text-4xl">🕉</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temple Info Cards */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-temple p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Visiting Hours
              </h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p><strong>Morning:</strong> 5:30 AM - 12:30 PM</p>
                <p><strong>Evening:</strong> 4:00 PM - 9:00 PM</p>
                <p className="text-xs mt-3">* Special timings during festivals and Mandala period</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-temple p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Location
              </h3>
              <p className="text-muted-foreground text-sm">
                Bondada Veedhi,<br />
                Vizianagaram – 535001,<br />
                Andhra Pradesh, India
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-temple p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center mb-4">
                <Compass className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Presiding Deities
              </h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Lord Ekambareswara (Shiva)</li>
                <li>• Goddess Kamakshi</li>
                <li>• Lord Mahaganapathi</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground">Visit us in Vizianagaram and receive divine blessings</p>
          </motion.div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-temple-lg bg-muted">
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
      </section>
    </Layout>
  );
};

export default AboutTemple;
