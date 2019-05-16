/**
 * 해시 -> 베스트 앨범
 * https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
 */
console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

function solution(genres, plays) {
    var answer = [];

    const genresMaster = genres.reduce((master, genre, index) => {
        master[genre] = master[genre] || { item: [], total: 0, genre: genre };

        master[genre].total += plays[index];
        master[genre].item.push({
            play: plays[index],
            index: index
        });

        return master;
    }, {});

    const arrItems = Object.values(genresMaster);
    arrItems.sort((a, b) => {
        return b.total - a.total;
    });

    //console.log('arrItems',arrItems);

    arrItems.forEach((master) => {
        master.item.sort((a, b) => {
            return b.play - a.play;
        });
        //console.log("item",master.item);
        const item = master.item.splice(0, 2);

        item.forEach((play) => {
            answer.push(play.index);
        })
    })

    return answer;
}