async function doHealthCheck (target) {
	await new Promise((resolve, reject) => {
		setTimeout(resolve, 100, target);
	});
}

async function runHealthChecks (targets, poolSize) {
	console.log('Starting a health check');

	// Maps are most preferment for heavy add/deletes
	const promisePool = new Map();

	/* I thought it would be easier,
		but you do run into the issue that the promise returned
		by `Promise.race()` is not the same promise instance as
		the resolved promise, so you can't just stick it in a `Set()`
		and do `set.delete(returnedPromise)` so we have to create unique keys
		(could probably also be done with array indexes, but I prefer Map) */
	const addItem = (target) => {
		const _id = Symbol();
		promisePool.set(_id,doHealthCheck(target)
			.then((v) => ({_id,value:v})));
	};

	let targetIndex = Math.min(targets.length,poolSize);

	// Initializes Pool and immediately starts them
	for (let i = 0;i<targetIndex;i++) {
		addItem(targets[i]);
	}
	/* `promisePool.size` gets checked every iteration, so
		we can grow it during iteration */
	for (let i = 0;i<promisePool.size;i++) {
		// Returns on the first promise to resolve or reject
		const {_id,value} = await Promise.race(promisePool.values());
		promisePool.delete(_id);
		console.log('CompletedVal: ' + value);

		/* Replace the completed one to maintain the Pool size
			until we run out of targets */
		if (targetIndex < targets.length) {
			targetIndex++;
			addItem(targets[targetIndex]);
		}
	}

	console.log('Health checks completed');
}
