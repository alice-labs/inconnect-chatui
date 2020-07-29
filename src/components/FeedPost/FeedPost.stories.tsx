import * as React from 'react';
import FeedPost from './index';

import { withInfo } from '@storybook/addon-info';

const styleOfStoryContainer = {
  border: '1px solid #184D47',
  borderRadius: '10px',
  margin: '0 auto',
  width: '90%',
  padding: 20,
  background: '#f2f6f7',
};

export default { title: 'FeedPost', decorators: [withInfo] };

export const Example = () => (
  <div style={styleOfStoryContainer}>
      <FeedPost
          postAvatar={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGK-9TBziG0y_mLZKttJBZ_dYlJ_j8tmJp7w&usqp=CAU'}
          postName={'A Social Media Page Name'}
          pageLink={'https://google.com'}
          postTime={'10h ago'}
          content='Donec et libero purus. Quisque ac erat nec tortor consectetur scelerisque a sed urna. Cras placerat tincidunt lacus. Phasellus ultrices diam vitae enim ornare, id tristique lectus lacinia. Morbi nec consequat nisl. Morbi et faucibus sem. Ut scelerisque turpis vel turpis pharetra dapibus. Vivamus quis neque a turpis sodales luctus in vitae lorem. Etiam varius, ante sed blandit egestas, arcu lacus consectetur ante, sit amet accumsan est lacus eget ipsum. Vivamus aliquet diam ac cursus convallis.'
          contentType='text'
          commentData={{
              id: 0,
              name: 'A Ranodom Comment User',
              avatar: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
              time: '4h ago',
              contentType: 'text',
              content: 'I want to Buy ! What is The price?',
              source: 'customer',
              link: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          }}
          replyContent={[{
              id: 0,
              name: 'A Ranodom User',
              avatar: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
              time: '4h ago',
              contentType: 'text',
              content: 'I want to Buy ! What is The price?',
              source: 'customer',
              link: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          },{
              id: 1,
              name: 'A Ranodom User',
              avatar: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
              time: '2h ago',
              contentType: 'note',
              content: 'Note Created by Bot from the system',
              source: 'bot'
          },{
              id: 2,
              name: 'A Ranodom User',
              avatar: 'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
              time: '1h ago',
              contentType: 'image',
              content: 'https://images.unsplash.com/photo-1595996403906-5548d25dd865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
              source: 'bot'
          }]}
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
