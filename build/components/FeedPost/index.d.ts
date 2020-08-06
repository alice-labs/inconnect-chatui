import * as React from 'react';
interface replyProps {
    id: null | number;
    name: string;
    avatar: any;
    time: string;
    contentType: string;
    content: any;
    source: string;
    link?: string;
    isHighlighted?: boolean;
    messageType?: string;
}
interface Props {
    style?: object;
    className?: string;
    postAvatar?: string;
    postName?: string;
    postTime?: string;
    content?: any;
    contentType?: string;
    replyContent: replyProps[];
    pageLink: string;
    commentData: replyProps;
    [key: string]: any;
}
declare const FeedPost: React.FC<Props>;
export default FeedPost;
