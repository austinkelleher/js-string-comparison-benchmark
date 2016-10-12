# js-string-comparison-benchmark
A small experiment to benchmark different string comparison operations.

## Results

Machine specs: MacBook Pro (2.5 GHz Intel Core i7, 16 GB 1600 MHz DDR3) running
OS X El Capitan

String#constructor comparison x 109,100,228 ops/sec ±2.20% (80 runs sampled)
String#typeof comparison x 108,259,885 ops/sec ±1.99% (81 runs sampled)
String#instanceof comparison x 65,503,514 ops/sec ±1.28% (83 runs sampled)
Fastest is String#constructor comparison,String#typeof comparison

| constructor   |  typeof       | instanceof  |
|---------------|---------------|-------------|
| 109,100,228   | 108,259,885   | 65,503,514  |

## Running

```sh
npm run benchmark
```
