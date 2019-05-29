console.log('RESULT -> ', solution([3, 30, 34, 303, 5, 9, 0, 0]), solution2([3, 30, 34, 303, 5, 9, 0, 0]));
console.log('RESULT -> ', solution([40, 403]), solution2([40, 403]));
console.log('RESULT -> ', solution([40, 405]), solution2([40, 405]));
console.log('RESULT -> ', solution([40, 404]), solution2([40, 404]));
console.log('RESULT -> ', solution([12, 121]), solution2([12, 121]));
console.log('RESULT -> ', solution([2, 22, 223]), solution2([2, 22, 223]));
console.log('RESULT -> ', solution([21, 212]), solution2([21, 212]));
console.log('RESULT -> ', solution([41, 415]), solution2([41, 415]));
console.log('RESULT -> ', solution([2, 22]), solution2([2, 22]));
console.log('RESULT -> ', solution([70, 0, 0, 0]), solution2([70, 0, 0, 0]));
console.log('RESULT -> ', solution([0, 0, 0, 0]), solution2([0, 0, 0, 0]));
console.log('RESULT -> ', solution([0, 0, 0, 1000]), solution2([0, 0, 0, 1000]));
console.log('RESULT -> ', solution([12, 1213]), solution2([12, 1213]));


//시간복잡도 미고려
function solution2(numbers) {
    numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        return a + b < b + a;
    });
    return (numbers[0] === 0) ? '0' : numbers.join('');
}

//시간복잡도 추가
function solution(numbers) {
    const numMaster = numbers.reduce((master, num) => {
        num = num.toString();

        master.numCounts[num] = master.numCounts[num] || 0;
        master.numCounts[num]++;

        if (master.numCounts[num] === 1) {
            master.firstNums[num[0]] = master.firstNums[num[0]] || [];
            if (master.firstNums[num[0]].length === 0 || num === '0') {
                master.firstNums[num[0]].push(num);
            } else {
                let index = master.firstNums[num[0]].length;
                for (let i = 0; i < master.firstNums[num[0]].length; i++) {
                    let num2 = master.firstNums[num[0]][i];
                    if (num + num2 > num2 + num) { //303, 30 -> 30330  >  30303 break;
                        index = i;
                        break;
                    }
                }
                master.firstNums[num[0]].splice(index, 0, num);
            }
        }

        return master;
    }, {
        firstNums: {}, //첫글자로 만든 오브젝트
        numCounts: {}   //중복된 숫자 카운트
    });


    let firstNums = Object.keys(numMaster.firstNums);
    firstNums.sort((a, b) => b - a);

    if (firstNums[0] === '0') {
        return '0';
    }

    return firstNums.reduce(function (subStr, key) {
        subStr += numMaster.firstNums[key].reduce((str, num) => {
            for (let j = 0; j < numMaster.numCounts[num]; j++) {
                str += num;
            }
            return str;
        }, '');
        return subStr;
    }, '');
}
