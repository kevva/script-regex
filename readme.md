# script-regex [![Build Status](https://travis-ci.org/kevva/script-regex.svg?branch=master)](https://travis-ci.org/kevva/script-regex)

> Regular expression for matching `script` tags


## Install

```
$ npm install --save script-regex
```


## Usage

```js
const scriptRegex = require('script-regex');

scriptRegex().test('<script>console.log(\'asd\')</script>');
//=> true

'<script>console.log(\'asd\')</script> asd'.match(scriptRegex());
//=> ['<script>console.log(\'asd\')</script>']
```


## API

### scriptRegex()

Returns a regex for matching `script` tags.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
