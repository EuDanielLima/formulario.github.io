const list = []
function salvar (attribute) {
    if (attribute.checked){
        list.push(attribute.value)
    }
}


let data = new Date()
let mesAtual = data.getMonth() + 1
let anoAtual = data.getFullYear()
const mesAni = 11
const anoAni = 2024
let mes = mesAtual - mesAni
let ano = (anoAtual - anoAni) * 12
let mesTotal = mes + ano


function nota () {
    let p4 = window.document.getElementById('p4').value
    if (p4 == mesTotal) {
        list.push(p4)
    }
    let r = window.document.getElementById('r')
    r.innerHTML = ''
    r.innerHTML = `<strong>Respostas corretas: </strong>`
    let cont = 0
    for (let i = 0; i < list.length; i++) {
        let p = window.document.createElement('p')
        p.textContent = `${i + 1}_ ${list[i]}`
        r.appendChild(p)
        cont+=1
    }
    let div = window.document.getElementById('n')
    let p = window.document.createElement('p')
    let p2 = window.document.createElement('p')
    p2.textContent = 'Sua nota foi de: ' + (cont * 2)
    div.appendChild(p)
    p.textContent = `_________________`
    div.appendChild(p2)
    let cont2 = cont * 2
    if (cont2 == 0) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Meu Deus...'
        div.appendChild(p3)
        
    }
    else if (cont2 == 2) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Pelo menos uma, né?'
        div.appendChild(p3)
       
    }
    else if (cont2 == 4) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Recuperação!!!'
        div.appendChild(p3)
    }
        
    else if (cont2 == 6) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Nada mal...'
        div.appendChild(p3)
    }
        
    else if (cont2 == 8) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Essa foi por pouco!'
        div.appendChild(p3)
        
    }
    else if (cont2 == 10) {
        let p3 = window.document.createElement('p')
        p3.textContent = 'Você me ama : )'
        div.appendChild(p3)
        
    }

}

    




