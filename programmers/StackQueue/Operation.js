//스택큐 -> 기능개발

console.log('solution', solution([93, 30, 55], [1, 30, 5]));

function solution(progresses, speeds) {

    const result = progresses.reduce((ret, progress, index) => {
        const speed = speeds[index];

        if (ret.day > 0) {    //작업일이 있을 경우
            progress += speed * ret.day;
        }

        if (progress < 100) { //작업이 남았을 경우
            ret.answer.push(0); //신규 배포 셋팅
            ret.day += Math.ceil((100 - progress) / speed);//작업일 추가
        }

        ret.answer[ret.answer.length - 1]++;
        console.log(ret);
        return ret;
    }, {
        answer: [],
        day: 0
    });

    return result.answer;
}