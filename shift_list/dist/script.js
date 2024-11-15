"use strict";
// ex. origin: [1, 2, 3], selected: [2]
function shiftAll(origin, selected) {
    // originList: [{ value: 1, index:0 }, { value:2, index:1 }, { value:3, index:2 }]
    const originList = origin.map((value, index) => ({ value, index }));
    // selectedList: [{ value:2, index:1 }]
    const selectedList = originList.filter(({ value }) => selected.includes(value));
    const sortedSelectedList = selectedList.sort((a, b) => a.index - b.index);
    const isFirstItemSelected = selected.includes(origin[0]);
    const isAlreadyOrdered = sortedSelectedList.every((item, i, arr) => i === 0 || item.index === arr[i - 1].index + 1);
    // 순서가 정렬되어 있는 경우 early return
    if (isFirstItemSelected && isAlreadyOrdered) {
        return origin;
    }
    // selectedList: [{ value:2, index:1 }]
    // selectedList를 순회하며 origin에서 현재 index(1)와 매치되는 currentIndex를 구하기.
    const result = [...origin];
    for (const item of sortedSelectedList) {
        const currentIndex = result.indexOf(item.value);
        if (currentIndex > 0) {
            // 매치된 currentIndex와 currentIndex - 1의 index의 순서를 바꿔가며 순서를 미루기.
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