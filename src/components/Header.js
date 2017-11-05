import { h } from 'hyperapp';

import styles from './Header.css';

export default ({editingTitle, headerTitle, editTitle, updateTitle, saveTitle}) => {
  return (
    <div style={{height: '88px'}}>
      { editingTitle ?
        <TitleEdit headerTitle={headerTitle} updateTitle={updateTitle} saveTitle={saveTitle}/> :
        <TitleShow headerTitle={headerTitle} editTitle={editTitle}/>
      }
    </div>
  );
}

var TitleShow = ({headerTitle, editTitle}) => {
  return (
    <div class={styles['Header']}>
      <h1 class={styles['Header__text']} onclick={editTitle}>{headerTitle}</h1>
    </div>
  );
}

var TitleEdit = ({headerTitle, updateTitle, saveTitle}) => {
  return (
    <div class={styles['Header--editing']}>
      <input
        class={styles['Header__input']}
        value={headerTitle}
        onkeyup={updateTitle}
        onblur={saveTitle}
        oncreate={element => element.focus()}
      />
    </div>
  );
}
