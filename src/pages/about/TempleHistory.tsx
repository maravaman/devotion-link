import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const TempleHistory = () => {
  return (
    <Layout>
      <PageHeader
        title="Temple History"
        subtitle="A legacy of devotion and divine grace"
        image="https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&h=400&fit=crop"
      />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <p className="text-lg leading-relaxed mb-6">
                Sri Sri Sri Mahaganapathi Kamakshi Sametha Ekambareswara Temple, located in Bondada Veedhi, Vizianagaram, stands as a sacred monument to the devotion of countless generations. This traditional Hindu temple is dedicated to Lord Ekambareswara (Shiva) along with Goddess Kamakshi and Lord Mahaganapathi.
              </p>
              <p className="leading-relaxed mb-6">
                The temple follows long-established religious customs and authentic Vedic rituals that have been preserved and passed down through generations. The sanctity of this sacred space has drawn devotees from across the region seeking divine blessings and spiritual solace.
              </p>
              <p className="leading-relaxed">
                Today, the temple continues to serve as a beacon of spirituality, conducting regular poojas, special ceremonies, and the renowned Mandala Deeksha programs that bring devotees closer to the divine.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sacred Traditions */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sacred Traditions
            </h2>
            <div className="divider-ornament max-w-xs mx-auto">
              <span className="text-saffron">✦</span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-temple p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Vedic Rituals
                </h3>
                <p className="text-muted-foreground">
                  The temple strictly follows authentic Vedic traditions. All poojas and ceremonies are conducted by learned priests who have mastered the ancient scriptures and rituals, ensuring that each worship service maintains its sacred significance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-temple p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Mandala Deeksha
                </h3>
                <p className="text-muted-foreground">
                  The temple is renowned for its 41-day Mandala Deeksha program, during which devotees observe special vows and participate in daily rituals. This intensive spiritual practice has transformed countless lives over the years.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card-temple p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Panchamrutha Abhishekam
                </h3>
                <p className="text-muted-foreground">
                  The sacred Panchamrutha Abhishekam, performed with five holy substances, is a signature ritual of this temple. This powerful ceremony is believed to bestow divine blessings and fulfill the wishes of devotees.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="card-temple p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Community Service
                </h3>
                <p className="text-muted-foreground">
                  Beyond religious ceremonies, the temple has always been a center for community welfare. The Sri Kamakshi Temple Service Trust continues this legacy, organizing programs for the benefit of devotees and society.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Legends */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                The Divine Presence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The temple enshrines Lord Ekambareswara, a powerful form of Lord Shiva, along with Goddess Kamakshi and Lord Mahaganapathi. The divine trinity together creates a unique spiritual atmosphere that devotees describe as profoundly peaceful and transformative.
                </p>
                <p>
                  Devotees believe that sincere prayers offered at this temple are always answered. Many have shared experiences of miraculous blessings received after worship here, strengthening the faith of the community.
                </p>
                <p>
                  The presence of Lord Mahaganapathi, the remover of obstacles, makes this temple particularly auspicious for new beginnings. Devotees often visit before important life events to seek the Lord's blessings.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&h=450&fit=crop"
                alt="Sacred Temple"
                className="rounded-xl shadow-temple-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TempleHistory;
