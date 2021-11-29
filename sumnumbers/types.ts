// boolean (true/false)
let isOpen: boolean
isOpen = true

//string ('asda', "asda", `asda`)
let message: string
message = `asda ${isOpen}`

//number (int, float, hex, binary)
let total: number
total = 0xff0

//array (type[])
let items: string[]
items = ['1', '2', '3']

let total2: Array<number> //notação generic
total2 = [1, 2, 3]

//tuple  /* tupla é um array onde ja se sabe a quantidade de elementos e seus tipos */
let title: [number, string, boolean]
title = [1, 'asda', isOpen]

// enum /* enum é um enumerador para criar chaves valor enum Name { key = value } */
enum Colors {
    white = '#fff',
    black = '#000'
}

//any /*Qualquer coisa */
let coisa: any
coisa = [1, {'asda': 123 }]

//void */ sem retorno */
function logger() {
    console.log('asda')
}

//null | undefined */ valores nao definidos */
type inteligencia = boolean | undefined

//never /* nunca vai retornar, joga uma execao */
function error(): never {
    throw new Error("error");
}

//object /* é tudo aquilo que nao é um tipo primitivo */
let carrinho: object;

carrinho = { produto1: 'ticaricatica' }
