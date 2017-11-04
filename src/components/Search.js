import { h } from 'hyperapp';

import styles from './Search.css';

export default ({searchAction}) => {
  return (
    <div class={styles['Search']}>
      <span class={styles['Search__prefix']}>big-docs</span>
      <input class={styles['Search__input']} type="query" onkeyup={searchAction}/>
    </div>
  );
}
