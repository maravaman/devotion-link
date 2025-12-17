import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Significance of Temple Architecture in Hindu Tradition",
    excerpt: "Explore the deep symbolism and spiritual meaning behind the intricate designs of Hindu temples. From the gopuram to the garbhagriha, every element holds profound significance.",
    content: "Full content here...",
    author: "Pandit Sharma",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
    category: "Spirituality",
  },
  {
    id: 2,
    title: "Understanding the Science Behind Temple Rituals",
    excerpt: "Modern science meets ancient wisdom as we decode the purpose behind traditional temple practices. Discover how rituals align with scientific principles.",
    content: "Full content here...",
    author: "Dr. Raghav",
    date: "Feb 25, 2024",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
    category: "Knowledge",
  },
  {
    id: 3,
    title: "The Sacred Importance of Fasting in Hindu Tradition",
    excerpt: "Learn about the spiritual and health benefits of observing fasts during auspicious occasions. Understand the deeper meaning behind this ancient practice.",
    content: "Full content here...",
    author: "Swami Ananda",
    date: "Feb 20, 2024",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b5a4?w=600&h=400&fit=crop",
    category: "Traditions",
  },
  {
    id: 4,
    title: "Preparing for Maha Shivaratri: A Devotee's Guide",
    excerpt: "Everything you need to know about preparing for the great night of Lord Shiva. From rituals to mantras, get ready for this auspicious occasion.",
    content: "Full content here...",
    author: "Temple Committee",
    date: "Feb 15, 2024",
    image: "https://images.unsplash.com/photo-1604608672516-f1b9b1f67a3e?w=600&h=400&fit=crop",
    category: "Festivals",
  },
  {
    id: 5,
    title: "The Power of Mantras: Vibrations That Transform",
    excerpt: "Discover how the sacred sounds of mantras can transform your consciousness and bring peace to your life. Understanding the science of sacred sound.",
    content: "Full content here...",
    author: "Acharya Krishnan",
    date: "Feb 10, 2024",
    image: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&h=400&fit=crop",
    category: "Spirituality",
  },
  {
    id: 6,
    title: "Temple Volunteer Experiences: Stories of Service",
    excerpt: "Heartwarming stories from our temple volunteers who find joy and spiritual growth through selfless service. Read their inspiring experiences.",
    content: "Full content here...",
    author: "Volunteer Team",
    date: "Feb 5, 2024",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    category: "Community",
  },
];

const categories = ["All", "Spirituality", "Knowledge", "Traditions", "Festivals", "Community"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <PageHeader
        title="Temple Blog"
        subtitle="Spiritual insights, temple updates, and divine wisdom"
        image="https://images.unsplash.com/photo-1585468274952-66591eb14165?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-temple overflow-hidden group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-saffron text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
