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

### 16 July 2020 - v 1.0.0-alpha

- [x] Updated ChatUI Container

### 19 July 2020 - v1.0.1

- [x] Removed Container
- [x] Add TextMessage
- [x] Add NoteMessage

### 19 July 2020 - v1.0.2

- [x] Fixed Import

### 20 July 2020 - v1.0.3

- [x] Image Message
- [x] Button Message

### 21 July 2020 - v1.0.4

- [x] QuickReply Message

### 21 July 2020 - v1.0.5

- [x] Added Consumer - this is chat window from perspective of user or admin (user | admin)
- [x] Added element style and element class name for all chat bubble . using it for manual design override

### 22 July 2020 - v1.0.6

- [x] Minor Style Fixes

### 22 July 2020 - v1.0.7

- [x] Note Style Fixes

### 22 July 2020 - v1.0.7

- [x] Note Style Fixes

### 27 July 2020 - 1.0.8

- [x] Feed Post for Feed Type CRM

...

### 6 Aug 2020 - 1.0.12

- [x] Updated Feed For CRM

### 10 Sep 2020 - 1.0.13

- [x] Adds avatar support for all the chat components

### 14 Sep 2020 - 1.0.14

- [x] Fix minor style issue for avatar components

### 14 Sep 2020 - 1.0.15

- [x] Fix image avatar style issue for avatar components

# 16 Sep 2020 - 1.0.16

- [x] Added Video Type for Feed
- [x] Added Image Type for Feed

# 28 Sep 2020 - 1.0.17

- [x] ButtonGroupContainer style added
- [x] font size for msg time synced to 0.7rem
