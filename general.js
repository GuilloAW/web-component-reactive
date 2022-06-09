const d = document;
const app = new Component({
  el: "#todo-list",
  data: {
    todoList: []
  },
  template: function (props) {
    if (props.todoList.length < 1) {
      return `<p><em>List empty, no activities done</em></p>`;
    }
    let todos = props.todoList.map(item => `<li>${item}</li>`).join("");
    return todos;
  }
});
//7 actualizamos el estado con setState dandole valores predeterminados y renderizamos la nueva info
app.setState({
  todoList: []
});
/*9 capturamos los datos del envio del formulario */
document.addEventListener("submit",e => {
  e.preventDefault();
  if (!e.target.matches("#todo-form")) return false;
  const inpt= document.querySelector("#todo-item");
  if(!inpt) return;
/*10 conseguimos el estado y lo actualizamos de forma reactiva con getState */
  const lastState= app.getState();
  lastState.todoList.push(inpt.value);
  app.setState({ todoList: lastState.todoList });
})

