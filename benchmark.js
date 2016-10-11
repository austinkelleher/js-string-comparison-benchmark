const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('String#constructor comparison', function() {
  'test'.constructor === String
})
.add('String#typeof comparison', function() {
  typeof 'test' === 'string'
})
.add('String#instanceof comparison', function() {
  new String('test') instanceof String
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({
  'async': true
});
