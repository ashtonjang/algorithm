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

//시간복잡도 추가 - 모듈화 안함
function solution3(numbers) {
    const numMaster = numbers.reduce((master, num) => {
        num = num.toString();

        master.numCounts[num] = master.numCounts[num] || 0;
        master.numCounts[num]++;

        if (master.numCounts[num] === 1) {
            master.firstNums[num[0]] = master.firstNums[num[0]] || [];
            let index = master.firstNums[num[0]].length;
            for (let i = 0; i < master.firstNums[num[0]].length; i++) {
                let num2 = master.firstNums[num[0]][i];
                if (num + num2 > num2 + num) { //303, 30 -> 30330  >  30303 break;
                    index = i;
                    break;
                }
            }
            master.firstNums[num[0]].splice(index, 0, num); //배열 중간에 삽입
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


//시간복잡도 추가 - 최종
function solution(numbers) {
    const array = new GreatestSort();

    numbers.forEach((n) => {
        array.add(n);
    });

    //console.log(array.getArray());
    return array.getArray().join('');
}

function GreatestSort() {
    const firstNums = {}; //첫글자로 만든 오브젝트
    const numCounts = {}; //중복된 숫자 카운트


    return {
        add,
        getArray,
    };


    function add(num) {
        num = num.toString();
        if (!numCounts[num]) {
            firstNums[num[0]] = firstNums[num[0]] || [];
            let index = firstNums[num[0]].length;
            for (let i = 0; i < firstNums[num[0]].length; i++) {
                let num2 = firstNums[num[0]][i];
                if (num + num2 > num2 + num) { //303, 30 -> 30330  >  30303 break;
                    index = i;
                    break;
                }
            }
            firstNums[num[0]].splice(index, 0, num); //배열 중간에 삽입
        }
        numCounts[num] = numCounts[num] || 0;
        numCounts[num]++;
    }

    function getArray() {
        const tmpFirstNums = Object.keys(firstNums);
        tmpFirstNums.sort((a, b) => b - a);
        if (tmpFirstNums[0] === '0') {
            return ['0'];
        }
        return tmpFirstNums.reduce(function (arr, key) {
            return arr.concat(firstNums[key].reduce((subArr, num) => {
                for (let j = 0; j < numCounts[num]; j++) {
                    subArr.push(num);
                }
                return subArr;
            }, []));
        }, []);

    }
}