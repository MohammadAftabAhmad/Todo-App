import React, {useState} from 'react';

function About() {
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  //main coding 
   const [mystyle, setmystyle] = useState({
     color:'black',
     backgroundColor:'white'
   })
   const [btntext, setbtntext] = useState("Enable Darkmode")
     const toggleStyle=()=>{
         if(mystyle.color== 'black'){
        setmystyle({
        color:'white',  
      backgroundColor:'black'
      })
      setbtntext("Enable Lightmode")
    }
    
     
    
    else{
      setmystyle({
        color:'black',
     backgroundColor:'white'
      })
      setbtntext("Enable Darkmode")
    }
   }
   
   


  return (
    <div className="container p-20 " style={mystyle}>
      <h1>About Us</h1>
    <div className="border rounded divide-y " id="accordionExample" >
      {[1, 2, 3].map((index) => (
        <div key={index} className="accordion-item">
          <h2 className="accordion-header" >
            <button
              onClick={() => toggleItem(index)}
              className={`w-full text-left p-4 font-medium focus:outline-none transition ${
                openItem === index ? 'bg-gray-100' : 'bg-white'
              }`} style={mystyle}
              aria-expanded={openItem === index}
              aria-controls={`collapse${index}`}
            >
              Accordion Item #{index}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse transition-all duration-300 ease-in-out overflow-hidden ${
              openItem === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="accordion-body p-4 bg-white" style={mystyle}>
              <strong>This is the item’s accordion body.</strong> It is {openItem === index ? 'shown' : 'hidden'} by default. You can modify this with custom CSS or Tailwind classes. Just about any HTML can go within the <code>.accordion-body</code>, though transitions may limit overflow.
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
    <button onClick={toggleStyle} className='bg-gray-500 text-white p-2 m-5 hover:bg-gray-900 cursor-pointer '>{btntext}</button>
    </div>
    </div>
  );
}

export default About;