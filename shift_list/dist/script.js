"use strict";
function shiftAll(origin, selected) {
    const originList = origin.map((value, index) => ({ value, index }));
    const selectedList = originList.filter(({ value }) => selected.includes(value));
    const sortedSelectedList = selectedList.sort((a, b) => a.index - b.index);
    const isFirstItemSelected = selected.includes(origin[0]);
    const isAlreadyOrdered = sortedSelectedList.every((item, i, arr) => i === 0 || item.index === arr[i - 1].index + 1);
    if (isFirstItemSelected && isAlreadyOrdered) {
        return origin;
    }
    const result = [...origin];
    for (const item of sortedSelectedList) {
        const currentIndex = result.indexOf(item.value);
        if (currentIndex > 0) {
            [result[currentIndex], result[currentIndex - 1]] = [
                result[currentIndex - 1],
                result[currentIndex]
            ];
        }
    }
    return result;
}
console.log(shiftAll([1, 2, 3, 4, 5], [2, 3, 4]));
console.log(shiftAll(["a", "b", "c", "d", "e"], ["a", "c", "d"]));