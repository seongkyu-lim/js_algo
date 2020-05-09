function solution(arr)
{
    let j = 0;
    let answer = [];
    
    answer.push(arr[0]);
    
    for (let i = 1 ; i < arr.length ; i++){
        
        if (answer[j]!== arr[i]){
            
            answer.push(arr[i]);
            
            j++;
        }
    }
    return answer;
}