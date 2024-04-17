function sorteando(){
    const nomes = ['Sabrina', 'Carol', 'Goiabinha', 'Stefane'];
    const sort = Math.floor(Math.random()*nomes.length);
    let res = document.querySelector('#res');

    res.innerHTML = `A sorteada foi:  ${nomes[sort]}` 
}

let botao = document.getElementById('sortear');
botao.addEventListener("click",sorteando);
/* Sabrina
Carol
Goiabinha  */