function solution(a, b) {
    var answer = 0;
    var sum = 0;
    
    if (a === b ) {
        
        answer = a;
    }
    else if (a > b) {
        
        for (let i = b ; i < a + 1 ; i++ ) {
            
            sum = sum + i;
            
        } 
        
        answer = sum;
    }
    else {
        
       for (let i = a ; i < b + 1 ; i++ ) {
            
            sum = sum + i;
            
        }  
        
        answer = sum;
        
    }
    return answer;
}