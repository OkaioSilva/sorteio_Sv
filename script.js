(function(){
    let res = document.querySelector('.res');
    let botao = document.getElementById('sortear');
    botao.addEventListener("click",sorteando);


    function sorteando(){
        const nomes = ['Sabrina', 'Carol', 'Goiabinha', 'Stefane'];
        const sort = Math.floor(Math.random()*nomes.length);
        res.innerHTML = "Sorteando..."
        setTimeout(function(el){
            const bg = document.querySelector('.bg')
            const container = document.querySelector('.container ul')
            bg.style.backgroundImage = 'url(img/sabio.jpg)'
            bg.style.opacity = '1'
            res.innerHTML = `A sorteada foi:  ${nomes[sort]}` 
        }, 2000)
    
    }
    
    /* Sabrina
    Carol
    Goiabinha  */


})()
