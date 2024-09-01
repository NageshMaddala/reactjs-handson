// .js for import is optional 
// because build process adds that for us

// import { apiKey, abc } from "./util.js";

// Instead of importing individual exports
// just get everthing using aliasing
import * as util from "./util.js";

console.log(util.apiKey);
console.log(util.abc);