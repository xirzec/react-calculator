export const KEYPRESS = "KEYPRESS";

export function pressKey(key) {
    return { type: KEYPRESS, key };
}