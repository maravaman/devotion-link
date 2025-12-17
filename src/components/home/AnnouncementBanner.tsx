import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Maha Shivaratri Celebrations",
    description: "Special poojas and abhishekam throughout the night",
    date: "March 8, 2024",
    type: "festival",
  },
  {
    id: 2,
    title: "Weekly Sundarkand Path",
    description: "Every Saturday from 6 PM to 8 PM",
    type: "regular",
  },
  {
    id: 3,
    title: "Temple Renovation Update",
    description: "New gopuram construction in progress",
    type: "news",
  },
];

const AnnouncementBanner = () => {
  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-2 text-primary shrink-0">
            <Bell className="w-5 h-5" />
            <span className="font-semibold text-sm">Announcements</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 + "%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...announcements, ...announcements].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-sm">
                    <span className="font-medium text-foreground">{item.title}</span>
                    <span className="text-muted-foreground"> — {item.description}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementBanner;
