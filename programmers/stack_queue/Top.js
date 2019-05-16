/**
 * 스택/큐 -> 탑
 * https://programmers.co.kr/learn/courses/30/lessons/42588?language=javascript
 */
console.log("answer", solution([1, 5, 3, 6, 7, 6, 5]))

function solution(heights) {
    let arrTmep = [];
    return heights.map((n, i) => {
        const findItem = arrTmep.find((item) => {
            return n < item.height;
        });

        arrTmep.unshift({
            height: n,
            index: i
        })

        return (findItem) ? findItem.index + 1 : 0;
    })
}