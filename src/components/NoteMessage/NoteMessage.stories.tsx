import * as React from 'react';
import NoteMessage from './index';

import { withInfo } from '@storybook/addon-info';

const styleOfStoryContainer = {
  border: '1px solid #184D47',
  borderRadius: '10px',
  margin: '0 auto',
  width: '90%',
  padding: 20,
};

export default { title: 'NoteMessage', decorators: [withInfo] };

export const Example = () => (
  <div style={styleOfStoryContainer}>
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      msgStatus='sent'
    />
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible,Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
    />
  </div>
);

export const IntentExample = () => (
  <div style={styleOfStoryContainer}>
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      intent='notes'
      msgStatus='pending'
    />
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      intent='success'
      msgStatus='sent'
    />
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      intent='info'
      msgStatus='failed'
    />
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      intent='lime'
      msgStatus='sent'
    />
    <NoteMessage
      note='Redirected to Product Team! please fix this As soon as possible'
      msgTime={'4h ago'}
      takenBy={'Mehran Kader'}
      showMsgStatus={true}
      intent='danger'
      msgStatus='sent'
    />
  </div>
);

Example.story = {
  parameters: {
    info: {
      inline: true,
      text: `This is used to show notes with proper props`,
    },
  },
};
