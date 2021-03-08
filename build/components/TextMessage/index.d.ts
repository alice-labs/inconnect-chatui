import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    userType?: 'user' | 'admin' | 'bot';
    text?: string;
    consumer?: 'user' | 'admin' | 'bot';
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    elementStyle?: object;
    elementClassName?: string;
    showInfo?: boolean;
    avatar?: string | React.ReactNode;
    msgStatus?: 'failed' | 'pending' | 'sent';
    showMsgStatus?: boolean;
    [key: string]: any;
}
declare const TextMessage: React.FC<Props>;
export default TextMessage;
