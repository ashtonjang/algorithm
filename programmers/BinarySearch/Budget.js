console.log('RESULT', solution([120, 110, 140, 150], 485));
console.log('RESULT', solution([9, 8, 5, 6, 7], 5));
console.log('RESULT', solution([120, 110, 100, 100], 485));
console.log('RESULT', solution([120, 110, 100, 100], 430));

function solution(budgets, M) {

    budgets.sort((a, b) => a - b);//오름순 정렬, 작->큰

    let result = Math.floor(M / budgets.length); //기본값 예산의 지방수의 평균

    for (let i = 0; i < budgets.length; i++) {

        const size = budgets.length - i - 1;    //예산 편성의 남은 지방 수
        M = M - budgets[i];

        if (size > 0) {   //마지막 지방일 경우
            const avg = Math.floor(M / size);
            if (budgets[i] <= avg) { //현재 지방의 예산이 남은 지역 예산 평균보다 작은경우
                result = avg;
                continue;
            } else {
                break;
            }
        } else if (M > 0) {    //마지막 지방인데 남은 예산안에 맞는 경우, 아닐경우 이전 평균치.
            result = budgets[i];
        }
    }

    return result;
}