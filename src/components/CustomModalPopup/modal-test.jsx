import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

// export default function ModalTest() {
//   const [showModalPopup, setShowModalPopup] = useState(false);

//   function handleToggleModalPopup() {
//     setShowModalPopup(!showModalPopup);
//   }

//   function onClose() {
//     setShowModalPopup(false);
//   }

//   return (
//     <div>
//       <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
//       {showModalPopup && (
//         <Modal
//           id={"custom-id"}
//           header={<h1>Customized Header</h1>}
//           footer={<h1>Customized Footer</h1>}
//           onClose={onClose}
//           body={<div>Customized body</div>}
//         />
//       )}
//     </div>

//   );
// }

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleShowPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const handleOnClose = () => {
    setShowModalPopup(false);
  };

  return (
    <>
      <div>
        <button onClick={handleShowPopup}>Open Modal Popup</button>
        {showModalPopup && (
          <Modal
            onCloseModal={handleOnClose}
            id={1}
            header="Modal Header"
            body={null}
            footer={
              <div style={{ background: "pink" }}>This is the footer</div>
            }
          />
        )}
      </div>
      <div></div>
    </>
  );
};

export default ModalTest;

const Greeting = () => {

  const [name , setName] = useState('') 
  const [count , setCount] = useState(0)

  const handleOnChange = (e) =>{
      setName(e.target.value)
      setCount(prev => prev+1)
      console.log(name, 'here is the name' , count ,'here is count')
  }

  return (
    <div>
      <form>
        <label htmlFor="">Enter your name</label>
        <input onChange={(e)=>handleOnChange(e)} type="text" placeholder="Enter the name here"/>
      </form>
    </div>
  );
};
export { Greeting };
