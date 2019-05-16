/**
 * 완전탐색 -> 카펫
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 */

console.log("Test1:", solution(10, 2));
//console.log("Test2:", solution(8, 1));
//console.log("Test3:", solution(24, 24));

/**
 * x + y = brown
 * (x - 2) * y = red
 */
function solution(brown, red) {
    let y = 0;
    let result;
    while (++y && y < brown) {
        const x = (brown / 2) - y;
        if ((x - 2) * y === red) {
            result = [x, y + 2];
            break;
        }
    }
    return result;
}