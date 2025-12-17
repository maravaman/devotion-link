import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "current", name: "Recent Photos" },
  { id: "historical", name: "Historical Images" },
  { id: "festivals", name: "Festival Celebrations" },
];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=600&h=400&fit=crop", category: "current", title: "Temple Main Entrance" },
  { id: 2, src: "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=600&h=400&fit=crop", category: "current", title: "Evening Aarti" },
  { id: 3, src: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=600&h=400&fit=crop", category: "festivals", title: "Shivaratri Celebration" },
  { id: 4, src: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=400&fit=crop", category: "festivals", title: "Diwali Decorations" },
  { id: 5, src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop", category: "current", title: "Temple Gardens" },
  { id: 6, src: "https://images.unsplash.com/photo-1585468274952-66591eb14165?w=600&h=400&fit=crop", category: "historical", title: "Ancient Temple View (1950)" },
  { id: 7, src: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=600&h=400&fit=crop", category: "historical", title: "Historical Gopuram" },
  { id: 8, src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop", category: "current", title: "Temple Architecture" },
  { id: 9, src: "https://images.unsplash.com/photo-1605102900605-43ddb45ab9b5?w=600&h=400&fit=crop", category: "festivals", title: "Deepavali Night" },
  { id: 10, src: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=600&h=400&fit=crop", category: "historical", title: "Renovation (1985)" },
  { id: 11, src: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=600&h=400&fit=crop", category: "current", title: "Sanctum Decorations" },
  { id: 12, src: "https://images.unsplash.com/photo-1568736772245-26914aae0b09?w=600&h=400&fit=crop", category: "festivals", title: "Navaratri Celebrations" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Glimpses of divine beauty and sacred moments"
        image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-temple"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square relative rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-primary-foreground text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="max-w-full max-h-[70vh] rounded-xl shadow-2xl"
              />
              <p className="text-primary-foreground text-center mt-4 font-medium">
                {selectedImageData.title}
              </p>
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
