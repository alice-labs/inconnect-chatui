import * as React from 'react';
interface buttonDataProps {
    title: string;
    methodType?: 'url' | 'function';
    url?: string;
    action?: any;
    isDisabled?: boolean;
    className?: string;
    style?: object;
    [key: string]: any;
}
interface Props {
    style?: object;
    className?: string;
    text?: string | React.ReactNode;
    buttonData?: buttonDataProps[];
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    consumer?: 'user' | 'admin' | 'bot';
    elementStyle?: object;
    elementClassName?: string;
    avatar?: string | React.ReactNode;
    msgStatus?: 'failed' | 'pending' | 'sent';
    showMsgStatus?: boolean;
    [key: string]: any;
}
declare const QuickReplyMessage: React.FC<Props>;
export default QuickReplyMessage;
