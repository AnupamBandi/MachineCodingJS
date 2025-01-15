// import React, { useEffect, useState , useCallback } from "react";

import { useEffect, useState, useCallback } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomRBGColor = useCallback(() => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g}, ${b})`);
  },[]);

  const handleCreateRandomHEXColor = useCallback(() => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "c", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  },[]);

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRBGColor();
    else handleCreateRandomHEXColor();
  }, [handleCreateRandomHEXColor, handleCreateRandomRBGColor, typeOfColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHEXColor
            : handleCreateRandomRBGColor
        }
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</h3>
        <p>{color}</p>
      </div>
    </div>
  );
};

export default RandomColorGenerator;

// const RandomColorGenerator = () => {
//   const [color, setColor] = useState("#4f4f4f");
//   const [colorType, setColorType] = useState("hex");

//   const randomColorUtility = (length) => {
//     return Math.floor(Math.random() * length);
//   };
//   const handleCreateHexColor = useCallback(() => {
//     const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//     let hexColor = "#";
//     for (let i = 0; i < 6; i++) {
//       hexColor += hex[randomColorUtility(hex.length)];
//     }
//     setColor(hexColor);
//   }, []);

//   const handleCreateRgbColor = useCallback(() => {
//     const r = randomColorUtility(256);
//     const g = randomColorUtility(256);
//     const b = randomColorUtility(256);

//     setColor(`Rgb(${r},${g},${b})`);
//   }, []);

//   useEffect(() => {
//     if (colorType === "hex") handleCreateHexColor();
//     else handleCreateRgbColor();
//   }, [colorType, handleCreateHexColor, handleCreateRgbColor]);

//   return (
//     <div style={{ width: "100vw", height: "100vh", background: color }}>
//       <button
//         onClick={
//           colorType === "hex" ? handleCreateHexColor : handleCreateRgbColor
//         }
//       >
//         Generate Random Color
//       </button>
//       <button onClick={() => setColorType("hex")}> Create Hex Color</button>
//       <button onClick={() => setColorType("rgb")}> Create Rgb Color</button>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           fontSize: "60px",
//           marginTop: "50px",
//           flexDirection: "column",
//           gap: "20px",
//         }}
//       >
//         {color}
//       </div>
//     </div>
//   );
// };

// export default RandomColorGenerator;
