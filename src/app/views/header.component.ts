import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  template: `
    <div id="logo">
      <h1><span style="font-size: 1.15em">F</span>erran Ramírez</h1>
      <h2 class="changing"></h2>
    </div>
    <div class="scroll-cta">
      <div>Scroll down</div>
      <img
        src="../../assets/icons/scroll-arrow.gif"
        style="width: 30px"
        alt="scroll down"
      />
    </div>
  `,
  styles: [
    `
      :host {
        height:100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        color: white;
        font-family: "Montserrat Alternates";
      }
      .scroll-cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 5px;
      }
      /* Logo Glitch! */
      #logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }
      h1,
      h2 {
        opacity: 1;
        margin: 0;
        color: white;
      }
      h1 {
        font-size: min(4.5rem, 70vh, 6rem);
        animation: glitch1 7s infinite;
      }
      h2 {
        font-size: clamp(1rem, 30vw, 1.5rem);
        animation: glitch2 8s infinite;
      }
      h1:hover,
      h2:hover {
        opacity: 0.5;
        animation-duration: 2s;
      }
      .changing {
        display: inline;
        text-indent: 8px;
      }
      .changing:before {
        content: "Computing Engineer";
        animation: first-word 10s infinite linear;
      }
      @keyframes first-word {
        20% {
          content: "App Developer";
        }
        40% {
          content: "Web  Developer";
        }
        60% {
          content: "Software Developer";
        }
        80% {
          content: "Software Engineer";
        }
        100% {
          content: "Computing Engineer";
        }
      }
      @keyframes glitch1 {
        1% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        8% {
          text-shadow: 2px -4px rgb(202, 149, 255);
          color: rgb(226, 255, 190);
          opacity: 0.9;
        }
        11% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        27% {
          text-shadow: none;
          color: white;
          opacity: 1;
          transform: none;
        }
        30% {
          text-shadow: 1px 5px rgb(121, 152, 255);
          color: rgb(255, 161, 147);
          transform: skew(-0.9deg, -0.1deg);
          opacity: 0.9;
        }
        35% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        52% {
          text-shadow: none;
          transform: none;
          color: white;
          opacity: 1;
        }
        55% {
          text-shadow: -4px -1px rgb(211, 255, 153);
          color: rgb(255, 169, 226);
          transform: skew(1.4deg, 0.5deg);
          opacity: 0.9;
        }
        50% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        72% {
          text-shadow: none;
          color: white;
          transform: none;
          opacity: 1;
        }
        75% {
          text-shadow: 2px -4px rgb(140, 255, 245);
          color: rgb(255, 228, 154);
          transform: skew(0.8deg, -0.1deg);
          opacity: 0.9;
        }
        80% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        100% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
      }

      @keyframes glitch2 {
        0% {
          text-shadow: none;
          color: white;
          opacity: 1;
          transform: none;
        }
        7% {
          text-shadow: 4px 0px rgb(211, 255, 153);
          color: rgb(255, 169, 226);
          opacity: 0.9;
          transform: skew(1.5deg, -0.6deg);
        }
        10% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        27% {
          text-shadow: none;
          color: white;
          transform: none;
          opacity: 1;
        }
        30% {
          text-shadow: 2px -4px rgb(121, 152, 255);
          color: rgb(255, 161, 147);
          transform: skew(-1deg, 0.1deg);
          opacity: 0.9;
        }
        35% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        52% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        55% {
          text-shadow: -4px -1px rgb(202, 149, 255);
          color: rgb(226, 255, 190);
          opacity: 0.9;
        }
        50% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        72% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        75% {
          text-shadow: 0px -4px rgb(140, 255, 245);
          color: rgb(255, 228, 154);
          opacity: 0.9;
        }
        80% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
        100% {
          text-shadow: none;
          color: white;
          opacity: 1;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
