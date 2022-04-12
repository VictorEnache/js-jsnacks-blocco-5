/* Crea un array di 10 oggetti che rappresentano una
 zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varieta:'verde',
        peso:40,
        lunghezza:20,
    },

    {
        varieta:'gialla',
        peso:35,
        lunghezza:16,
    },

    {
        varieta:'arancione',
        peso:20,
        lunghezza:50,
    },

    {
        varieta:'blu',
        peso:40,
        lunghezza:18,
    },

    {
        varieta:'rossa',
        peso:16,
        lunghezza:20,
    },
]

let peso_totale_zucchine = 0;

zucchine.forEach((zucchina) => {
    peso_totale_zucchine += zucchina.peso
})

console.log(peso_totale_zucchine)