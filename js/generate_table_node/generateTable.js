
export function createMultiplicationTable(rows, columns){
    let tableInput ='';
    
    for(let row of Array(rows).keys()){
            for(let col of Array(columns).keys()){
                tableInput = tableInput +` ${(row+1) * (col+1)} `;
            }
        
            tableInput = tableInput + '\n';
    }
    
    return tableInput;
}