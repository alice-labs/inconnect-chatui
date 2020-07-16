import * as React from 'react';
import ChatContainer from './index';
import { withInfo } from '@storybook/addon-info';
var styleOfStoryContainer = { background: '#184D47', margin: '0 auto', width: '90%', height: 180, padding: 20, color: 'white' };
export default { title: 'ChatUI Container', decorators: [withInfo] };
export var Container = function () { return (React.createElement("div", { style: styleOfStoryContainer },
    React.createElement(ChatContainer, null, "Simple Chat Container"))); };
Container.story = {
    parameters: {
        info: {
            inline: true,
            text: "\n            Initiate The ChatContainer, We Needed ChatContainer to Wrap the chat elements, You can Use div as well however **display: flex** is required as we are using flex layout\n            ~~~jsx\n            <ChatContainer>Simple Chat Container</ChatContainer>\n            ~~~\n  ",
        },
    },
};
//# sourceMappingURL=Container.stories.js.map