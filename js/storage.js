const STORAGE_KEY = "verba-state";

export function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadState() {
    const savedState = localStorage.getItem(STORAGE_KEY);

    if (!savedState) {
        return null;
    }

    return JSON.parse(savedState);
}

export function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}