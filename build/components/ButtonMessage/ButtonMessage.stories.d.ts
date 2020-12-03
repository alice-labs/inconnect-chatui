/// <reference types="react" />
import { withInfo } from '@storybook/addon-info';
declare const _default: {
    title: string;
    decorators: (typeof withInfo)[];
};
export default _default;
export declare const Example: {
    (): JSX.Element;
    story: {
        parameters: {
            info: {
                inline: boolean;
                text: string;
            };
        };
    };
};
