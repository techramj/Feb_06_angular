import { createMultiplicationTable } from './generateTable';


function generateTable(){
    let args = process.argv.splice(2);
   // console.log(args, typeof args);

    let rowsInput = args[0];
    let columnInput = args[1];

    let rows = Number(rowsInput);
    let cols = Number(columnInput);

   // console.log(rows,cols, typeof rows, typeof cols);

    let tableInput = createMultiplicationTable(rows, cols);
    console.log('          Multiplication Table          ');
    console.log('');
    console.log(tableInput);
}

generateTable();

