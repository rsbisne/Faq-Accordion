import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem.js";
import "./index.css";
const Accordion = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: "What is React?",
        content:
          "React is a popular, declarative approach, state driven library.",
      },
      {
        id: 2,
        title: "When was React created and by whom?",
        content: "React was created by Facebook in 2013.",
      },
      {
        id: 3,
        title: "What is used for routing in React?",
        content: "React Router Package is used for routing in React.",
      },
    ]);
  }, []);

  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <AccordionItem items={items} />
    </div>
  );
};

export default Accordion;
