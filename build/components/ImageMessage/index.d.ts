import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    userType?: 'user' | 'admin' | 'bot';
    text?: string;
    images?: string[];
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    imagesWidth?: number | string;
    [key: string]: any;
}
declare const ImageMessage: React.FC<Props>;
export default ImageMessage;
