const _ = require('lodash')
const { log } = require('node:console')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
