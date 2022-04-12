/* Scrivi una funzione che accetti una stringa 
come argomento e la ritorni girata (es. Ciao -> oaiC)
 */


function rovescia_parole (parola_da_rovesciare){
    const parola = parola_da_rovesciare

let parola_rovesciata = ''

for (let i = parola.length - 1; i>=0; i--){
    const lettera = parola[i]
    parola_rovesciata += lettera
}

console.log(parola_rovesciata)
}
