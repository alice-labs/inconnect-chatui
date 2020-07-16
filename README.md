<img src="https://i.ibb.co/rpDjwVM/cover.png" width="60%">

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9ff431a574974b198703608d4da703c4)](https://www.codacy.com/manual/sazzadsazib_2/react-picture-grid?utm_source=github.com&utm_medium=referral&utm_content=sazzadsazib/react-picture-grid&utm_campaign=Badge_Grade) ![GitHub top language](https://img.shields.io/github/languages/top/sazzadsazib/react-picture-grid) ![GitHub language count](https://img.shields.io/github/languages/count/sazzadsazib/react-picture-grid) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-picture-grid) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/sazzadsazib/react-picture-grid) ![npm](https://img.shields.io/npm/dy/react-picture-grid) ![NPM](https://img.shields.io/npm/l/react-picture-grid) ![npm](https://img.shields.io/npm/v/react-picture-grid) ![GitHub Release Date](https://img.shields.io/github/release-date/sazzadsazib/react-picture-grid) ![GitHub last commit](https://img.shields.io/github/last-commit/sazzadsazib/react-picture-grid)

## Demo

[**See Demo Here**](https://react-picture-grid.netlify.com)

## How to Use

Install **[react-picture-grid](https://github.com/sazzadsazib/react-picture-grid)** as dependency

```js
npm i react-picture-grid --save
```

or if you use yarn

```js
yarn install react-picture-grid
```

In your component first import

```jsx
import { ReactPictureGrid } from 'react-picture-grid';
```

Set your data

```js
const data = [
  {
    image:
      'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 01',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    title: 'Nature 02',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80',
    title: 'Nature 03',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Nature 04',
    description: 'This picture is taken from unsplash.com',
  },
];
```

then call component

```jsx
<ReactPictureGrid data={data} showTitle gap={10} />
```

## API Documentation

| Prop           | Type                | Details                                                                                                                   |
| -------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| data           | array of data props | This is the basic data array for your picture gallery. Please see Data prop to know how to send data or see example above |
| showTitle      | boolean             | If this is true it will show title and description from data prop.                                                        |
| showPreview    | boolean             | Allows you to see preview                                                                                                 |
| gap            | number              | The gap between each picture grid. gap is in px                                                                           |
| className      | string              | You can Pass a class to change attribute in picture grid                                                                  |
| imageClass     | string              | Any custom class if you want to pass directly to image file                                                               |
| backDropColor  | string              | Color in Hex or Rgba format                                                                                               |
| showImageInfo  | boolean             | Allows you to see Image's title and description if provided true when `showPreview` prop is true                          |
| showImageCount | boolean             | Allows you to see Image count in `showImageInfo` when both `showImageInfo` & `showPreview` is true                        |
| closeOnClick   | boolean             | Allows you to see close Image Preview when user clicked on background                                                     |
| pattern        | array               | string array of (**big** - **tall** - **small** - **wide**) . big - 2x2, small- 1x1, wide - 1x2, tall - 2x1               |

### Data Prop

| Prop        | Type   | Details                   |
| ----------- | ------ | ------------------------- |
| image       | string | Image link you show       |
| title       | string | Title of that image       |
| description | string | Description of that image |

## Develop

Clone the repo from github

```js
$ git clone https://github.com/sazzadsazib/react-picture-grid
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

Fork the repo. pull the master branch if required. [**Create a issue**](https://github.com/sazzadsazib/react-picture-grid/issues) why we need this feature, then create your **feature branch** do your changes. write **test code** if required. and Send a **Pull Request** . PR's are always welcome!

## Release log

### 25 March 2020 - v 1.0.4/1.0.41

- [x] Fixed Backdrop sizing
- [x] Added Backdrop Color Prop as `backDropColor`
- [x] Added Props `showImageInfo` , `showImageCount` & `closeOnClick`

### 24 March 2020 - v 1.0.3

- [x] Fixed Documentation Error

### 24 March 2020 - v 1.0.2

- [x] Added props `showPreview` for Image Preview

### 23 March 2020 - v 1.0.1

- [x] Updated Documentation
- [x] Updated storybook

### 23 March 2020 - v 1.0.0

- [x] Initial Release with Component.
