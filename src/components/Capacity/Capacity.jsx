import { LiaRulerCombinedSolid } from "react-icons/lia";
import { ImManWoman } from "react-icons/im";
import { FaChild } from "react-icons/fa";

import css from "./Capacity.module.css";

export default function Capacity({ capacity, size }) {
  return (
    <div className={css.capacity_container}>
      <div className={css.capacity}>
        <div className={css.capacity_adults}>
          <ImManWoman className={css.icon} />
          <span>{capacity.adults}</span>
        </div>
        {capacity.children > 0 && (
          <div className={css.capacity_kids}>
            <FaChild className={css.icon_kid} />
            <span>{capacity.children}</span>
          </div>
        )}
      </div>
      <div className={css.size}>
        <LiaRulerCombinedSolid className={css.icon} />
        <span>{size} &#13217;</span>
      </div>
    </div>
  );
}
