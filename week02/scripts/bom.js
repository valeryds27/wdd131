const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')
const li = document.createElement('li');
const deleteButton = document.createElement('button');
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElememt('button');
    li.textContent = item; //note the use of the displaylist parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');//this references the CSS rule .delete{width:fit--content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);//note this new function that is needed to remove the chapter from the array and LocalStorage.
        input.focus();//set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}
button.addEventListener('click', function () {
    if (input.value !== '') { //make sure the inpput is'n empty"
        displayList(input.value);//call the function that outputs the submitted chapter
        chaptersArray.push(input.value);//add the chapter to the array
        setChapterList();//update the LocalStorage with the new array
        input.value = '';//clear the input
        input.focus();//set the focus back to the input
    }
})
let chaptersArray = getChapterList(
    chaptersArray.forEach(chapter => {
        displayList(chapter);
    })
)
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);//this slices off the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter);
}