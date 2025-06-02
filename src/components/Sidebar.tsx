
import { Link, useLocation } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  BookOpen, 
  DollarSign, 
  Settings, 
  BarChart3,
  FileText,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Classes", href: "/classes", icon: BookOpen },
  { name: "Students", href: "/students", icon: Users },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Billing", href: "/billing", icon: DollarSign },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Medicert</h1>
            <p className="text-sm text-gray-500">CRM</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== "/" && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">Need Help?</h3>
          <p className="text-xs text-gray-600 mb-3">Get support or training resources</p>
          <button className="w-full bg-white text-indigo-600 text-xs font-medium py-2 px-3 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};
