/* global test */
/* global expect */
/* Las dos lineas anteriores, son porque test y expect vienen del CDN */

// Importamos suma para poder hacer el test
import { suma } from "./suma.js"

// Realizamos el test en formato Jest para ver si va bien
test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
