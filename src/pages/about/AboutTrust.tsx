import { motion } from "framer-motion";
import { Target, Heart, Landmark, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const AboutTrust = () => {
  return (
    <Layout>
      <PageHeader
        title="About the Trust"
        subtitle="Sri Kamakshi Temple Service Trust - Serving devotees with dedication"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop"
      />

      {/* Trust Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-temple p-8 mb-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Sri Kamakshi Temple Service Trust
                  </h2>
                  <p className="text-muted-foreground">Regd. No. 31 / 2025</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The trust manages temple administration, poojas, festivals, and development activities. We are committed to preserving the sacred traditions of Sri Sri Sri Mahaganapathi Kamakshi Sametha Ekambareswara Temple and ensuring that all devotees receive proper spiritual services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/50">
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
                To create a spiritual sanctuary that fosters devotion, preserves our sacred Vedic traditions, and promotes the well-being of all devotees. We aim to spread the divine blessings of Lord Ekambareswara, Goddess Kamakshi, and Lord Mahaganapathi to all who seek them.
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
                To maintain the temple as a center of spiritual excellence, conduct sacred rituals with utmost devotion following authentic Vedic traditions, serve the community through Mandala poojas and special abhishekams, and provide a sacred space for all devotees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Bank Details for Donations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your generous contributions help us maintain the temple and serve devotees
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="card-temple p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <CreditCard className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Bank Transfer Details
                </h3>
              </div>
              <div className="grid gap-4 text-sm">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Account Name</span>
                  <span className="font-medium text-foreground">Sri Kamakshi Temple Service Trust</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Account Number</span>
                  <span className="font-medium text-foreground font-mono">060911010000152</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">IFSC Code</span>
                  <span className="font-medium text-foreground font-mono">UBIN0806099</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Bank Name</span>
                  <span className="font-medium text-foreground">Union Bank of India</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Digital payments accepted via <strong>BHIM, Google Pay, PhonePe, and Paytm</strong>
                </p>
              </div>
            </div>
          </motion.div>
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
              Our trust is dedicated to serving devotees and maintaining sacred traditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Temple Administration", desc: "Managing daily operations and maintaining temple premises" },
              { title: "Daily Poojas", desc: "Conducting regular worship services and rituals" },
              { title: "Mandala Deeksha", desc: "Organizing 41-day special pooja programs for devotees" },
              { title: "Abhishekams", desc: "Performing sacred abhishekams including Panchamrutha Abhishekam" },
              { title: "Festival Celebrations", desc: "Grand celebrations of major Hindu festivals" },
              { title: "Temple Development", desc: "Continuous improvement of temple infrastructure and facilities" },
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

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Contact the Trust
            </h2>
            <p className="text-muted-foreground mb-6">
              For any inquiries regarding temple services or donations
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

export default AboutTrust;
