	function setup() {
		document.querySelectorAll(".card-container .flip-card-inner").forEach(item => {
			item.addEventListener("click", function() {
				console.log(this);

				if(this.classList.contains("fix-card")) {
					return;
				}
				if(this.classList.contains("rotate-card")) {
					console.log("A");
					this.classList.remove("rotate-card");
					return;
				}
				console.log("B");
				
				if((selected = document.querySelectorAll(".rotate-card")[0]) != undefined) {
					console.log("C");
					var firstName = selected.querySelector(".card-back").getAttribute("data-name");
					var  secondName = this.querySelector(".card-back").getAttribute("data-name");
					if(firstName !== secondName) {
					console.log("D");
					  this.classList.add("rotate-card");
					  var self = this;
					  window.setTimeout(() => {self.classList.remove("rotate-card");selected.classList.remove("rotate-card");}, 700);
					} else {
					  this.classList.add("fix-card");
					  selected.classList.add("fix-card");
					  this.classList.remove("rotate-card");
					  selected.classList.remove("rotate-card");
					}
				}
				else {
					this.classList.add("rotate-card");
				}
				
			  
			});
			
		});

	}



function onLoad() {
    const dependencias = {
        tela: Tela, // a classe tela é global
        util: Util
    }
    // inicializa mos o jogo da memoria
    window.jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar();
	
	
    
}
window.onload = onLoad
