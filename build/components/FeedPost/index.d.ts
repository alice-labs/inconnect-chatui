import * as React from 'react';
interface replyProps {
    id: null | number;
    name: string;
    avatar: string | null | undefined;
    time: string;
    contentType: string;
    content: any;
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
    [key: string]: any;
}
declare const FeedPost: React.FC<Props>;
export default FeedPost;
