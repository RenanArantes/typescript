//interfaces sao um recurso do TS (JS nao tem)
//interfaces sao um conjunto de dados para descrever a estrutura de um objeto
//nao sao usadas para tipos primitivos

//usar um I como a primeira letra da interface é um convenção, não é obrigatório
//os modifiers das classesa podem ser usados na interface igualmente
interface Game { 
    title: string;
    description: string;
    readonly genre: string;
    platform: string[];
    getSimilars?: (title: string) => void;
}

const wow: Game = {
    title: "World of Warcraft",
    description: "Toppem MMO",
    genre: "MMORPG",
    platform: ["PC"],
    getSimilars: (title: string) => {
        console.log(`Similars games to ${title}: LotrOnline, FFXIV, Black Desert`)
    }
}
console.log(wow.genre);

//wow.genre = 'rpg';
wow.getSimilars && wow.getSimilars(wow.title);

interface Xpac extends Game {
    originalGame: Game;
    newContent: string[];
}

const tbc: Xpac ={
    title: "World of Warcraft - The Burning Crusade",
    description: "Welcome to outland",
    genre: "MMORPG",
    platform: ["PC"],
    originalGame: wow,
    newContent: ['New World', '7 regions', 'raids', 'dungeons']
}

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platform: string[];

    constructor(t: string, d: string, g: string, p: string[]) {
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
}