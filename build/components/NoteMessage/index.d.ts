import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    note?: string;
    msgTime?: string | number;
    takenBy?: string;
    msgStatus?: 'failed' | 'pending' | 'sent';
    showMsgStatus?: boolean;
    [key: string]: any;
}
declare const NoteMessage: React.FC<Props>;
export default NoteMessage;
