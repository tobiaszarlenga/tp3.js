function tablaDeMultiplicar(numero){
    document.write(`<table>
    <thead>
        <tr>
            <th colspan = "2"> Tabla de miiultiplicar</th>
        </tr>
    </thead>
    <tbody>`)   ;

    for (let i = 1;i <=10;i++) {
        document.write(`<tr>
        <td>${numero}*${i}</td>
        <td>${numero * i}</td>
    </tr>`) ;
    }
   document.write (`</tbody> </table>`) ;
    
    }
    let numero = parseInt(prompt("ingrese un numero para multiplicar hasta 10"));
    tablaDeMultiplicar(numero);




    
    
    
    









