// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const DashboardProgress = () => {
//   const progressData = [
//     { label: "Usage A", percentage: 75 },
//     { label: "Usage B", percentage: 50 },
//     { label: "Usage C", percentage: 90 },
//     { label: "Usage D", percentage: 30 },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-6 p-4 bg-indigo-200 rounded-lg shadow-md mr-9">
//       {progressData.map((data, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center w-40 md:w-32"
//         >
//           <div className="w-24 h-24 md:w-20 md:h-25">
//             <CircularProgressbar
//               value={data.percentage}
//               text={`${data.percentage}%`}
//               styles={buildStyles({
//                 textSize: "16px",
//                 pathColor: "#4CAF50",
//                 textColor: "#333",
//                 trailColor: "#d6d6d6",
//               })}
//             />
//           </div>
//           <p className="mt-2 text-sm text-gray-600">{data.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DashboardProgress;








import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardProgress = () => {
  const progressData = [
    { label: "Usage A", percentage: 75 },
    { label: "Usage B", percentage: 50 },
    { label: "Usage C", percentage: 90 },
    { label: "Usage D", percentage: 30 },
  ];

  return (
    <>
    <h1 className="flex justify-center font-bold text-lg mr-9">Month Wise Progress </h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-4 bg-indigo-100 rounded-lg shadow-md mt-5 mr-9">
      {progressData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full"
        >
          <div className="w-24 h-24 md:w-20 md:h-20 ">
            <CircularProgressbar
              value={data.percentage}
              text={`${data.percentage}%`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: "#4CAF50",
                textColor: "#333",
                trailColor: "#d6d6d6",
              })}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 font-bold">{data.label}</p>
        </div>
      ))}
    </div>
</>
  );
};


export default DashboardProgress;
