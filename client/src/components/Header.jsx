import { useState } from 'react';
import { Menu, Bell, Search, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ onMenuClick }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      {/* Search */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="relative flex flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="block h-full w-full border-0 py-0 pl-10 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Notifications */}
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

        {/* User menu */}
        <div className="relative">
          <button
            type="button"
            className="-m-1.5 flex items-center p-1.5"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
              <User className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="hidden lg:flex lg:items-center">
              <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                {user?.username || 'User'}
              </span>
            </span>
          </button>

          {/* User menu dropdown */}
          {userMenuOpen && (
            <div className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <button
                className="flex w-full items-center px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                onClick={() => setUserMenuOpen(false)}
              >
                <Settings className="mr-3 h-4 w-4 text-gray-400" />
                Settings
              </button>
              <button
                className="flex w-full items-center px-3 py-1 text-sm leading-6 text-gray-900 hover:bg-gray-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-3 h-4 w-4 text-gray-400" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
