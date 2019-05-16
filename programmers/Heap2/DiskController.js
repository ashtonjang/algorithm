/**
 * 힙 -> 디스크 컨트롤러
 * https://programmers.co.kr/learn/courses/30/lessons/42627?language=javascript
 */

console.log(solution([
    [0, 3],
    [1, 9],
    [2, 6]
]));

function solution(jobs) {
    let answer = 0;
    const JobsLength = jobs.length;

    jobs.sort((a, b) => {
        return a[0] - b[0]
    });

    const arrWait = [];
    const arrRun = [];
    let time = 0;

    while ((jobs.length || arrWait.length || arrRun.length)) {

        if (arrRun.length === 0 && arrWait.length > 0) {
            arrWait.sort((a, b) => a[1] - b[1]);
            arrRun.push(arrWait.shift());
        }

        if (arrRun.length > 0) {
            arrRun[0][1]--;

            if (arrRun[0][1] <= 0) {
                answer += time - arrRun[0][0];
                arrRun.shift();
            }
        }

        getJob(jobs, time).forEach((job) => {
            arrWait.push(job);
        });

        time++;
    }

    return parseInt(answer / JobsLength);

    function getJob(pJobs, pTime) {
        const result = [];
        for (let i = 0, l = pJobs.length; i < l; i++) {
            if (pJobs[0][0] === pTime) {
                result.push(pJobs.shift());
                continue;
            }
            break;
        }
        return result;
    }
}