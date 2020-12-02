import * as React from 'react';
import GalleryMessage from './index';
import { withInfo } from '@storybook/addon-info';

const styleOfStoryContainer = {
  border: '1px solid #184D47',
  borderRadius: '10px',
  margin: '0 auto',
  width: '90%',
  padding: 20,
};

export default { title: 'GalleryMessage', decorators: [withInfo] };

export const Example = () => (
  <div style={styleOfStoryContainer}>
    <GalleryMessage
      text='hello user this are our product list'
      msgTime={'4h ago'}
      consumer={'user'}
      hasTitle={true}
      avatar='https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg'
      galleryData={[
        {
          id: 0,
          title: 'Pureit Mineral Ultima RO + UV',
          subtitle: '2500$',
          image:
            'https://images.unsplash.com/photo-1606830079880-e90bd08e9a98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          buttons: [
            {
              id: 1,
              title: 'Button 01',
              methodType: 'url',
              url: 'https://getalice.ai',
              isDisabled: false,
            },
            {
              id: 2,
              title: 'Button 02',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
            {
              id: 3,
              title: 'Button 03',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: true,
            },
          ],
        },
        {
          id: 1,
          title: 'Random Dear Visit',
          subtitle: '150$',
          image:
            'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80',
          buttons: [
            {
              id: 1,
              title: 'Button 01',
              methodType: 'url',
              url: 'https://getalice.ai',
              isDisabled: false,
            },
            {
              id: 2,
              title: 'Button 02',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
            {
              id: 3,
              title: 'Button 03',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
          ],
        },
        {
          id: 2,
          title: 'Random Visit',
          subtitle: '150$',
          image:
            'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80',
          buttons: [
            {
              id: 1,
              title: 'Button 01',
              methodType: 'url',
              url: 'https://getalice.ai',
              isDisabled: false,
            },
            {
              id: 2,
              title: 'Button 02',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
            {
              id: 3,
              title: 'Button 03',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
          ],
        },
        {
          id: 3,
          title: 'Random Dear',
          subtitle: '150$',
          image:
            'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80',
          buttons: [
            {
              id: 1,
              title: 'Button 01',
              methodType: 'url',
              url: 'https://getalice.ai',
              isDisabled: false,
            },
            {
              id: 2,
              title: 'Button 02',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
            {
              id: 3,
              title: 'Button 03',
              methodType: 'function',
              action: () => console.log('Button 02 clicked'),
              isDisabled: false,
            },
          ],
        },
      ]}
    />
    {/*<GalleryMessage*/}
    {/*text='hello user this are our product list'*/}
    {/*msgTime={'4h ago'}*/}
    {/*consumer={'admin'}*/}
    {/*avatar='https://misx-assets.s3-ap-southeast-1.amazonaws.com/robot.svg'*/}
    {/*/>*/}
  </div>
);

Example.story = {
  parameters: {
    info: {
      inline: true,
      text: `Interface List
 
   ~~~js
    <GalleryMessage
    style={{width: '100px'}}
    className={'abcd'}
    userType='user'
    text={'hello admin'}};
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
