//Type Alias

//definicao
type Jogo = {
    titulo: string;
}

type Expansao = {
    extra: string;
}

//intersection
type ColecaoDeJogos = Jogo & Expansao;

//implements
class CriarJogo implements ColecaoDeJogos {
    titulo: string;
    extra: string;

    constructor (t: string, e: string) {
        this.titulo = t;
        this.extra = e;
    }
}

//declarar funcao
type getSimilares = (titulo: string) => void;

//----------- DIFERENCAS -----------------//
//permite declarar tipos primitivos
type Identidade = string | number;

//pode declarar tuplas
type Tupla = [number, number];

[1, 2] as Tupla;

//Apenas uma declaracao por escopo
type JQueryy = { a: string };
/* type JQueryy = { b: string }; */

//mais recomendado no geral
//na maioria das vezes
//react - props