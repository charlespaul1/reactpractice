import React, { useState } from "react";
import "../components/AccordionStyles.css"


const Accordion = (props) => {
  const [isExpanded, setIsExpanded] =  useState(false);

  const toggleAccordion = () =>{
    setIsExpanded(!isExpanded)

  };
  return (
    <div className="faq">
      {/* rendering a button the title and + and  - */}
      <button  className="btn" onClick={toggleAccordion}>
        {props.title} {isExpanded ? '-' : '+'}
      </button>
      {isExpanded && <div>{props.children}</div>}
      
    </div>
  )
}

export default Accordion
