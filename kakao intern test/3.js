function solution(alp, cop, problems) {
    let answer = 0;
    let hour = 0;
    let maxAlpNeeded = Math.max.apply(null, problems.map(problem => problem[0]));
    let maxCopNeeded = Math.max.apply(null, problems.map(problem => problem[1]));
    let minAlpNeeded = Math.min.apply(null, problems.map(problem => problem[0]));
    let minCopNeeded = Math.min.apply(null, problems.map(problem => problem[1]));

    while(alp < maxAlpNeeded || cop < maxCopNeeded){
        let foundProb = problems.find(prob => { //풀 문제 찾기
                prob[0] <= alp && prob[1] <= cop
        });
        if(foundProb === undefined ) { //풀 문제가 없으면
            if(alp < minAlpNeeded){
                hour += (minAlpNeeded - alp);
                alp = minAlpNeeded;
            } else if (cop < minCopNeeded){
                hour += (minAlpNeeded - cop);
                cop = minCopNeeded;
            }else {
                console.log("something got wrong");
            }
        }


    }
    
   
    return answer;
}
console.log(solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]]));