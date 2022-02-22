module.exports = function check(str, bracketsConfig) {
   let leftArr=[];
    let rightArr = [];
    for(let i=0; i<expression.length; i++){
    		if(expression[i] === '(' || expression[i] === '[' || expression[i] === "{"){
        	leftArr.push(expression[i]);
        }
        
        
        if(expression[i] === ')'){
      
        		rightArr.push("(");
        }else if(expression[i] === '}'){
        
        		rightArr.push("{");
        } else if(expression[i] === ']'){
        
        		rightArr.push("[");
        }
   }
		
   rightArr.reverse();
    
    if(leftArr.length<rightArr.length || leftArr.length>rightArr.length){
    return false;
    }
    
    for(let k=0; k<leftArr.length; k++) {
    		if(leftArr[k] != rightArr[k]){
        		return false;
        }
    }

 
}
