import * as React from 'react';
interface Props {
    style?: object;
    className?: string;
    note?: string;
    msgTime?: string | number;
    takenBy?: string;
    [key: string]: any;
}
declare const NoteMessage: React.FC<Props>;
export default NoteMessage;
