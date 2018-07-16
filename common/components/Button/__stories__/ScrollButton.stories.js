import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Element } from 'react-scroll';
import ScrollButton from '../ScrollButton';

storiesOf('Common/ScrollButton', module)
  .addDecorator(withKnobs)
  .add('default',
    withInfo()(() => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '200vh',
          justifyContent: 'space-between',
          paddingTop: '1rem',
        }}
      >
        <ScrollButton
          fullWidth={boolean('fullWidth', false)}
          href={text('href', 'anchor')}
          onClick={action('ScrollButton Clicked!')}
          onKeyDown={action('Enter key pressed!')}
          tabIndex={number('tabIndex', 0)}
          theme={select('theme', ['primary', 'secondary', 'slate'])}
        >
          {text('children', 'Click Me! (will scroll down)')}
        </ScrollButton>

        <Element name="anchor">
          Scroll To Me
        </Element>
      </div>
    )));
