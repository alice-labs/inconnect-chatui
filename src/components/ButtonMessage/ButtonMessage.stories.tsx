import * as React from 'react';
import ButtonMessage from './index';
import { withInfo } from '@storybook/addon-info';

const styleOfStoryContainer = {
  border: '1px solid #184D47',
  borderRadius: '10px',
  margin: '0 auto',
  width: '90%',
  padding: 20,
};

export default { title: 'ButtonMessage', decorators: [withInfo] };

export const Example = () => (
  <div style={styleOfStoryContainer}>
    <ButtonMessage
      text='hello user this are our product list'
      msgTime={'4h ago'}
      consumer={'admin'}
      showMsgStatus={true}
      msgStatus='sent'
      buttonData={[
        {
          title: 'Button One',
          methodType: 'url',
          url: 'https://getalice.ai',
        },
        {
          title: 'Button Two',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
        },
        {
          title: 'Button Three',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
          isDisabled: true,
        },
      ]}
      avatar='https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg'
    />
    <ButtonMessage
      text='hello user this are our product list'
      msgTime={'4h ago'}
      consumer={'user'}
      elementStyle={{ background: '#c0cbd0', color: 'white' }}
      elementClassName={'some-style'}
      buttonContainerStyle={{background: 'purple'}}
      showMsgStatus={true}
      msgStatus='pending'
      buttonData={[
        {
          title: 'Button One',
          methodType: 'url',
          url: 'https://getalice.ai',
        },
        {
          title: 'Button Two',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
        },
        {
          title: 'Button Three',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
          isDisabled: true,
        },
      ]}
      avatar='https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg'
    />
    <ButtonMessage
      text='hello user this are our product list'
      msgTime={'4h ago'}
      consumer={'user'}
      elementClassName={'some-style'}
      showMsgStatus={true}
      msgStatus='failed'
      showRepliedBy={true}
      repliedBy='mehran'
      buttonData={[
        {
          title: 'Button One',
          methodType: 'url',
          url: 'https://getalice.ai',
        },
        {
          title: 'Button Two',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
        },
        {
          title: 'Button Three',
          methodType: 'function',
          action: () => {
            console.log('clicked on  button two');
          },
          isDisabled: true,
        },
      ]}
      avatar='https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg'
    />
  </div>
);

Example.story = {
  parameters: {
    info: {
      inline: true,
      text: `Interface List
   ~~~jsx
    <ButtonMessage
    style={{width: '100px'}}
    className={'abcd'}
    userType='user'
    text={'hello admin'}};
    buttonContainerStyle={{...styleObject}}
    buttonData={[{
        title: 'Button Title',
        methodType: 'url',
        url: 'https://google.com',
        className: 'some-class__name',
        style: {{custom style pass to specific button}}
        rest: 'any key will pass directly to button'
     },
    ...more
    ]}
    msgTime={'4h Ago'}
    repliedBy={'Admin name'};
    showRepliedBy={true};
    rest={'any it wil pass to container div};
    />
   ~~~
  `,
    },
  },
};
