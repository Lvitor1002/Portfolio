
class Menu {
    constructor(mobileMenu, navList, navLinks) {

      this.menu = document.querySelector(mobileMenu);
      this.lista = document.querySelector(navList);

      this.links = document.querySelectorAll(navLinks);
      this.ativarClasse = "active";
  
      this.controle = this.controle.bind(this);
      this.fecharMenu = this.fecharMenu.bind(this); 

    }
  
    

    eventoClick() {
        
    }

    animacaoLinks() {
        this.links.forEach((link, i) => {
            // Reinicia a animação a cada abertura
            link.style.animation = `efeitos 0.8s ease forwards ${i / 7 + 0.3}s`;
        });
    }
  
    controle() {
        this.lista.classList.toggle(this.ativarClasse);
        this.menu.classList.toggle(this.ativarClasse);
        
        if (this.lista.classList.contains(this.ativarClasse)) {
            this.animacaoLinks();
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }
  
    
    fecharMenu() {
        this.lista.classList.remove(this.ativarClasse);
        this.menu.classList.remove(this.ativarClasse);
        document.body.classList.remove('no-scroll');
        
        // Força a reinicialização da animação
        this.links.forEach(link => {
            link.style.animation = '';
        });
    }
    
    eventoClick() {
      this.menu.addEventListener("click", this.controle);

      this.links.forEach(link => {
            link.addEventListener("click", this.fecharMenu);
        });
    }

    iniciar() {
      if (this.menu) {
        this.eventoClick();
      }
      
      return this;
    }
}
  
const menuCelular = new Menu(".mobile-menu",".nav-list",".nav-list li");
menuCelular.iniciar();

