import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "The Significance of Temple Architecture in Hindu Tradition",
    excerpt: "Explore the deep symbolism and spiritual meaning behind the intricate designs of Hindu temples...",
    author: "Pandit Sharma",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
    category: "Spirituality",
  },
  {
    id: 2,
    title: "Understanding the Science Behind Temple Rituals",
    excerpt: "Modern science meets ancient wisdom as we decode the purpose behind traditional temple practices...",
    author: "Dr. Raghav",
    date: "Feb 25, 2024",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop",
    category: "Knowledge",
  },
];

const LatestBlog = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground">
              Spiritual insights, temple updates, and divine wisdom
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="group">
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${blog.id}`} className="block">
                <div className="card-temple overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-saffron text-primary-foreground text-xs font-medium rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
