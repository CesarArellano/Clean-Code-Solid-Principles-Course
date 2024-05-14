import "./style.css";

import "./code-smells/01-singleton";
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Check the Javascript's console</span>
`;
