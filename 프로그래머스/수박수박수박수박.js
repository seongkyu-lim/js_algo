function solution(n) {
    let answer = '';
    
    for (let i = 0 ; i < n ; i++) {
        
        if (i == 0) {
            
            answer = "수";
        }
        
        else if (i%2 == 1) {
            
            answer = answer + "박";
        }
        
        else if (i%2 == 0) {
            
           answer =  answer + '수';
        }
    }
    
    return answer;
    
}