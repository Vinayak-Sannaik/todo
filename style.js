const list1 = [{
  name : 'Be happy',
  dueDate : '2023-05-03'
}];

renderTodoList();
document.querySelector('.js-text-button').addEventListener('keydown',(event) =>{
  if (event.key === "Enter"){
    addTodoList();
  }
});

document.querySelector('.js-add-button').addEventListener('click',() =>{
  addTodoList();
});

function addTodoList(){
  const dueDate = document.querySelector('.js-date-button').value;
  const name = document.querySelector('.js-text-button').value;

  console.log(dueDate)
  console.log(name)
  list1.push({
    name: name,
    dueDate: dueDate
  });
  document.querySelector('.js-text-button').value = '';// after getting input value when u press add or enter make input none
  renderTodoList();
}

function renderTodoList(){
  let listTodoHTML = '';
  let count = 1;
  for (let i = 0; i < list1.length ; i++){
    const todoObject = list1[i];
    const name = todoObject.name ;
    const dueDate = todoObject.dueDate ;

    const html = `
    <div> ${count} ${"."}${ name}</div>
    <div>${dueDate}</div>
    <button class="delete-buttons" onclick="
        list1.splice(${i} , 1);
        renderTodoList();
    ">Delete</button>`;
    
    listTodoHTML += html;
    count += 1;
  }

  document.querySelector('.listOfWorks').innerHTML = listTodoHTML;
}
