function defaultIfInvalidNumber(x, min = 1, max = 99) {
    if (isNaN(x) || x < min) return min;
    if (x > max) return max;
    return x;
}

function getInt(id) {
    const inputValue = document.getElementById(id).valueAsNumber;
    return defaultIfInvalidNumber(inputValue);
}