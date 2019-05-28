import { writable } from "svelte/store";

export let posts = writable([]);
export let user = writable({});
