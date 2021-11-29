//para ativar os decoratos habilite a config em tsconfig
//os decoratos é uma declaracao que pode ser fixada em uma classe, metodo, parametro ou acesso
//o decorator vai trabalhar nas partes anotadas para adicionar coisas novas e vai ficar vigiando-os

//@Component
//@Selector
//useState("asda")

//Class decorator roda no momento em que a classe for criada

//factory
// function logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target} `);
//     }
// }

// @logger('asdasd')
// class Foo {}

function setAPIVersion(apiversion: string) {
    return (target: any) => {
        return class extends target {
            version = apiversion;
        }
    }
}

@setAPIVersion("2.0.0")
class API{}

console.log(new API());

//Property decorator roda no momento em que a classe for criada

function minLength(length: number) {
    return(target:any, key: string) => {
        let val = target[key];

        const getter = () => val;

        const setter = (value: string) => {
            if(value.length >= length) {
                console.log(`Erro: voce nao pode criar ${key} menor que ${length}`);
            } else {
                val = value;
            }
        }

        Object.defineProperty(target, key,  {
            get: getter,
            set: setter,
        })
    }
}

class Movie {
    // validacao se for menor que 5 de erro
    @minLength(5)
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

const movie = new Movie("Ticaricatica");


//Method decorator, roda no momento que em o metodo for executado
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {
            console.log(`esperando ${ms / 1000}s ...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        }
    }
}


class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

    @delay(5000)
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}

const human = new Greeter('Ticaricaman');
human.greet()

//Parameter decorator
//Acessor decorator