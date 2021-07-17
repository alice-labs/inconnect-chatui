import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    text?: string | React.ReactNode;
    msgTime?: string | number;
    takenBy?: string;
    msgStatus?: 'failed' | 'pending' | 'sent';
    showMsgStatus?: boolean;
    intent?: 'notes' | 'success' | 'info' | 'lime' | 'danger';
    noteContainerClassName?: string;
    noteContainerStyle?: object;
    [key: string]: any;
}
declare const NoteMessage: React.FC<Props>;
export default NoteMessage;
