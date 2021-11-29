//interfaces

//definicao
interface Gamee {
    title: string;
}

interface DLC {
    extra: string;
}

//intersecao | extend
interface GameCollecion extends Gamee , DLC {}

//implements
class CreateGamee implements GameCollecion {
    title: string;
    extra: string;

    constructor(t: string, e: string) {
        this.title = t;
        this.extra = e;
    }
}

//declarar funcao
interface getSimilars{
    (title: string): void;
}

//----------- DIFERENCAS -----------------//
//nao permite declarar tipos primitivos
/* interface ID extends number {} */

//nao consegue reproduzir o comportamento da tupla
interface Tuple {
    0: number;
    1: number;
}

[1, 2, 3] as Tuple;

//pode ter multiplas declaracoes e ele une todas de mesmo nome
interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const object: JQuery = {
    a: "asda",
    b: "qweq"
}

//indicado para a criacao de libs, projetos extensiveis e reutilizaveis, sao extensiveis
//indicado com POO