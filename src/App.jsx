import React, { useState, useEffect } from 'react';
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
  Menu,
  X,
  Plus,
  Filter,
  Search,
  Bell,
  Sparkles,
  Eye,
  Edit,
  Trash2,
  RefreshCw
} from 'lucide-react';

const AdminDashboard = () => {
  // State management
  const [currentUser, setCurrentUser] = useState({
    role: 'super_admin', // 'super_admin' or 'editor'
    name: 'John Doe',
    isLoggedIn: false
  });
  const [activeSection, setActiveSection] = useState('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // for services section

  // Role-based access helper
  const isSuperAdmin = currentUser.role === 'super_admin';
  const isEditor = currentUser.role === 'editor';

  // AI Feature Badge Component
  const AIBadge = () => (
    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
      <Sparkles className="w-3 h-3 mr-1" />
      AI
    </span>
  );

  // Role Badge Component
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

  // 1. LOGIN & ACCESS CONTROL SECTION
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

          {/* Two-factor for Super Admin */}
          {currentUser.role === 'super_admin' && (
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
              setActiveSection('dashboard');
            }}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Role Selection for Demo */}
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-700 mb-2">Demo: Select Role</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentUser(prev => ({ ...prev, role: 'super_admin' }))}
              className={`px-3 py-1 rounded text-sm ${currentUser.role === 'super_admin' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            >
              Super Admin
            </button>
            <button 
              onClick={() => setCurrentUser(prev => ({ ...prev, role: 'editor' }))}
              className={`px-3 py-1 rounded text-sm ${currentUser.role === 'editor' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            >
              Editor/Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. DASHBOARD/OVERVIEW SECTION
  const DashboardSection = () => (
    <div className="space-y-6">
      {/* Header with role indicator */}
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

      {/* AI Insights Panel - Super Admin Only */}
      {isSuperAdmin && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
            <AIBadge />
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
              <p className="text-gray-700">This week you're trending 15% higher in evening appointments. Consider extending hours on weekdays.</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
              <p className="text-gray-700">Facial treatments show 34% higher profit margin than average. Promote these services.</p>
            </div>
            <div className="flex items-start space-x-3">
              <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
              <p className="text-gray-700">Revenue prediction: $12,400 next month based on current trends.</p>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
          <Calendar className="w-6 h-6 text-blue-600 mb-2" />
          <p className="font-medium">View Appointments</p>
          <p className="text-sm text-gray-600">Manage schedule</p>
        </button>
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
          <Users className="w-6 h-6 text-green-600 mb-2" />
          <p className="font-medium">Customer Insights</p>
          <p className="text-sm text-gray-600">View analytics</p>
        </button>
        {isSuperAdmin && (
          <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
            <Brain className="w-6 h-6 text-purple-600 mb-2" />
            <p className="font-medium">AI Tools</p>
            <p className="text-sm text-gray-600">Automation panel</p>
          </button>
        )}
        <button className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-left">
          <Download className="w-6 h-6 text-gray-600 mb-2" />
          <p className="font-medium">Export Reports</p>
          <p className="text-sm text-gray-600">Download data</p>
        </button>
      </div>
    </div>
  );

  // 3. APPOINTMENTS SECTION
  const AppointmentsSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <div className="flex items-center space-x-2">
          <RoleBadge isReadOnly={isEditor} />
          {isSuperAdmin && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Appointment</span>
            </button>
          )}
        </div>
      </div>

      {/* View Toggle and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Table View</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Calendar View</button>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* AI Insights for Super Admin */}
      {isSuperAdmin && (
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <AIBadge />
            <span className="font-medium">No-Show Predictions</span>
          </div>
          <p className="text-sm text-gray-700">3 appointments today have high no-show risk. Automated reminders sent.</p>
        </div>
      )}

      {/* Appointments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date/Time</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                {isSuperAdmin && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">AI Risk</th>
                )}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">Today 2:00 PM</td>
                  <td className="px-4 py-3 text-sm font-medium">Sarah Johnson</td>
                  <td className="px-4 py-3 text-sm">Deep Cleansing Facial</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">$120</td>
                  {isSuperAdmin && (
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Medium Risk
                      </span>
                    </td>
                  )}
                  <td className="px-4 py-3">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      {isSuperAdmin && (
                        <>
                          <button className="text-green-600 hover:text-green-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // 4. SERVICES/PRODUCTS SECTION
  const ServicesSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Services & Products</h1>
        <div className="flex items-center space-x-2">
          <RoleBadge isReadOnly={isEditor} />
          {isSuperAdmin && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Service</span>
            </button>
          )}
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Grid View
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            List View
          </button>
        </div>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border rounded-lg">
            <option>All Categories</option>
            <option>Facial Treatments</option>
            <option>Body Treatments</option>
            <option>Massage Therapy</option>
          </select>
        </div>
      </div>

      {/* AI Pricing Suggestions - Super Admin Only */}
      {isSuperAdmin && (
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <AIBadge />
            <span className="font-medium">Pricing Recommendations</span>
          </div>
          <p className="text-sm text-gray-700">Consider increasing massage therapy prices by 8% based on high demand and low availability.</p>
        </div>
      )}

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Service Image</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">Deep Cleansing Facial</h3>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    🔥 Hot
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Purifying facial treatment for all skin types</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-gray-900">$120</span>
                    <span className="text-sm text-gray-500 ml-2">90 min</span>
                  </div>
                  <span className="text-sm text-green-600">24 bookings this month</span>
                </div>
                {isSuperAdmin && (
                  <div className="mt-3 flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm">Edit</button>
                    <button className="px-3 py-2 border border-gray-300 rounded text-sm">Stats</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Popularity</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded mr-3"></div>
                      <div>
                        <div className="
