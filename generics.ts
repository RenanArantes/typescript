//generics ajuda o codigo ser reutilizado em varias partes colocando em apenas um 'ponto de contato'(arquivo pra fazer alteracao)
//generics permite definir diferentes tipos de argumentos
//serve para ter uma flexibilidade de tipagem nessa linguagem altamente tipada

type NumOrStr = number | string;
//          s(convencao)    apelido    definicao padrao
function useState<S extends NumOrStr = string>() {
    let state: number | string;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState();

newState.setState('asda'); // é uma string
console.log(newState.getState());

//newState.setState(12313); // da erro depois que colocou o generic 
//console.log(newState.getState());