import { h } from 'hyperapp';

import styles from './Counter.css';

console.log(styles)

export default ({ num }, { add, sub }) => (
  <div class={styles['Counter']}>
    <h1>Big Docs</h1>
    <p><em>With JSX and Webpack</em></p>

    <hr />

    <section>
      <button
        class="sub"
        onclick={sub}
        disabled={num < 1}
      >
        -
      </button>
      <h1 class='count'>{num}</h1>
      <button
        class="add"
        onclick={add}
      >
        +
      </button>
    </section>
  </div>
);

