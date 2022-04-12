/* Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) prendendo alternativamente 
gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const array_nomi = ['victor', 'ginevra', 'gianni', 'carlo' ]
const array_cognomi = ['enache', 'giolitto', 'fioriti', 'matconi']
const new_array = []

/* for (let i = 0; i<array_nomi.length; i++){
new_array.push(array_nomi[i])
new_array.push(array_cognomi[i])
} */




array_nomi.forEach((item,index,array) =>{
    new_array.push(array_nomi[index])
  new_array.push(array_cognomi[index])
})

console.log(new_array)