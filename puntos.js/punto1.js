let month = ['enero', 'Febrero', 'Marzo', 'Abril','mayo' , 'junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
document.write('<h1> lista de los meses</h1>');
document.write('<ul>');
for(let i = 0; i < month.length;i++) {
    document.write(`<li>${month[i]}</li>`);
}
    document.write('</ul>');    
