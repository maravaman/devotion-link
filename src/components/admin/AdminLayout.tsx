import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, FileText, Calendar, Images, BookOpen, 
  Mail, CreditCard, Bell, Building, LogOut, Menu, X 
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Content", path: "/admin/content", icon: FileText },
  { name: "Festivals", path: "/admin/festivals", icon: Calendar },
  { name: "Gallery", path: "/admin/gallery", icon: Images },
  { name: "Blog", path: "/admin/blog", icon: BookOpen },
  { name: "Contacts", path: "/admin/contacts", icon: Mail },
  { name: "Donations", path: "/admin/donations", icon: CreditCard },
  { name: "Announcements", path: "/admin/announcements", icon: Bell },
  { name: "Function Hall", path: "/admin/bookings", icon: Building },
];

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-40 flex items-center px-4">
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <span className="ml-4 font-display font-semibold">Admin Panel</span>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-card border-r border-border z-50 transform transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-saffron to-maroon flex items-center justify-center">
              <span className="text-sm">🕉</span>
            </div>
            <span className="font-display font-semibold">Sri Temple</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <LogOut className="w-5 h-5" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
