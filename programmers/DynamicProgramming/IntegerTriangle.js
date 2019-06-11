/**
 * 동적계획법 -> 정수삼각형
 * https://programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
 */
console.log('solution', solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]], 30), '=>', 30);

//아래 부터 올라가면서 최대값 채우는 방식
function solution(triangle) {
    triangle.reverse();
    return triangle.reduce((ret, arr, index) => {
        if (arr.length === 1) {
            return arr[0];
        }

        //상위 삼각형 설정
        triangle[index + 1] = triangle[index + 1].map((num, i) => {
            return num + Math.max(arr[i], arr[i + 1]);
        });
    }, 0);

}
