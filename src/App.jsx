import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { validate } from "./utils/validation";
import checkSVG from "../assets/images/icon-checkbox-check.svg"
import radioSVG from "../assets/images/icon-radio-selected.svg"
import successSVG from "../assets/images/icon-success-check.svg"

function App() {

const [selected,setSelected] = useState(false);  // checkBox

const [radioSelection,setRadioSelection] = useState("");

const [errorMessage,setErrorMessage] = useState({});

const [successMessage,setSuccessMessage] = useState("");

const email = useRef(null);
const firstName = useRef(null);
const lastName = useRef(null);
const messageBox = useRef(null)

const resetForm = () => {
  email.current.value = "";
  firstName.current.value = "";
  lastName.current.value = "";
  messageBox.current.value = "";
  setSelected(false);
  setErrorMessage({});
  setRadioSelection("")
};

const handleSumbmit=()=>{

  const emailValue = email.current.value;
  const firstNameValue = firstName.current.value;
  const lastNameValue = lastName.current.value;
  const messageValue = messageBox.current.value;

  const message = validate(firstNameValue,lastNameValue,emailValue,messageValue,selected,radioSelection);

  setErrorMessage(message);

  if(Object.keys(message).length === 0){
    setSuccessMessage("Message Sent")

    setTimeout(()=>{
      setSuccessMessage("");
      resetForm()
    },3000)
   
  }
}
const handlesCheckBox =()=>{
  setSelected((prev)=>!prev);
}

const handlesRadio = (value)=>{
  setRadioSelection(value);
}
  return (
    <>
      {
        successMessage &&(
       
          <div className="bg-black bg-opacity-55 w-1/2  p-4 rounded-md grid gap-3 fixed top-4 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-1">
                <img src={successSVG} alt="success" />
                <p className="text-neutralWhite">{successMessage}</p>
              </div>
              <p className="text-neutralWhite">Thanks for completing the form, We will be in touch soon!</p>
          </div>
        
      )
      }
      <div className=" font-karla min-h-screen grid place-items-center bg-primaryGreenLighter ">
        <div className="bg-neutralWhite p-6 rounded-lg max-w-96 mx-4 my-4">
          <form action="" onSubmit={(event)=>event.preventDefault()} className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Contact Us</h1>
            <div id="Name Box" className="flex flex-col  sm:flex-row gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="Name" className="text-xs">
                  First Name *
                </label>
                <input
                  type="text"
                  name="Name"
                  ref={firstName}
                  className="w-full outline-none px-4 py-2 rounded-md border border-solid  border-grey500 hover:border-primaryGreenMedium cursor-pointer"
                />
                {errorMessage.firstName &&  <p className="text-errorRed text-xs">{errorMessage.firstName}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="Name" className="text-xs">Last Name *</label>
                <input
                  type="text"
                  name="Name"
                  ref={lastName}
                  className="w-full outline-none px-4 py-2 rounded-md border border-solid  border-grey500  hover:border-primaryGreenMedium cursor-pointer"
                />
               {errorMessage.lastName &&  <p className="text-errorRed text-xs">{errorMessage.lastName}</p>}
              </div>
            </div>
            <div id="email-box" className="flex flex-col gap-1">
              <label htmlFor="Email" className="text-xs">Email Address *</label>
              <input
                type="email"
                name="Email"
                ref={email}
                className="outline-none px-4 py-2 rounded-md border border-solid  border-grey500  hover:border-primaryGreenMedium cursor-pointer"
              ></input>
                {errorMessage.email &&  <p className="text-errorRed text-xs" >{errorMessage.email}</p>}
            </div>
            <div id="query-type" className="flex flex-col gap-1">
              <p className="text-xs">Query Type *</p>
              <div className="flex flex-col  sm:flex-row gap-2">
                <div
                  id="left-box"
                  className={`w-full p-3 rounded-md border border-solid  border-grey500 flex gap-1 items-center  hover:border-primaryGreenMedium cursor-pointer ${radioSelection=== "General"? "bg-primaryGreenLighter":""}`}
                >
                  <div onClick={()=>handlesRadio("General")}
                    id="Circle"
                    className="border border-solid border-grey500 w-4 h-4 rounded-full flex object-cover"
                  >
                    <img src={radioSVG} className={`w-full object-cover ${radioSelection === "General" ? "block" :"hidden"}`}></img>
                  </div>
                  <p className="text-xs">General Enquiry</p>
                </div>

                <div
                  id="right-box"
                  className={`w-full p-3 rounded-md border border-solid  border-grey500 flex gap-1 items-center  hover:border-primaryGreenMedium cursor-pointer ${radioSelection=== "Support"? "bg-primaryGreenLighter":""}`}
                >
                  <div onClick={()=>handlesRadio("Support")}
                    id="Circle"
                    className="border border-solid border-grey500 w-4 h-4 rounded-full flex"
                  >
                     <img src={radioSVG} className={`w-full object-cover ${radioSelection === "Support" ? "block" :"hidden"}`}></img>
                  </div>
                  <p className="text-xs">Support Request</p>
                </div>
              </div>
             {errorMessage.query &&(<p className="text-errorRed text-xs">{errorMessage.query}</p>)}
            </div>
            <div id="message-box" className="flex flex-col  gap-1">
              <p className="text-xs">Message *</p>
              <textarea ref={messageBox}
                className="w-full p-4 border border-grey500 rounded-md outline-none  hover:border-primaryGreenMedium cursor-pointer"
                rows="2"
                placeholder="Your custom message here..."
              ></textarea>
              {errorMessage.textbox &&  <p className="text-errorRed text-xs" >{errorMessage.textbox}</p>}
            </div>
            <div id="constent-box" className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div onClick={handlesCheckBox} id="square" className="border cursor-pointer border-solid broder-grey500 w-4 h-4">
                      <img src={checkSVG} className={`w-full ${selected ? "block" :"hidden"}`}></img>
                    </div>
                     <p className="text-xs"> I consent to being contacted by the team*</p>
                </div>
                {errorMessage.consent && (<p className="text-errorRed text-xs">{errorMessage.consent}</p>)}
            </div>
            <button onClick={handleSumbmit} className="p-3 bg-primaryGreenMedium text-neutralWhite rounded-lg hover:brightness-90 transition-all ease-in">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
