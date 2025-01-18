import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './assets/Components/Sidebar'
import HeroNav from './assets/Components/HeroNav'
import HeroSection from './assets/Components/HeroSection'
import Hero from './assets/Components/Hero'
import Maintain from './assets/Components/Maintain'

function App() {

  return (
    <>
      {/* Parent container */}
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <HeroNav />
          <Hero/>
          {/* <Maintain/> */}
          {/* <HeroSection/> */}
        </div>
      </div>
    </>
  )
}

export default App




// import { useState } from 'react';
// import Sidebar from './Sidebar';
// import { FaBars } from 'react-icons/fa';  // Hamburger Icon

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Icon */}
//       <button
//         className="fixed top-4 left-4 z-50 text-black text-3xl"
//         onClick={toggleSidebar}
//       >
//         <FaBars />
//       </button>
      
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Overlay */}
//       {isSidebarOpen && (
//         <div
//           className="transition-opacity duration-300 ease-in-out fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={toggleSidebar} // Close sidebar when clicking overlay
//         />
//       )}
      
//       <div className="p-10">
//         <h1 className="text-3xl font-bold">Admin Panel Dashboard</h1>
//         <p>Content goes here...</p>
//       </div>
//     </div>
//   );
// }

// export default App;
