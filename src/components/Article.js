import { h } from 'hyperapp';

import styles from './Article.css';

import Search from './Search';
import Header from './Header';

export default (state, actions) => (
  <div class={styles['Article']}>
    <Search searchAction={actions.search}/>

    <div class={styles['Article__divider']}/>

    {state.query ?
      <span>No search results found: "{state.query}"</span> :
      <div>
        <Header
          editingTitle={state.editingTitle}
          headerTitle={state.title}
          editTitle={actions.editTitle}
          updateTitle={actions.updateTitle}
          saveTitle={actions.saveTitle}
        />

        <article class={styles['Article__content']}>{state.content}</article>
      </div>
    }
  </div>
);

