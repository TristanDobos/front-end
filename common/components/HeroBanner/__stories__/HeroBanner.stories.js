import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import HeroBanner from '../HeroBanner';

storiesOf('Common/HeroBanner', module)
  .addDecorator(withKnobs)
  .add('default',
    withInfo()(() => (
      <HeroBanner
        imageSrc={text('imageSrc',
          'https://s3.amazonaws.com/operationcode-assets/heroBanners/churchill.jpg')}
        title={text('title', 'Hero Banner')}
        subtitle={text('subtitle', '')}
      >
        {text('children', '')}
      </HeroBanner>
    )));
