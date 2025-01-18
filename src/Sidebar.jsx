import { useEffect } from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  // Lock/unlock body scroll when sidebar is opened/closed
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div
      className={`transition-transform duration-500 ease-in-out fixed top-0 left-0 h-full bg-gray-800 text-white z-50 p-6 ${
        isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      } md:w-1/5 w-2/5`} // Sidebar width (50% on mobile, 20% on desktop)
    >
      <div className="text-2xl font-bold mb-8">Admin Dashboard</div>
      <ul>
        <li className="mb-4 cursor-pointer">Dashboard</li>
        <li className="mb-4 cursor-pointer">User Management</li>
        <li className="mb-4 cursor-pointer">Settings</li>
        <li className="mb-4 cursor-pointer">Analytics</li>
        <li className="mb-4 cursor-pointer">Reports</li>
        <li className="mb-4 cursor-pointer">Notifications</li>
      </ul>
    </div>
  );
}

export default Sidebar;
