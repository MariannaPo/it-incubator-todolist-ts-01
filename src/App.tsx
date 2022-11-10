import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const task1 = "What to learn"
    const [tasks, setTasks] = React.useState<Array<TaskType>>([
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS/TS", isDone: false},
    ])
    const tasks2 = 'Songs'
        const [taskgs, setTasgks] = React.useState<Array<TaskType>>([
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ])

    const [filter, setFilter] = React.useState<FilterValuesType>("all")

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
        console.log(tasks)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender;
    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(task => task.isDone)
            break
        case "active":
            tasksForRender = tasks.filter(task => !task.isDone)
            break
        default:
            tasksForRender = tasks;
    }

    return (
        <div className="App">
            <TodoList
                title={'What to learn?'}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
            <TodoList title={'Songs'}
            tasks={tasksForRender}
            removeTask={removeTask}
            changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
