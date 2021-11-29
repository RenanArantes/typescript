//Tipo Alias(apelido, atalho) é o tipo que voce mesmo define e pode reutiliza-lo
type Uid = number | string | undefined


//Tipo Union é definido pelo pipe(ou) number | string
function logDetails(uid: number | string, item: string) {
    console.log(`a product with ${uid} has a title as ${item}`)
}

function logInfo(uid: Uid, item: string) {
    console.log(`a product with ${uid} has a title as ${item}`)
}

logDetails(123, "sapato")
logDetails("123", "sapato")

logInfo(123, "asda")
logInfo("123", "asda")

//O Tipo Alias também pode ser usado para definir valores pré-definidos
type Platform = 'windows' | 'linux' | 'mac os' | 'ios'

function renderPlatform(plat: Platform) {
    return plat
}

renderPlatform('linux')
