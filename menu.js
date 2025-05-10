
class Menu {
    constructor(mobileMenu, navList, navLinks) {

      this.menu = document.querySelector(mobileMenu);
      this.lista = document.querySelector(navList);

      this.links = document.querySelectorAll(navLinks);
      this.ativarClasse = "ativar";
  
      this.controle = this.controle.bind(this);
    }
  
    animacaoLinks() {

      this.links.forEach((link, i) => {
        
        link.style.animation ? (link.style.animation = "") : (link.style.animation = `efeitos 0.8s ease forwards ${i / 7 + 0.3}s`);
      });
    }
  
    controle() {

      this.lista.classList.toggle(this.ativarClasse);

      this.menu.classList.toggle(this.ativarClasse);
      
      this.animacaoLinks();
    }
  
    eventoClick() {
      this.menu.addEventListener("click", this.controle);
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

