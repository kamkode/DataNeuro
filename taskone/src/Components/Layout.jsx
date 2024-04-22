// import { Resizable } from "react-resizable";
import "./Layout.css"; // Import CSS file for styling
import { ComponentA, ComponentB, ComponentC } from "./Components";
// const ComponentA = () => {
//   return (
//     <Resizable
//       className="component componentA"
//       defaultSize={{ width: 1000, height: 500 }}
//     >
//       <div>Component A</div>
//     </Resizable>
//   );
// };

// const ComponentB = () => {
//   return (
//     <Resizable
//       className="component componentB"
//       defaultSize={{ width: 200, height: 200 }}
//     >
//       <div>Component B</div>
//     </Resizable>
//   );
// };

// const ComponentC = () => {
//   return (
//     <Resizable
//       className="component componentC"
//       defaultSize={{ width: 200, height: 200 }}
//     >
//       <div>Component C</div>
//     </Resizable>
//   );
// };

const Layout = () => {
  return (
    <div className="layout">
      <div className="top">
        <ComponentA />
        <ComponentB />
      </div>
      <div className="bottom">
        <ComponentC />
      </div>
    </div>
  );
};

export default Layout;
