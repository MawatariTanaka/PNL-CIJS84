import { log_hello, sum } from "./sample-module.js";
import add_then_time from "./default-module.js";
log_hello();
console.log(sum(1, 2));
console.log(add_then_time(1, 2, 3));
