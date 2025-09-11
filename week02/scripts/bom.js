const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
li.append(li);
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        message.textContent = '';
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        list.appendChild(li);
        input.value = '';
        input.focus();
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
    }
});