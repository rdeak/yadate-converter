# yadate-converter

Yet another date to string and string to date converter

## Main features

* parse formated string to date
* format date to string

## Install

Install it with NPM

```
npm install yadate-converter --save
```

## Parse

```javascript
    const date = parseDate('14.05.2018', 'DD.MM.YYYY');
```

## Format

```javascript
    const str = formatDate(new Date(), 'YYYY-M-D');
```

## Tokens

Token | Description | Example
------------ | ------------- | -------------
Y | 2 or 4 digit year | 2018 or 18
YYYY | 4 digit year | 2018
YY | 2 digit year | 18
M | month | 9
MM | 2 digit month | 09
D | day | 3
DD | 2 digit day | 03
H | hour | 4
HH | 2 digit hour | 04
m | minutes | 8
mm | 2 digit minutes | 08
s | seconds | 7
ss | 2 digit seconds | 07
S | miliseconds | 1 or 01 or 001
SS | 2 digit miliseconds | 02
SSS | 3 digit miliseconds | 003


## License

[MIT](https://tldrlegal.com/license/mit-license)

