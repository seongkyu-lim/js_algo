function solution(s) {
    
    let answer = '';
    
    let uni_arr = [];
    
    let a = 0;
    
    for (let i = 0 ; i < s.length ; i++) {
        
        uni_arr[i] = s.charCodeAt(i);
        
    }
    
    for (let j = 0 ; j < s.length-1 ; j++) {
        
        for (let f = j+1 ; f < s.length ; f++) {
            
            if (uni_arr[j] < uni_arr[f]) {
                
                a = uni_arr[j];
                uni_arr[j] = uni_arr[f];
                uni_arr[f] = a;
                
            }
        }
    }
    
    //
    answer = uni_arr.fromCharCode(0,s.length);
    // error
    return answer;
}