import * as React from 'react';
import ChatContainer from './index';
import { withInfo } from '@storybook/addon-info';

const styleOfStoryContainer = {background: '#184D47', margin: '0 auto', width: '90%', height: 180, padding: 20, color: 'white'};

export default { title: 'ChatUI Container', decorators: [withInfo] };

export const Container = () => (
 <div style={styleOfStoryContainer}>
     <ChatContainer>Simple Chat Container</ChatContainer>
 </div>
);

Container.story = {
  parameters: {
    info: {
      inline: true,
        text: `
            Initiate The ChatContainer, We Needed ChatContainer to Wrap the chat elements, You can Use div as well however **display: flex** is required as we are using flex layout
            ~~~jsx
            <ChatContainer>Simple Chat Container</ChatContainer>
            ~~~
  `,
    },
  },
};
