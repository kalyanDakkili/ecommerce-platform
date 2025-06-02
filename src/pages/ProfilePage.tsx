import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Settings, ShoppingBag, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={32} className="text-primary-600" />
                </div>
                <h2 className="font-medium">{user.email}</h2>
                <p className="text-sm text-gray-500">Member since {new Date(user.created_at).toLocaleDateString()}</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <ShoppingBag size={18} />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-primary-50 text-primary-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-error-500 hover:bg-error-50 transition-colors"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user.email}
                        disabled
                        className="input bg-gray-50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="input"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="input"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Update Profile
                    </button>
                  </form>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>
                  <div className="text-center text-gray-500 py-8">
                    <ShoppingBag size={48} className="mx-auto mb-4 text-gray-400" />
                    <p>No orders found</p>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="input"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="input"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Update Password
                        </button>
                      </form>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Delete Account</h3>
                      <p className="text-gray-600 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="btn bg-error-500 text-white hover:bg-error-600">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;