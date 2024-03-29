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
      postAvatar={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGK-9TBziG0y_mLZKttJBZ_dYlJ_j8tmJp7w&usqp=CAU'
      }
      postName={'A Social Media Page Name'}
      pageLink={'https://google.com'}
      postTime={'10h ago'}
      content='Donec et libero purus. Quisque ac erat nec tortor consectetur scelerisque a sed urna. Cras placerat tincidunt lacus. Phasellus ultrices diam vitae enim ornare, id tristique lectus lacinia. Morbi nec consequat nisl. Morbi et faucibus sem. Ut scelerisque turpis vel turpis pharetra dapibus. Vivamus quis neque a turpis sodales luctus in vitae lorem. Etiam varius, ante sed blandit egestas, arcu lacus consectetur ante, sit amet accumsan est lacus eget ipsum. Vivamus aliquet diam ac cursus convallis.'
      contentType='text'
      showAction={false}
      showCommentAction={true}
      handleCommentDelete={(comment: any) =>
        console.log(comment, 'is clicked for delete')
      }
      handleCommentHide={(comment: any) =>
        console.log(comment, 'is clicked for hide')
      }
      handleDelete={(reply: any) => console.log(reply, 'is Clicked for Delete')}
      handleEdit={(reply: any) => console.log(reply, 'is Clicked for Edit')}
      handleHide={(reply: any) => console.log(reply, 'is Clicked for Hide')}
      closeOnActionClick={true}
      commentData={{
        id: 0,
        name: 'A Ranodom Comment User',
        avatar:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        time: '4h ago',
        contentType: 'text',
        content: 'I want to Buy ! What is The price?',
        source: 'customer',
        link:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        isHighlighted: true,
        status: 'add',
        msgStatus: 'pending',
        showMsgStatus: true,
        repliedPrivately: true,
      }}
      replyContent={[
        {
          id: 0,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '4h ago',
          contentType: 'text',
          content: 'I want to Buy ! What is The price?',
          source: 'customer',
          link:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          isHighlighted: true,
          messageType: 'comment',
          status: 'add',
          msgStatus: 'pending',
          showMsgStatus: true,
          repliedBy: 'agent 007',
        },
        {
          id: 1,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'note',
          content: 'Note Created by Bot from the system',
          source: 'bot',
          isHighlighted: false,
          status: 'add',
          msgStatus: 'sent',
          showMsgStatus: true,
          messageType: 'comment',
          repliedBy: 'agent 007',
        },
        {
          id: 2,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '1h ago',
          contentType: 'image',
          content: 'abcd',
          image:
            'https://images.unsplash.com/photo-1595996403906-5548d25dd865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
          source: 'bot',
          messageType: 'Message',
          status: 'edited',
          msgStatus: 'pending',
          showMsgStatus: true,
        },
        {
          id: 3,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'text',
          content: 'This is Hidden',
          source: 'bot',
          isHighlighted: false,
          status: 'hidden',
          msgStatus: 'failed',
          showMsgStatus: true,
        },
        {
          id: 3,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'text',
          content: 'This is Deleted',
          source: 'bot',
          isHighlighted: false,
          status: 'remove',
          msgStatus: 'pending',
          showMsgStatus: true,
          repliedPrivately: true,
        },
      ]}
    />
  </div>
);
export const ExampleVideo = () => (
  <div style={styleOfStoryContainer}>
    <FeedPost
      postAvatar={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGK-9TBziG0y_mLZKttJBZ_dYlJ_j8tmJp7w&usqp=CAU'
      }
      postName={'A Social Media Page Name'}
      pageLink={'https://google.com'}
      postTime={'10h ago'}
      contentItem={
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
      content='Donec et libero purus. Quisque ac erat nec tortor consectetur scelerisque a sed urna. Cras placerat tincidunt lacus. Phasellus ultrices diam vitae enim ornare, id tristique lectus lacinia. Morbi nec consequat nisl. Morbi et faucibus sem. Ut scelerisque turpis vel turpis pharetra dapibus. Vivamus quis neque a turpis sodales luctus in vitae lorem. Etiam varius, ante sed blandit egestas, arcu lacus consectetur ante, sit amet accumsan est lacus eget ipsum. Vivamus aliquet diam ac cursus convallis.'
      contentType='video'
      commentData={{
        id: 0,
        name: 'A Ranodom Comment User',
        avatar:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        time: '4h ago',
        contentType: 'text',
        content: 'I want to Buy ! What is The price?',
        source: 'customer',
        link:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        isHighlighted: true,
        msgStatus: 'pending',
        showMsgStatus: true,
      }}
      replyContent={[
        {
          id: 0,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '4h ago',
          contentType: 'text',
          content: 'I want to Buy ! What is The price?',
          source: 'customer',
          link:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          isHighlighted: true,
          messageType: 'comment',
          msgStatus: 'sent',
          showMsgStatus: true,
        },
        {
          id: 1,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'note',
          content: 'Note Created by Bot from the system',
          source: 'bot',
          isHighlighted: false,
          msgStatus: 'pending',
          showMsgStatus: true,
        },
        {
          id: 2,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '1h ago',
          contentType: 'image',
          content:
            'https://images.unsplash.com/photo-1595996403906-5548d25dd865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
          source: 'bot',
          messageType: 'Message',
          msgStatus: 'pending',
          showMsgStatus: true,
        },
      ]}
    />
  </div>
);
export const ExampleImage = () => (
  <div style={styleOfStoryContainer}>
    <FeedPost
      postAvatar={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGK-9TBziG0y_mLZKttJBZ_dYlJ_j8tmJp7w&usqp=CAU'
      }
      postName={'A Social Media Page Name'}
      pageLink={'https://google.com'}
      postTime={'10h ago'}
      contentItem={[
        'https://images.unsplash.com/photo-1600196245390-039527aad831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1600185947497-9efadf13d099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      ]}
      content='Donec et libero purus. Quisque ac erat nec tortor consectetur scelerisque a sed urna. Cras placerat tincidunt lacus. Phasellus ultrices diam vitae enim ornare, id tristique lectus lacinia. Morbi nec consequat nisl. Morbi et faucibus sem. Ut scelerisque turpis vel turpis pharetra dapibus. Vivamus quis neque a turpis sodales luctus in vitae lorem. Etiam varius, ante sed blandit egestas, arcu lacus consectetur ante, sit amet accumsan est lacus eget ipsum. Vivamus aliquet diam ac cursus convallis.'
      contentType='image'
      commentData={{
        id: 0,
        name: 'A Ranodom Comment User',
        avatar:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        time: '4h ago',
        contentType: 'text',
        content: 'I want to Buy ! What is The price?',
        source: 'customer',
        link:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        isHighlighted: true,
        msgStatus: 'pending',
        showMsgStatus: true,
      }}
      commentBg={'#eff9ff'}
      replyContent={[
        {
          id: 0,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '4h ago',
          contentType: 'text',
          content: 'I want to Buy ! What is The price?',
          source: 'customer',
          link:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          isHighlighted: true,
          messageType: 'comment',
          msgStatus: 'pending',
          showMsgStatus: true,
        },
        {
          id: 1,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'note',
          content: 'Note Created by Bot from the system',
          source: 'bot',
          isHighlighted: false,
          msgStatus: 'pending',
          showMsgStatus: true,
        },
        {
          id: 2,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '1h ago',
          contentType: 'image',
          content:
            'https://images.unsplash.com/photo-1595996403906-5548d25dd865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
          source: 'bot',
          messageType: 'Message',
          msgStatus: 'pending',
          showMsgStatus: true,
        },
      ]}
    />
  </div>
);
export const ExampleEditReply = () => (
  <div style={styleOfStoryContainer}>
    <FeedPost
      postAvatar={
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGK-9TBziG0y_mLZKttJBZ_dYlJ_j8tmJp7w&usqp=CAU'
      }
      postName={'A Social Media Page Name'}
      pageLink={'https://google.com'}
      postTime={'10h ago'}
      contentItem={[
        'https://images.unsplash.com/photo-1600196245390-039527aad831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        'https://images.unsplash.com/photo-1600185947497-9efadf13d099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
      ]}
      content='Donec et libero purus. Quisque ac erat nec tortor consectetur scelerisque a sed urna. Cras placerat tincidunt lacus. Phasellus ultrices diam vitae enim ornare, id tristique lectus lacinia. Morbi nec consequat nisl. Morbi et faucibus sem. Ut scelerisque turpis vel turpis pharetra dapibus. Vivamus quis neque a turpis sodales luctus in vitae lorem. Etiam varius, ante sed blandit egestas, arcu lacus consectetur ante, sit amet accumsan est lacus eget ipsum. Vivamus aliquet diam ac cursus convallis.'
      contentType='image'
      showCommentAction={true}
      showHideCommentAction={true} //these are manual triggers to control each segment
      showDeleteCommentAction={true}
      showAction={true}
      showEditReplyAction={true}
      showHideReplyAction={true}
      showDeleteReplyAction={true}
      commentData={{
        id: 0,
        name: 'A Ranodom Comment User',
        avatar:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        time: '4h ago',
        contentType: 'text',
        content: 'I want to Buy ! What is The price?',
        source: 'customer',
        link:
          'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
        isHighlighted: true,
        msgStatus: 'pending',
        showMsgStatus: true,
      }}
      commentBg={'#eff9ff'}
      replyContent={[
        {
          id: 0,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '4h ago',
          contentType: 'text',
          content: 'I want to Buy ! What is The price?',
          source: 'customer',
          link:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          isHighlighted: true,
          messageType: 'comment',
          msgStatus: 'sent',
          showMsgStatus: true,
        },
        {
          id: 1,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '2h ago',
          contentType: 'note',
          content: 'Note Created by Bot from the system',
          source: 'bot',
          isHighlighted: false,
          msgStatus: 'sent',
          showMsgStatus: true,
        },
        {
          id: 2,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '1h ago',
          contentType: 'image',
          image:
            'https://images.unsplash.com/photo-1595996403906-5548d25dd865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80',
          content: 'lorem',
          source: 'bot',
          messageType: 'Message',
          msgStatus: 'sent',
          showMsgStatus: true,
        },
        {
          id: 3,
          name: 'A Ranodom User',
          avatar:
            'https://pixelmator-pro.s3.amazonaws.com/community/avatar_empty@2x.png',
          time: '1h ago',
          contentType: 'text',
          content: 'lorem Dolor Ipsum dolor adaf asfafafafa',
          source: 'bot',
          messageType: 'Message',
          msgStatus: 'sent',
          showMsgStatus: false,
        },
      ]}
      handleReplyCancel={(reply: any) => console.log(reply, 'reply cancelled')}
      handleReplyEdit={(reply: any, text: string, resetCallback: any) => {
        console.log(reply, text, 'reply Edited');
        resetCallback();
      }}
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
