const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const edit = document.createElement('button')
        const delete_=document.createElement('button')

        delete_.setAttribute('class' ,'delete_button')
        edit.setAttribute('class' , 'edit_button')
        div.setAttribute('class', 'block_text')
        edit.innerHTML='edit'
        text.innerHTML = input.value
        delete_.innerHTML = 'delete'

        div.append(edit)
        div.append (delete_)
        div.append(text)
        todoList.append(div)

        edit.onclick = () =>{
            let ed = prompt()
            text.innerHTML = ed

        }
        delete_.onclick = () =>{
            todoList.removeChild(div)
        }


    }
    input.value = ''

}

createButton.onclick = () => createTodo()
input.addEventListener('keydown', e => (e.keyCode === 13) ? createTodo() : false)
