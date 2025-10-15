    function tamanhoTexto(botao) {
        //Obtém todos os elementos de paragráfo (p) da página
        let p = document.querySelectorAll("p");
        
        //Para cada elemento "p"
        for( let i = 0; i < p.length; i ++) {
            //Obtém tamanho da fonte do paragráfo atual
            let tamanhoAtual = parseFloat(window.getComputedStyle(p[i]).fontSize);
            
            //Aumenta ou diminui o tamanho da fonte dependendo do texto botão
            if(botao.textContent == "A+")  {
                //Aumenta 2px o tamanho da fonte atual do paragráfo
                p[i].style.fontSize = (tamanhoAtual + 2) + "px";
            } else if (botao.textContent == "A-") {
                //Diminuir 2px o tamanho da fonte atua do paragráfo atual
                p[i].style.fontSize = (tamanhoAtual - 2) + "px";
            }
        }
    }