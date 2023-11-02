import { writable } from 'svelte/store';

export const snakeGame = writable({
    board: [],
    speed: 3
});
