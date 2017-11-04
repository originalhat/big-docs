import { h } from 'hyperapp';

import styles from './Article.css';

console.log(styles)

export default ({ query, content }, { }) => (
  <div class={styles['Article']}>
    <div class={styles['Search']}>
      <span class={styles['Search__prefix']}>big-docs</span>
      <input class={styles['Search__input']} type="query" value={query}/>
    </div>

    <div class={styles['Article__divider']}/>

    <h1 class={styles['Article__heading']}>Lorem ipsum dolor sit amet</h1>
    <article class={styles['Article__content']}>{content}</article>
  </div>
);

