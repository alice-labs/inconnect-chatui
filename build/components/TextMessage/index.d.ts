import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    type?: 'user' | 'admin' | 'bot';
    text?: string;
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    [key: string]: any;
}
declare const TextMessage: React.FC<Props>;
export default TextMessage;
