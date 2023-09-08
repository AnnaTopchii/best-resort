import React, { useState } from "react";

import css from "./Faq.module.css";
import faq from "../../json/faq.json";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function Faq() {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = (id) => {
    if (selectedQuestionId === id) {
      setSelectedQuestionId(null);
    } else {
      setSelectedQuestionId(id);
    }
  };

  return (
    <ul className={css.container}>
      {faq.map((item) => (
        <li key={item.id}>
          <div className={css.item}>
            <p className={css.question}>{item.question}</p>
            <button
              className={css.btn}
              onClick={() => handleQuestionClick(item.id)}
            >
              {selectedQuestionId === item.id ? (
                <IoChevronUpSharp className={css.icon} />
              ) : (
                <IoChevronDownSharp className={css.icon} />
              )}
            </button>
          </div>

          {selectedQuestionId === item.id && (
            <p className={css.answer}>{item.answer}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
