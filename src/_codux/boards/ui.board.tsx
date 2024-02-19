import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { App } from '../../components/App.jsx';

export default createBoard({
  name: 'UI',
  Board: () => <App />,
  isSnippet: true,
});
