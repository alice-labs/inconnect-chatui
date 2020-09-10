import * as React from 'react';
interface Props {
    userType?: 'user' | 'admin' | 'bot';
    consumer?: 'user' | 'admin' | 'bot';
    avatar?: string | React.ReactNode;
    children: React.ReactNode;
}
declare const AvatarContainer: React.FC<Props>;
export default AvatarContainer;
