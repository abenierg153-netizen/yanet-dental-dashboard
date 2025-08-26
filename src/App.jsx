import React, { useState } from "react";
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Settings,
  BarChart3,
  Megaphone,
  Brain,
  Download,
  Plus,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2,
  Sparkles
} from "lucide-react";

export default function App() {
  // ----- STATE -----
  const [currentUser, setCurrentUser] = useState({
    role: "super_admin",
    name: "John Doe",
    isLoggedIn: false
  });
  const [activeSection, setActiveSection] = useState("login");
  const [viewMode, setViewMode] = useState("grid");

  const isSuperAdmin = currentUser.role === "super_admin";
  const isEditor = currentUser.role === "editor";

  // ----- SMALL COMPONENTS -----
  const AIBadge = () => (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
      <Sparkles className="w-3 h-3 mr-1" />
      AI
    </span>
  );

  const RoleBadge = ({ isReadOnly }) => (
    isReadOnly ? (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        <Eye className="w-3 h-3 mr-1" />
        Read Only
      </span>
    ) : (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
        <Edit className="w-3 h-3 mr-1" />
        Full Access
      </span>
    )
  );

  // ----- LOGIN SECTION -----
  const LoginSection = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="text-gray-600 mt-2">Secure admin access</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@business.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          {currentUser.role === "super_admin" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">2FA Code</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123456"
              />
            </div>
          )}
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-600">Remember this device for 30 days</label>
          </div>
          <button
            type="button"
            onClick={() => {
              setCurrentUser(prev => ({ ...prev, isLoggedIn: true }));
              setActiveSection("dashboard");
            }}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-2">Demo: Select Role</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentUser(prev => ({ ...prev, role: "super_admin" }))}
              className={`px-3 py-1 rounded text-sm ${currentUser.role === "super_admin" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            >
              Super Admin
            </button>
            <button
              onClick={() => setCurrentUser(prev => ({ ...prev, role: "editor" }))}
              className={`px-3 py-1 rounded text-sm ${currentUser.role === "editor" ? "bg-green-600 text-white" : "bg-gray-200"}`}
            >
              Editor/Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ----- DASHBOARD SECTION -----
  const DashboardSection = () => (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back, {currentUser.name}</p>
        </div>
        <RoleBadge isReadOnly={isEditor} />
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Appointments</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-sm text-green-600">+15% vs yesterday</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Weekly Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$4,230</p>
              <p className="text-sm text-red-600">-5% vs last week</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-green-600">+0.2 vs last month</p>
            </div>
            <TrendingUp className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Messages</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-sm text-yellow-600">Needs attention</p>
            </div>
            <MessageSquare className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );

  // ----- RENDER MAIN -----
  return (
    <>
      {currentUser.isLoggedIn ? <DashboardSection /> : <LoginSection />}
    </>
  );
      }
