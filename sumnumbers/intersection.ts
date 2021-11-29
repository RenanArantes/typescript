// accountInfo
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}
/* Colocar ? faz com que o atributo seja opcional. Por baixo dos panos esse valor vira undefined */


const account: AccountInfo = {
    id: 123,
    name: 'ticaricatica',
    email: 'ticaricatica@email.com'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const chat: CharInfo = {
    nickname: 'Ticaricatica',
    level: 100
}

// intersection faz a uniao de tipos diferentes, criando um novo tipo
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id:123,
    nickname: 'ticaricatica',
    level:100,
    name: 'ticaricatica junqueira'
}