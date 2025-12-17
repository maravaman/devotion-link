import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Receipt, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const donationPurposes = [
  "General Temple Fund",
  "Anna Danam (Food Distribution)",
  "Education Support",
  "Festival Celebrations",
  "Temple Renovation",
  "Medical Camps",
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
    // Here you would integrate with payment gateway
    toast({
      title: "Redirecting to Payment Gateway",
      description: "Please complete your donation through the secure payment portal.",
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
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="card-temple p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Make a Donation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Quick Amount Selection */}
                  <div>
                    <Label className="mb-3 block">Select Amount (₹)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleQuickAmount(amount)}
                          className={`py-3 rounded-lg font-medium text-sm transition-all ${
                            formData.amount === amount.toString()
                              ? "bg-primary text-primary-foreground shadow-temple"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <Label htmlFor="amount">Or Enter Custom Amount (₹)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  {/* Purpose */}
                  <div>
                    <Label htmlFor="purpose">Donation Purpose</Label>
                    <select
                      id="purpose"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="mt-1 w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                    >
                      {donationPurposes.map((purpose) => (
                        <option key={purpose} value={purpose}>
                          {purpose}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                      required
                    />
                  </div>

                  <Button type="submit" variant="temple" size="lg" className="w-full">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Why Donate */}
              <div className="card-temple p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Why Donate?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your generous contributions help us maintain the temple, conduct sacred rituals, and serve the community through various charitable activities.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Daily poojas and temple maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Free meals for devotees and needy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    Educational scholarships
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
                  Secure Payments
                </h3>
                <p className="text-muted-foreground mb-4">
                  All transactions are secured with 256-bit SSL encryption. We accept multiple payment methods for your convenience.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["UPI", "Debit Card", "Credit Card", "Net Banking"].map((method) => (
                    <span
                      key={method}
                      className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Receipt */}
              <div className="card-temple p-8">
                <Receipt className="w-12 h-12 text-maroon mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Tax Benefits
                </h3>
                <p className="text-muted-foreground">
                  Donations to Sri Temple are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive an official receipt via email immediately after successful donation.
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
