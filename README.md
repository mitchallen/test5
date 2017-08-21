@mitchallen/test5
==
Test5 React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/test5">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/test5.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/test5">
    <img src="https://codecov.io/gh/mitchallen/test5/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/test5">
    <img src="http://img.shields.io/npm/dt/@mitchallen/test5.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/test5">
    <img src="http://img.shields.io/npm/v/@mitchallen/test5.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/test5">
    <img src="https://img.shields.io/github/license/mitchallen/test5.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/test5 --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import Test5 from '@mitchallen/test5';
```

__NOTE:__ Test5 must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<Test5 />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app test5-test
$ cd test5-test
$ npm link @mitchallen/test5
```

### Modify src/App.js

1: Add this line near the top:

```
import Test5 from '@mitchallen/test5';
```

__NOTE:__ Test5 must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<Test5 />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/test5.git](https://bitbucket.org/mitchallen/test5.git)
* [github.com/mitchallen/test5.git](https://github.com/mitchallen/test5.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *