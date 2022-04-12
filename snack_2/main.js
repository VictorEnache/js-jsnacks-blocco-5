/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

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
        lunghezza:10,
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

    {
        varieta:'verde',
        peso:40,
        lunghezza:14,
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
        lunghezza:12,
    },

    {
        varieta:'rossa',
        peso:16,
        lunghezza:20,
    }
]

const zucchine_corte = zucchine.filter((zucchina) => {
    return zucchina.lunghezza < 15
})

const zucchine_lunghe = zucchine.filter((zucchina) => {
    return zucchina.lunghezza > 15
})

console.log(zucchine_corte)
console.log(zucchine_lunghe)