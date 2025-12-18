import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Receipt, Shield, Landmark, Smartphone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const donationPurposes = [
  "General Temple Fund",
  "Panchamrutha Abhishekam (₹501)",
  "Mandala Deeksha Special Pooja",
  "Festival Celebrations",
  "Temple Development",
  "Anna Danam (Food Distribution)",
];

const quickAmounts = [501, 1001, 2501, 5001, 10001, 21001];

const Donate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    purpose: donationPurposes[0],
    message: "",
  });

  const handleQuickAmount = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Donation Intent",
      description: "Please use the bank details or UPI to complete your donation.",
    });
  };

  return (
    <Layout>
      <PageHeader
        title="Online Donation"
        subtitle="Support the temple and receive divine blessings"
        image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=400&fit=crop"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bank Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Bank Transfer */}
              <div className="card-temple p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-saffron to-gold flex items-center justify-center">
                    <Landmark className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Bank Transfer Details
                    </h2>
                    <p className="text-sm text-muted-foreground">Sri Kamakshi Temple Service Trust</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm">
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
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Bank</span>
                    <span className="font-medium text-foreground">Union Bank of India</span>
                  </div>
                </div>
              </div>

              {/* UPI Payments */}
              <div className="card-temple p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center">
                    <Smartphone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      UPI / Digital Payments
                    </h2>
                    <p className="text-sm text-muted-foreground">Quick and easy donations</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  You can also donate using any of the following digital payment methods:
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["BHIM", "Google Pay", "PhonePe", "Paytm"].map((method) => (
                    <span
                      key={method}
                      className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Contact: <a href="tel:+917207318809" className="text-primary font-medium hover:underline">+91 72073 18809</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Special Pooja */}
              <div className="card-temple p-8 bg-gradient-to-br from-saffron/5 to-gold/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🙏</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Panchamrutha Abhishekam
                    </h3>
                    <p className="text-primary font-bold text-lg">₹501/-</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  During the 41-day Mandala Deeksha period, devotees can participate in the sacred Panchamrutha Abhishekam performed at 5:00 AM. This includes special decoration (Alankarana) and Maha Deeparadhana.
                </p>
                <p className="text-sm text-foreground font-medium">
                  Mandala Deeksha begins: October 22, 2025
                </p>
              </div>

              {/* Why Donate */}
              <div className="card-temple p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Why Donate?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your generous contributions help us maintain the temple, conduct sacred rituals, and serve the community through various spiritual activities.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Daily poojas and temple maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Mandala Deeksha special programs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Panchamrutha Abhishekam rituals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Festival celebrations
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="card-temple p-8">
                <Shield className="w-12 h-12 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Trust Information
                </h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Trust Name:</strong> Sri Kamakshi Temple Service Trust
                </p>
                <p className="text-muted-foreground">
                  <strong>Registration No:</strong> 31 / 2025
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
