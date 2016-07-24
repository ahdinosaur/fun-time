# fun-time

a fun time standard

```
npm install --save fun-time
```

## what

our current Gregorian Calendar with timezones is fake.

what if we designed a different fake system from first principles?

(it might not be very compatible with modern society...)

it might look like this:

- year: the earth's position in orbit around the sun
- month: the moon's position in orbit around the earth
- day: the earth's rotation relative to the sun
- seconds: a timestamp from the earth's reference point

here are some ratios i found.

```
1 year = 365.2421897 days
1 (synodic) month = 29.5305891 days
1 day = 24 hours/day * 60 minutes/hour * 60 seconds/minute = 86400 seconds
```

we'll use [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) for now

## example

```
const Time = require('fun-time')

const date = new Date()
const time = Time(date)

console.log(date.toString())
console.log('year\t', time.year)
console.log('month\t', time.month)
console.log('day\t', time.day)
console.log('seconds\t', time.seconds)

// Mon Jul 25 2016 00:00:00 GMT+1200 (NZST)
// year     46.56225507711689
// month    575.8943698734446
// day      17006.500001736113
// seconds  1469361600.15
```

watch it yourself with

```shell
watch -d -n 0.2 node example.js
```

## api

### `Time = require('fun-time')`

### `time = Time(undefined | Number | Date | String)`

if `undefined`, defaults to [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
if `Number`, refers to milliseconds

`time` returned is an object with:

- `year`: number of years since [unix epoch](https://en.wikipedia.org/wiki/Unix_time)
- `month`: number of months since [unix epoch](https://en.wikipedia.org/wiki/Unix_time)
- `day`: number of days since [unix epoch](https://en.wikipedia.org/wiki/Unix_time)
- `seconds`: number of seconds since [unix epoch](https://en.wikipedia.org/wiki/Unix_time)

## resources

- [UT1](https://en.wikipedia.org/wiki/Universal_Time)
- [`sut`](https://github.com/telmich/sut/)
- [lunar cycle calendar](http://www.occultphysics.com/Lunar-Cycle-Calendar.html)

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
