import { h } from 'hyperapp';

import styles from './Article.css';

import Search from './Search';

export default (state, actions) => (
  <div class={styles['Article']}>
    <Search searchAction={actions.search} />

    <div class={styles['Article__divider']}/>

    <h1 class={styles['Article__heading']}>Lorem ipsum dolor sit amet</h1>
    <article class={styles['Article__content']}>{state.content}</article>

    <h2>{state.query}</h2>
  </div>
);

