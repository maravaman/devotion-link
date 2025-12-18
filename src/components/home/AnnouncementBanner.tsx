import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Mandala Deeksha 2025",
    description: "41-day special pooja begins October 22, 2025 - Panchamrutha Abhishekam at 5:00 AM",
    type: "festival",
  },
  {
    id: 2,
    title: "Panchamrutha Abhishekam",
    description: "Participate in sacred abhishekam during Mandala period - ₹501/-",
    type: "pooja",
  },
  {
    id: 3,
    title: "Digital Payments Accepted",
    description: "Donate via BHIM, Google Pay, PhonePe, Paytm - Contact: 7207318809",
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
