// your code here
const createLi = (text) => {
    const list = document.getElementById('tasks');
    // const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = text + "!";
    li.style.color = document.getElementById('colors').value;
    list.append(li);

    li.addEventListener('click', (event) => {
        event.target.remove();
        event.preventDefault();
    });

    li.addEventListener('mouseleave', (event) => {
        let data = prompt('Edit?');
        event.target.innerText = data;
    })

}

const listButton = document.getElementById('listButton');
listButton.addEventListener('click', (event) => {
    const input = document.getElementById("new-task-description").value + ' ' + document.getElementById("new-task").value;
    createLi(input);
    event.preventDefault();
});