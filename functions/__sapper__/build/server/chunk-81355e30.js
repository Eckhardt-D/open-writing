'use strict';

require('./chunk-791a7619.js');

function noop() {}

function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param value initial value
 * @param start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (!stop) {
                return; // not ready
            }
            subscribers.forEach((s) => s[1]());
            subscribers.forEach((s) => s[0](value));
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe$$1(run$$1, invalidate = noop) {
        const subscriber = [run$$1, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run$$1(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
            }
        };
    }
    return { set, update, subscribe: subscribe$$1 };
}

let user = writable({});

exports.user = user;
exports.writable = writable;
//# sourceMappingURL=chunk-81355e30.js.map
