import { RiContactsFill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";
import css from "./Contact.module.css" 

export default function Contact({ contact: { id, name, number }, onDelete }) {
    return (
        <div className={css.wrap}>
          <div>
            <div className={css.textPlusIcon}>
              <RiContactsFill />
              <p>{name}</p>
            </div>
            <div className={css.textPlusIcon}>
              <BiSolidPhone className={css.noMargin} />
              <p className={css.noMargin}>{number}</p>
            </div>
          </div>
    
          <button className={css.button} type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      );

}