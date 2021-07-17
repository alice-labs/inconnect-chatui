import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    userType?: 'user' | 'admin' | 'bot';
    text?: string | React.ReactNode;
    images?: string[];
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    imagesWidth?: number | string;
    showPreview?: boolean;
    consumer?: 'user' | 'admin' | 'bot';
    elementStyle?: object;
    elementClassName?: string;
    avatar?: string | React.ReactNode;
    msgStatus?: 'failed' | 'pending' | 'sent';
    showMsgStatus?: boolean;
    [key: string]: any;
}
declare const ImageMessage: React.FC<Props>;
export default ImageMessage;
