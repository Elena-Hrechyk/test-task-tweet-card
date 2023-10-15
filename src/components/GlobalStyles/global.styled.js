import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --font-main: 'Montserrat', sans-serif;
  --color-main: #EBD8FF;
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  margin: 0;
  font-family: var(--font-main);
  font-style: normal;
  color: var(--color-main);
  scroll-behavior: smooth;
  background-color: #ebd8ff;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  color: inherit;
}
`;
