if (!window.snipFunctions)
    window.snipFunctions = {};
sf = window.snipFunctions;
// According to https://jsbench.me/qokehvn16l/1 my range function is ~10% slower than array.fill
// but https://jsbench.me/u9kehyl77d/1 shows that pre-excluding the even numbers 
// and the fast deletion of Sets make it a faster function
sf.range = function range(
        start,
        end = undefined,
        step = 1,
        comp = false
      ) {
    let _end = end || start;
    let _start = end ? start : 0;
    let nums = new Set();
    if (comp) {
        for (let i = _start; i<_end;) {
            if (comp(i)) {
                nums.add(i);
            }
            i+=step;
        };
    } else {
        for (let i = _start; i<_end; i+=step) {
            nums.add(i);
        };
    }
    return nums;
}
sf.primeArrayMethods = {
    SieveOfEratosthenes: async function(n) {
        let range = sf.range
        const primes = range(0, n + 1, 1, (x) => x == 2 || x % 2 !== 0);
        for (p = 3; p ** 2 <= n; p++) {
            if (primes.has(p)) {
                range(p*p,n,p).forEach(x => primes.delete(x));
            }
        }
        return primes;
    },
    SimpleOofNmod: async function(n) {
        let range = sf.range;
        const primes = new Set();
        for (let num of range(n)) {
            if (num > 1) {
                let isPrime = true;
                for (let i of range(2, num)){
                    if (num % i === 0) {isPrime = false; break;}
                }
                if (isPrime) primes.add(num);
            }
        }
        return primes;
    }
}