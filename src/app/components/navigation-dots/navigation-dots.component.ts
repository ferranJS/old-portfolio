import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navigation-dots',
  standalone: true,
  templateUrl: './navigation-dots.component.html',
  styleUrls: ['./navigation-dots.component.css'],
  imports: [CommonModule]
})
export class NavigatonDotsComponent implements OnInit, OnDestroy {

  @Input()
  sections!: string[];
  sectionActive!: string;

  constructor() { }

  ngOnInit(): void {
    this.sectionActive = this.sections[0];

    window.addEventListener('wheel', this.getSectionActive);
    window.addEventListener('touchmove', this.getSectionActive);

    this.getSectionActive();
  }

  ngOnDestroy(): void {
    window.removeEventListener('wheel', this.getSectionActive);
    window.addEventListener('touchmove', this.getSectionActive);
  }

  /** 
   * TODO: FALTA PRECISIÓN 
   */
  getSectionActive = () => {
    let sectionShowed = this.sectionActive;
    let percentage = 100000000; // Número muy grande para evitar fallos

    this.sections.forEach((elemId) => {
      let aux = this.checkItemOnScreen(elemId);

      // console.log(`Section: ${elemId}`, aux)

      // Si el nuevo número (aux) se acerca más a 0 que el anterior, es que 
      // hay más sección elemId mostrandose por pantalla que sectionShowed
      if(
        (aux >= 0 && aux < percentage) ||
        (aux <= 0 && aux > percentage)
      ) {
        sectionShowed = elemId;
        percentage = aux;
      }
    });
    

    this.sectionActive = sectionShowed;
  }

  scrollTo(elemId: string) {
    let pos = document.getElementById(elemId)!.offsetTop;
    this.sectionActive = elemId;

    window.scroll({
      top: pos,
      left: 0,
      behavior: 'smooth'
    });
  }

  /** Pass an element ID and returns a number which, the closer to 0,
   * more percentage of the element is been seen on the viewport. 
   */
  checkItemOnScreen(elemId: string): number {
    const element: DOMRect = document.getElementById(elemId)!.getBoundingClientRect();

    return element.top;
  }
}
