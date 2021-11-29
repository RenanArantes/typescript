/* classes nao sao obrigatorias no TS */
class UserAccount {
    // public é implicito nao precisa escrever e o nome ja diz o que permite fazer
    public name: string;
    // protected so pode ser chamado dentro da classe e de duas herdeiras
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    // private so pode ser chamada ou editada dentro da propria classe.
    private nickname: string;
    // readonly pode ser lido fora da classe mas nao modificado. 
    //readonly level: number;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    //acessors, get and set
    get getLevel() {
        console.log('-----GET-----');
        return this.level;
    }

    set setLevel(level: number) {
        console.log('-----SETing new level level-----');
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`);
    }
}

//nao podem ser criados objetos a partir de uma classe abstrata, elas servem para fazer herança. abstract class name{}

const pessoa = new UserAccount("Ticaricatica", 55);

console.log(pessoa);
//console.log(pessoa.age);
console.log(pessoa.name);

pessoa.logDetails();

const colega = new CharAccount('ticaricatica', 250, 'jj', 80);
//console.log(colega.nickname);
colega.logDetails();
colega.logCharDetails();

colega.setLevel = 500;

console.log(colega.getLevel)

