// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Sidebar from './assets/Components/Sidebar'
// import HeroNav from './assets/Components/HeroNav'
// import HeroSection from './assets/Components/HeroSection'
// import Hero from './assets/Components/Hero'

// import Maintain from './assets/Components/Maintain'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// function App() {

//   const router = createBrowserRouter([
//     {
//       path:"/maintain",
//       element:<Maintain/>
//     },
//   ])

//   return (
//     <>
//       <div className="flex h-screen">
//         <Sidebar />
//      {/* <RouterProvider router={router}/> */}
//         <div className="flex-1">
//           <HeroNav />
//           <Hero/>
//           {/* <Maintain/> */}
//         </div>
//       </div>
//       <RouterProvider router={router}/>;
//     </>
//   )
// }

// export default App












import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Sidebar from './assets/Components/Sidebar';
import HeroNav from './assets/Components/HeroNav';
import Hero from './assets/Components/Hero';
import Maintain from './assets/Components/Maintain';

function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar visible all the time */}
      <Sidebar />
      <div className="flex-1">
        {/* HeroNav visible all the time */}
        <HeroNav />
        {/* Routed components will be rendered here */}
        <Outlet />
      </div>
    </div>
  );
}

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Shared layout with Sidebar and HeroNav
    children: [
      { path: '/', element: <Hero /> }, // Default route
      { path: '/maintain', element: <Maintain /> }, // Maintain route
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
