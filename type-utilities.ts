type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

const todo: Readonly<Todo> = {
    title: 'Zerar wow',
    description: 'Fazer todos os achievs',
    completed: false,
}

console.log(todo);

//todo.completed = true;
//o Partial deixa as propriedades como opcionais em seu escolpo
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true})

// Pick pega apenas as propriedades escolhidas
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: 'malhar',
    completed: false
}

//Omit é o inverso do pick
type TodoPreview2 = Omit<Todo, "description">

const todo4: TodoPreview2 = {
    title: 'beber agua',
    completed: true
}

//quando se quer props especificas e poucas utilizase o pick
//quando se quer muitas props utilizase o omit