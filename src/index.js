import { app } from 'hyperapp';

import actions from './actions';
import state   from './reducers';
import view    from './components/Article';

app({
  state,
  actions,
  view,
});

