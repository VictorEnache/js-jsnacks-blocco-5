/* Crea un array di 10 oggetti che rappresentano una
 zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varietà:'verde',
        peso:40,
        lunghezza:20,
    },

    {
        varietà:'gialla',
        peso:35,
        lunghezza:16,
    },

    {
        varietà:'arancione',
        peso:20,
        lunghezza:50,
    },

    {
        varietà:'blu',
        peso:40,
        lunghezza:18,
    },

    {
        varietà:'rossa',
        peso:16,
        lunghezza:20,
    },
]

let peso_totale_zucchine = 0;

zucchine.forEach((zucchina) => {
    peso_totale_zucchine += zucchina.peso
})

console.log(peso_totale_zucchine)