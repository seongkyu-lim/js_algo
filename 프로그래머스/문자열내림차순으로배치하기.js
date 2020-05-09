function solution(s) {
    
    var answer = '';
    
    let a = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        
        s.slice(i,i+1) = s.charCodeAt(i);
        
    }
    
    for (i = 0 ; i < s.length-1 ; i++) {
        
        for (let j = i+1 ; j < s.length ; j++) {
            
            if (s[i] < s[j]) {
                
                a = s[i];
                s[i] = s[j];
                s[j] = a;
                
            }
        }
    }
    
    for (i = 0 ; i < s.length ; i++) {
        
        s[i] = s.fromCharCode(i);
    }
    answer = s;
    
    return answer;
}