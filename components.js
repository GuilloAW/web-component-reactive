/*4 creamos la clase componente y retornamos el constructor,
/*5 a la clase componente le pasamos 3 parametros, id del ui, los datos y el layout con los datos a renderizar*/
const Component = (function () {
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };
   /*6 depues añadimos 3 metodos con prototipo para optimizar el objeto,  */

  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };
  /*8 validamos que el elemento de la ui y renderizamos el template*/
  Constructor.prototype.render = function () {
    const elmnt= document.querySelector(this.el);
    if(!elmnt) return;
    elmnt.innerHTML= this.template(this.data);
  };
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();