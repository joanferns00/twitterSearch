import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
//Created using, https://storybook.js.org/basics/guide-react/

storiesOf('Button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))

storiesOf('Modal', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))