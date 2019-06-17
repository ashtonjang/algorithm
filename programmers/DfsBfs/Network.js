/**
 * 깊이/너비 우선 탐색 -> 네트워크
 * https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
 */

console.log('solution A =>', solution(1, [[1]]), ' == ', 1);
console.log('solution B =>', solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]), ' == ', 2);
console.log('solution C =>', solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]), ' == ', 1);

function solution(n, computers) {

    if (n === 0 || computers.length === 0) {
        return 0;
    }

    const computerMasters = computers.reduce((master, arr, index) => {

        master[index] = master[index] || {
            master: index
        };

        let min = index;
        let arrTemp = [];

        for (let i = 0; i < arr.length; i++) {
            //for (let i = index + 1; i < arr.length; i++) { //Test 9 실패.. 아마 한쪽만 연결된 경우가 있는 듯..
            if (arr[i] === 0) {
                continue;
            }

            if (master[i]) { //이미 탐색된경우

                min = Math.min(min, master[i].master);
                arrTemp.push(i);

            } else { //처음인경우

                master[i] = master[index];

            }

        }


        if (arrTemp.length > 0) {
            arrTemp.push(index);
            arrTemp.forEach((n, i) => {
                master[arrTemp[i]].master = min;
            });
        }

        return master;

    }, {});


    const result = {};
    for (let key of Object.keys(computerMasters)) {
        result[computerMasters[key].master] = true;
    }

    return Object.keys(result).length;
}
