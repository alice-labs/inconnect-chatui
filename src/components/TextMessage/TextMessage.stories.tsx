import * as React from 'react';
import TextMessage from './index';
import { withInfo } from '@storybook/addon-info';
import { css } from 'glamor';

const changeStyle = css({
  background: 'green',
});

const styleOfStoryContainer = {
  border: '1px solid #184D47',
  borderRadius: '10px',
  margin: '0 auto',
  width: '90%',
  padding: 20,
};

export default { title: 'TextMessage', decorators: [withInfo] };

export const ExampleAdmin = () => (
  <div style={styleOfStoryContainer}>
    <TextMessage
      userType='user'
      text='hello admin'
      consumer={'admin'}
      msgTime={'4h ago'}
    />
    <TextMessage
      userType='admin'
      text='How Can we help you?'
      consumer={'admin'}
      msgTime={'3h ago'}
    />
    <TextMessage
      userType='admin'
      elementClassName={`${changeStyle}`}
      text='Please Fix payment issue'
      consumer={'admin'}
      msgTime={'3h ago'}
      showRepliedBy={true}
      repliedBy={'John Doe'}
    />
    <TextMessage
      userType='user'
      consumer={'admin'}
      elementStyle={{ background: 'orange', color: 'white' }}
      text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cice'
    />
  </div>
);
export const ExampleUser = () => (
  <div style={styleOfStoryContainer}>
    <TextMessage
      userType='user'
      text='hello admin'
      consumer={'user'}
      msgTime={'4h ago'}
    />
    <TextMessage
      userType='admin'
      text='How Can we help you?'
      consumer={'user'}
      msgTime={'3h ago'}
    />
    <TextMessage
      userType='admin'
      text='Please Fix payment issue'
      consumer={'user'}
      msgTime={'3h ago'}
      showRepliedBy={true}
      repliedBy={'John Doe'}
    />
    <TextMessage
      userType='user'
      consumer={'user'}
      text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cice'
    />
  </div>
);

ExampleAdmin.story = {
  parameters: {
    info: {
      inline: true,
      text: `This is for simple text chat`,
    },
  },
};

ExampleUser.story = {
  parameters: {
    info: {
      inline: true,
      text: `This is for simple text chat`,
    },
  },
};
