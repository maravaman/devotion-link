import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-hero" />
      )}
      <div className="absolute inset-0 temple-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/90">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex justify-center">
            <div className="divider-ornament w-32">
              <span className="text-gold text-xl">✦</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
