<img src="https://github.com/alice-labs/inconnect-chatui/blob/master/src/assets/logo.png?raw=true" width="60%">

## Demo

https://chatui.dev.getalice.ai/

[**See Demo Here**](https://chatui.dev.getalice.ai)

## How to Use

Install **[inconnect-chat-ui](https://github.com/alice-labs/inconnect-chatui)** as dependency

```js
npm i inconnect-chat-ui --save
```

or if you use yarn

```js
yarn add inconnect-chat-ui
```

In your component first import

```jsx
import { TextMessage } from 'inconnect-chat-ui';
```

## API Documentation

[**See Storybook**]('http://chatui.dev.inconnect.ai/')

## Develop

Clone the repo from github

```js
$ git clone https://github.com/alice-labs/inconnect-chatui
```

Install Dependencies

```js
$ yarn install
```

Then, Run storybook

```js
$ yarn storybook
```

To run tests

```js
$ yarn test
```

## How to Contribute

Fork the repo. pull the master branch if required. [**Create a issue**](https://github.com/alice-labs/inconnect-chatui/issues) why we need this feature, then create your **feature branch** do your changes. write **test code** if required. and Send a **Pull Request** . PR's are always welcome!

## Release log

### 16 July 2020 - v 1.0.0-alpha 🎉

- Updated ChatUI Container

### 19 July 2020 - v1.0.1 🎉

- Removed Container
- Add TextMessage
- Add NoteMessage

### 19 July 2020 - v1.0.2 🎉

- Fixed Import

### 20 July 2020 - v1.0.3 🎉

- Image Message
- Button Message

### 21 July 2020 - v1.0.4 🎉

- QuickReply Message

### 21 July 2020 - v1.0.5 🎉

- Added Consumer - this is chat window from perspective of user or admin (user | admin)
- Added element style and element class name for all chat bubble . using it for manual design override

### 22 July 2020 - v1.0.6 🎉

- Minor Style Fixes

### 22 July 2020 - v1.0.7 🎉

- Note Style Fixes

### 22 July 2020 - v1.0.7 🎉

- Note Style Fixes

### 27 July 2020 - 1.0.8 🎉

- Feed Post for Feed Type CRM

...

### 6 Aug 2020 - 1.0.12 🎉

- Updated Feed For CRM

### 10 Sep 2020 - 1.0.13 🎉

- Adds avatar support for all the chat components

### 14 Sep 2020 - 1.0.14 🎉

- Fix minor style issue for avatar components

### 14 Sep 2020 - 1.0.15 🎉

- Fix image avatar style issue for avatar components

### 16 Sep 2020 - 1.0.16 🎉

- Added Video Type for Feed
- Added Image Type for Feed

### 28 Sep 2020 - 1.0.17 🎉

- ButtonGroupContainer style added
- font size for msg time synced to 0.7rem

### 29 Sep 2020 - 1.0.18 🎉

- Fix repliedBy only for admin issue

### 23 Nov 2020 - 1.0.21 🎉

- Added Action as hide delete edit for Feed Post
- added some minor flow props to give user more control like, `closeOnActionClick, showAction, commentBg` etc

### 24 Nov 2020 - 1.0.22 🎉

- Feed Post added design for Hide Delete edited
- Few design Changes for Feed post

### 27 Nov 2020 - 1.0.23 🎉

- Added Props `moreButtonHeightWidth` to adjust action button height width

### 29 Nov 2020 - 1.0.24 🎉

- changed comment action control using `showCommentAction` and their handle method for hide and delete only

### 02 Dec 2020 - 1.0.25 🎉

- fixed status from `hidden` to `hide` and `active` to `add`

### 02 Dec 2020 - 1.2.0 🎉

- Added Gallery Block component

### 02 Dec 2020 - 1.2.1 🎉

- Minor Style Fix
- Updated Import for main index file

### 02 Dec 2020 - 1.2.2 🎉

- Minor Style Fix,
- added props `galleryItemClassName` into `GalleryMessage` component

### 02 Dec 2020 - 1.2.3 🎉

- changed delete status for feed post from `deleted` to `remove`

### 09 Dec 2020 - 1.2.4 🎉

- Added Edit Options for Feed post reply see props and storybook for example. customer type users cannot be edited

### 15 Dec 2020 - 1.2.5 🎉

- Fix gallery item height issue

### 15 Dec 2020 - 1.2.6 🎉

- Fix gallery item font sizes

### 15 Dec 2020 - 1.2.7 🎉

- Fix gallery item replied by spacing

### March 2021 - 1.2.8 -1.3.0 🎉

- Send status and prop to control it
- Minor Css fixes
- Avatar Container will show avatar from top

### 10 March 2021 - 1.3.1 🎉

- Change note style, added intents to it (will implement popover later)

### 16 March 2021 - 1.3.2 🎉

- Fixed Text Message default Style
- Fixed Message time typo `&nsbp;`
- Added `|` in interval of showing time or other info

### 16 March 2021 - 1.3.3 🎉

- Fixed Elements Style for QuickReply, Image Message, Gallery, Button

### 16 March 2021 - 1.3.5 🎉

- Fixed Button Style, fixed gallery issues

### 16 March 2021 - 1.3.6 🎉

- Fixed Button Style

### 2 July 2021 - 1.3.7

- added react-linkify to all text based layout now any text has link will show
