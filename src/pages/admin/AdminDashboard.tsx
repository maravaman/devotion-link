import { motion } from "framer-motion";
import { CreditCard, Users, Calendar, Mail, TrendingUp, ArrowUpRight } from "lucide-react";

const stats = [
  { label: "Total Donations", value: "₹12,45,000", change: "+12%", icon: CreditCard },
  { label: "Blog Posts", value: "24", change: "+3", icon: Users },
  { label: "Upcoming Events", value: "8", change: "This month", icon: Calendar },
  { label: "Contact Queries", value: "15", change: "5 new", icon: Mail },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 lg:p-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-display text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome back! Here's an overview of your temple.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-temple p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-primary flex items-center gap-1">
                  {stat.change} <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-temple p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Recent Donations</h3>
            <div className="space-y-3">
              {[
                { name: "Ramesh Kumar", amount: "₹5,001", purpose: "Anna Danam" },
                { name: "Lakshmi Devi", amount: "₹2,501", purpose: "Festival Fund" },
                { name: "Venkat Rao", amount: "₹10,001", purpose: "Temple Renovation" },
              ].map((donation, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{donation.name}</p>
                    <p className="text-xs text-muted-foreground">{donation.purpose}</p>
                  </div>
                  <span className="text-primary font-semibold">{donation.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-temple p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Recent Inquiries</h3>
            <div className="space-y-3">
              {[
                { name: "Suresh", type: "Function Hall", date: "Mar 15" },
                { name: "Priya", type: "Contact Query", date: "Mar 14" },
                { name: "Anand", type: "Function Hall", date: "Mar 12" },
              ].map((inquiry, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{inquiry.name}</p>
                    <p className="text-xs text-muted-foreground">{inquiry.type}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{inquiry.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
