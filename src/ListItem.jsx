import { useReducer } from 'react';
import styles from './listitem.module.css';
import { STATUS } from './utils';

export default function ListItem({ item, reducer }) {
  const [state, dispatch] = useReducer(reducer, item);

  return (
    <li className={styles.listitem}>
      <h3>{state.item_name}</h3>
      <p>{state.status}</p>
      <p>buttons to change state</p>
    </li>
  );
}
