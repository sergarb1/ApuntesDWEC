class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto
    this.ancho = ancho
  }

  get area () {
    return this.alto * this.ancho
  }
}
const cuadrado = new Rectangulo(10, 10)
const sumar = (a, b) => a + b
alert(sumar(cuadrado.area, 3))
