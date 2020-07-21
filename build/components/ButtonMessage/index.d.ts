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
    text?: string;
    buttonData?: buttonDataProps[];
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    consumer?: 'user' | 'admin' | 'bot';
    elementStyle?: object;
    elementClassName?: string;
    [key: string]: any;
}
declare const ButtonMessage: React.FC<Props>;
export default ButtonMessage;
