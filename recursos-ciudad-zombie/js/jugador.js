/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  moverse: function(Enx , Eny){
    this.x = this.x + Enx;
    this.y = this.y + Eny;
  },

  perderVidas: function(cantVidas){
    this.vidas = this.vidas - cantVidas;
    //cada vez que pierda una vida meter un zumbido en la imagen
  }

  

}
