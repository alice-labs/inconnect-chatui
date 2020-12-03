import * as React from 'react';
interface buttonDataProps {
    id?: number;
    title?: string;
    methodType?: 'url' | 'function';
    url?: string;
    action?: any;
    isDisabled?: boolean;
    style?: object;
    className?: string;
    [key: string]: any;
}
interface galleryProps {
    id: number;
    title: string | null;
    subtitle: string | null;
    image: string | null;
    buttons?: buttonDataProps[];
}
interface Props {
    style?: object;
    className?: string;
    text?: string;
    galleryData: galleryProps[];
    msgTime?: string | number;
    repliedBy?: string;
    showRepliedBy?: boolean;
    consumer?: 'user' | 'admin' | 'bot';
    elementStyle?: object;
    elementClassName?: string;
    avatar?: string | React.ReactNode;
    hasTitle?: boolean;
    cellSpacing?: number;
    carouselWidth?: string;
    carouselHeight?: string;
    slideToShow?: number;
    galleryItemClassName?: string;
    [key: string]: any;
}
declare const GalleryMessage: React.FC<Props>;
export default GalleryMessage;
