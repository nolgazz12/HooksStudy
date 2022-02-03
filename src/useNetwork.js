import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
      // 함수가 들어왔을때 그 함수의 인자값으로 onLine 인지 offLine 인지
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("online", handleChange);
    };
  });

  return status;
};

// const App = () => {
//   const handleNetworkChange = () => {
//     console.log(onLine ? "onLine" : "OffLine");
//   };
//   const onLine = useNetwork(handleNetworkChange);
//   return (
//     <div className="App">
//       <h1>{onLine ? "onLine" : "offLine"}</h1>
//     </div>
//   );
// };
