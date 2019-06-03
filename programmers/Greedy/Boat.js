/**
 * 탐욕법 -> 구명보트
 * https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
 */
console.log('solution', solution([50, 50, 70, 80], 100), '=>', 3);
console.log('solution', solution([20, 30, 50, 50, 70, 80], 100), '=>', 3);
console.log('solution', solution([40, 50, 60, 150, 160], 240), '=>', 3);
console.log('solution', solution([20, 30, 40, 50, 50, 60, 70, 80, 90], 100), '=>', 5);


//참고용
//Hint. 무거운 사람과 가벼운 사람이 짝지어서 옮기면 된다.
function solution(people, limit) {

    people.sort((a, b) => a - b);
    const arrResult = [];  //결과
    for (let i = 0, j = people.length - 1; i <= j; j--) {
        if (people[i] + people[j] <= limit) {
            arrResult.push([people[j], people[i]]);
            i++;
        } else {
            arrResult.push([people[j]]);
        }
    }
    //console.log(arrResult);
    return arrResult.length;
    //return people.length-i;
}


//시간 고려
//Hint. 무거운 사람과 가벼운 사람이 짝지어서 옮기면 된다.
function solution2(people, limit) {

    const result = setBoat(people, limit);

    //console.log(result);

    return result.length;

    function setBoat(people, limit) {
        people.sort((a, b) => a - b);

        let arrResult = [];  //결과
        const arrMin = [];  //최소값 임시 저장

        const length = people.length;
        const half = Math.ceil(people.length / 2);

        for (let minIndex = 0; minIndex < half; minIndex++) {
            let maxIndex = length - minIndex - 1;

            let max = people[maxIndex];

            if (maxIndex !== minIndex) {//마지막 아니면
                arrMin.push(people[minIndex]);
            }

            if (arrMin.length && max + arrMin[0] <= limit) {
                arrResult.push([max, arrMin.shift()]);
            } else {
                arrResult.push([max]);
            }
        }

        if (arrMin.length > 0) {
            return arrResult.concat(setBoat(arrMin, limit));
        }
        return arrResult;
    }
}

//시간 미고려
function solution3(people, limit) {
    let answer = 0;
    people.sort((a, b) => a - b);

    while (people.length) {
        //console.log(people);
        let limitBoat = 2;
        let tmpLimit = limit;
        for (let i = people.length - 1; i >= 0; i--) {
            if (tmpLimit >= people[i]) {
                tmpLimit -= people[i];
                people.splice(i, 1);
                limitBoat--;
            }

            if (limitBoat === 0) {
                break;
            }
        }
        answer++;
    }
    return answer;
}