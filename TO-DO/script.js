document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const pendingTasksList = document.getElementById('pending-tasks-list');
    const completedTasksList = document.getElementById('completed-tasks-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
    }

    function createTaskItem(taskText) {
        const li = document.createElement('li');
        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';
        const taskName = document.createElement('span');
        taskName.textContent = taskText;
        const taskTime = document.createElement('span');
        taskTime.className = 'task-time';
        taskTime.textContent = new Date().toLocaleString();
        
        taskDetails.appendChild(taskName);
        taskDetails.appendChild(taskTime);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.removeChild(completeBtn);
            completedTasksList.appendChild(li);
            li.classList.add('completed');
        });

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit Task:', taskText);
            if (newTaskText) {
                taskName.textContent = newTaskText;
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(taskDetails);
        li.appendChild(completeBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        return li;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('add-note-btn');
    const newNoteInput = document.getElementById('new-note');
    const notesList = document.getElementById('notes-list');

    addNoteBtn.addEventListener('click', () => {
        const noteText = newNoteInput.value.trim();
        if (noteText) {
            const currentDate = new Date();
            const dateTimeString = formatDateTime(currentDate);
            addNoteToList(noteText, dateTimeString);
            newNoteInput.value = '';
        }
    });

    function addNoteToList(noteText, dateTimeString) {
        const li = document.createElement('li');
        li.className = 'note-item';

        const noteTextElement = document.createElement('div');
        noteTextElement.className = 'note-text';
        noteTextElement.textContent = noteText;

        const dateTimeElement = document.createElement('div');
        dateTimeElement.className = 'date-time';
        dateTimeElement.textContent = dateTimeString;

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit Note:', noteText);
            if (newText !== null) {
                noteTextElement.textContent = newText.trim();
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        buttonGroup.appendChild(editBtn);
        buttonGroup.appendChild(deleteBtn);

        li.appendChild(noteTextElement);
        li.appendChild(dateTimeElement);
        li.appendChild(buttonGroup);

        notesList.appendChild(li);
    }

    function formatDateTime(date) {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    }
});
 

