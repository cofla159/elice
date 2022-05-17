function solution(rc, operations) {
    var answer = JSON.parse(JSON.stringify(rc));
    operations.forEach( op => {
        if (op === "Rotate"){
            answer = rotate(answer);
        }else if (op === "ShiftRow"){
            answer = shiftRow(answer);
        }
    })
    return answer;
}

function rotate(rc) {
    let newRc = JSON.parse(JSON.stringify(rc));
    //첫번째 행 rotate
    for(let i = 0; i < rc[0].length-1; i++){
        newRc[0][i+1] = rc[0][i];
    }
    //마지막 열
    for(let i = 0; i < rc.length-1; i++){
        newRc[i+1][rc[0].length-1] = rc[i][rc[0].length-1];
    }
    //마지막 행
    for(let i =0; i < rc[rc.length-1].length-1; i++){
        newRc[rc.length-1][i] = rc[rc.length-1][i+1];
    }
    //첫번째 열
    for(let i = 0; i < rc.length-1; i++){
        newRc[i][0] = rc[i+1][0];
    }
    return newRc;
}

function shiftRow(rc) {
    let newRc = JSON.parse(JSON.stringify(rc));
    newRc.unshift(rc[rc.length-1]);
    newRc.pop();
    return newRc;
}

console.log(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], ["Rotate", "ShiftRow"]))