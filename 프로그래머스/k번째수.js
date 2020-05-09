function solution(array, commands) {
    let answer = [];
    let test_arr = [];
    let test_arr2 = [];
    
    for (let i = 0 ; i < commands.length ; i++) {
        
        test_arr = array.slice(commands[i][0]-1, commands[i][1]);
        
        test_arr2 = test_arr.sort(function(test_arr, b){ return test_arr-b; });
        
        answer.push(test_arr2[commands[i][2]-1]);
        
    }
    return answer;
}