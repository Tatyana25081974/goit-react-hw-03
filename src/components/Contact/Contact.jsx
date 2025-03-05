import { FaPhoneAlt, FaUser } from "react-icons/fa"; 
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {contact.name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {contact.number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </li>
  );
}
