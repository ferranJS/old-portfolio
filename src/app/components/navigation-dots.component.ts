import { CommonModule } from "@angular/common";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "app-navigation-dots",
  standalone: true,
  template: `
    <div class="nav-dots">
      <div
        *ngFor="let section of sections"
        [class]="'dot ' + (section === sectionActive ? 'active' : '')"
        (click)="scrollTo(section)"
      ></div>
    </div>
  `,
  styles: [
    `
      .nav-dots {
        position: fixed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        right: 0;
        bottom: 50%;

        margin-right: 2%; /* TODO: Make mobile responsive */
      }

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgb(172, 172, 172);

        margin-top: 2px;
        margin-bottom: 2px;
      }

      .dot.active {
        background-color: #0b2448;
      }
    `,
  ],
  imports: [CommonModule],
})
export class NavigatonDotsComponent implements OnInit, OnDestroy {
  @Input()
  sections!: string[];
  sectionActive!: string;

  constructor() {}

  ngOnInit(): void {
    this.sectionActive = this.sections[0];

    window.addEventListener("wheel", this.getSectionActive);
    window.addEventListener("touchmove", this.getSectionActive);

    this.getSectionActive();
  }

  ngOnDestroy(): void {
    window.removeEventListener("wheel", this.getSectionActive);
    window.addEventListener("touchmove", this.getSectionActive);
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
      if ((aux >= 0 && aux < percentage) || (aux <= 0 && aux > percentage)) {
        sectionShowed = elemId;
        percentage = aux;
      }
    });

    this.sectionActive = sectionShowed;
  };

  scrollTo(elemId: string) {
    let pos = document.getElementById(elemId)!.offsetTop;
    this.sectionActive = elemId;

    window.scroll({
      top: pos,
      left: 0,
      behavior: "smooth",
    });
  }

  /** Pass an element ID and returns a number which, the closer to 0,
   * more percentage of the element is been seen on the viewport.
   */
  checkItemOnScreen(elemId: string): number {
    const element: DOMRect = document
      .getElementById(elemId)!
      .getBoundingClientRect();

    return element.top;
  }
}
