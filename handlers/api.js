import { success, failure } from "../lib/response";

export function helloWolf(event, context, callback) {
  console.log("event", event);
  return callback(null, success("Hello Wolf"));
}
