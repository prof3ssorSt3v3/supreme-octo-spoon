import { useReducer } from 'react';
import styles from './listitem.module.css';

export default function ListItem({ item }) {
  console.log(item);

  return (
    <li className={styles.listitem}>
      <h3>{item.item_name}</h3>
      <p>buttons to change state</p>
    </li>
  );
}
