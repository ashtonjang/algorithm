/**
 * 스택/큐 -> 다리를 지나는 트럭
 * https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 */

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;


    const isImpossible = truck_weights.find((n) => {
        return n > weight
    });

    if (isImpossible) {
        return "isImpossible";
    }

    const arrWait = truck_weights.map((n) => {
        return {
            weight: n,
            bridgeCount: bridge_length
        }
    });
    let arrRun = [];
    const arrFinish = [];

    //console.log("START", arrWait);
    while (arrWait.length > 0 || arrRun.length > 0) {


        arrRun = arrRun.filter((truck) => {
            if (truck.bridgeCount > 0) {
                return true;
            }
            weight += truck.weight;
            arrFinish.push(truck);
        })

        const truck = getTruck(arrWait, weight);

        let skipCount = 1;
        if (truck) {
            weight -= truck.weight;
            arrRun.push(truck);
        } else if (arrRun.length > 0) {
            skipCount = arrRun[0].bridgeCount;
        }

        answer += skipCount;

        arrRun.forEach((truck) => {
            truck.bridgeCount -= skipCount;
        });

        //console.log(answer, arrRun, arrWait);
    }

    return answer;

    function getTruck(trucks, weight, flag) {
        let truck;

        if (trucks.length > 0 && trucks[0].weight <= weight) {
            truck = trucks[0];
            trucks.splice(0, 1);
        }

        return truck;
    }

}