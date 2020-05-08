function solution(s) {
    
    let answer;
    
    if (s.length == 4 || s.length == 6){
        
        for (let i = 0 ; i < s.length ; i++) {
        
            if (isNaN(s[i])) {
        
                answer = false ;
                
                break;
        
            }   
    
            else {
        
                answer = true;
            }
        }
    }

    else {
        
        answer = false;
    }
    
    return answer;
}