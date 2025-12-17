import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const milestones = [
  { year: "800 AD", event: "Temple foundation laid by ancient kings" },
  { year: "1100 AD", event: "Main sanctum consecration ceremony" },
  { year: "1450 AD", event: "Construction of the towering gopuram" },
  { year: "1750 AD", event: "Major renovation by local rulers" },
  { year: "1920 AD", event: "Trust establishment and modernization" },
  { year: "1985 AD", event: "Golden jubilee celebrations" },
  { year: "2010 AD", event: "Heritage conservation project completed" },
  { year: "2020 AD", event: "Centenary of the temple trust" },
];

const TempleHistory = () => {
  return (
    <Layout>
      <PageHeader
        title="Temple History"
        subtitle="A journey through centuries of devotion and divine grace"
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
                Sri Temple stands as a testament to the unwavering devotion of countless generations. Dating back over a millennium, this sacred site has been a beacon of spirituality, attracting pilgrims from far and wide seeking divine blessings and inner peace.
              </p>
              <p className="leading-relaxed mb-6">
                According to ancient scriptures and local legends, the temple was founded during the reign of the Chola dynasty. It is believed that the great sage Agastya himself performed the initial consecration ceremony, invoking the divine presence that continues to bless devotees to this day.
              </p>
              <p className="leading-relaxed">
                The architectural brilliance of the temple reflects the golden age of Hindu temple construction. The intricate carvings on the walls depict stories from the Puranas, while the towering gopuram serves as a magnificent gateway to the divine realm within.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Historical Milestones
            </h2>
            <div className="divider-ornament max-w-xs mx-auto">
              <span className="text-saffron">✦</span>
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-gold to-maroon transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="card-temple p-6 inline-block">
                      <span className="text-primary font-display text-xl font-bold">
                        {milestone.year}
                      </span>
                      <p className="text-muted-foreground mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-saffron rounded-full border-4 border-background shadow-glow transform md:-translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
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
                Legends & Lore
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Many miraculous stories surround this sacred temple. It is said that during a great drought, the presiding deity appeared in the dreams of the village elder, guiding them to a hidden spring that saved the entire community.
                </p>
                <p>
                  Another legend speaks of a blind devotee whose sight was miraculously restored after years of devoted worship at this temple. Such stories of divine intervention have been passed down through generations.
                </p>
                <p>
                  The temple is also associated with celestial events. According to local belief, during certain auspicious nights, divine beings descend to worship alongside mortal devotees, blessing all present with their sacred presence.
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
                alt="Ancient Temple Carvings"
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
