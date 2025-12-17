import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const DailyQuote = () => {
  const quote = {
    text: "The soul is neither born, and nor does it die. It is eternal, ancient, and ever-existing. When the body is slain, the soul is not killed.",
    source: "Bhagavad Gita, Chapter 2, Verse 20",
  };

  return (
    <section className="py-20 bg-gradient-to-br from-saffron/5 via-background to-maroon/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 mx-auto mb-6 text-saffron opacity-50" />
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-6 italic">
            "{quote.text}"
          </blockquote>
          <div className="divider-ornament max-w-xs mx-auto mb-4">
            <span className="text-gold">✦</span>
          </div>
          <cite className="text-muted-foreground text-sm not-italic">
            — {quote.source}
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyQuote;
