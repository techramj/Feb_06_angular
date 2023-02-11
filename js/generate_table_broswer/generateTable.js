function createTable(rows, columns){
    let html ='<table>';
    
    for(let row of Array(rows).keys()){
        html = html + '<tr>';
            for(let col of Array(columns).keys()){
                html = html +`<td>${(row+1) * (col+1)}</td>`;
            }
        
        html = html + '</tr>';

    }
    
    html = html +'</table>';
    return html;
}

function generateTablePressed(){
    let rowsInput = document.getElementById('rows-input').value;
    let columnInput = document.getElementById('columns-input').value;
    console.log(typeof rowsInput, typeof columnInput);

    let rows = Number(rowsInput);
    let columns = Number(columnInput);

    console.log(rows, columns, typeof rows, typeof columns);

    let htmlForTable = createTable(rows, columns);
    //console.log(htmlForTable);
    document.write(htmlForTable);
}