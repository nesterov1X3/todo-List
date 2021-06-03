import React, { useState, useEffect } from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput'
import { createTask, fetchTasksList, updatedTask, deleteTask } from './tasksGateway'

interface taskDataProp  {
  id: number,
  text: string,
  done: boolean,
}

const TasksList = () => {
const [task, setTask] = useState<taskDataProp[]>([])


    const hetchTasks = () => {
        fetchTasksList()
            .then(tasksList =>
              setTask(tasksList)
            );
    };
    useEffect(() =>
    hetchTasks()
    )

    //CREATE!!!!!!!
   const onCreate = (text: string): void => {
        const newTask = {
            text,
            done: false
        }
        createTask(newTask)
            .then(() => hetchTasks())
 
    }


    //UPDATE!!!!!!!!!!!
    const handleTaskStatusChange = (id: number) => {
        // find tasks in a list 
        // toggle done value
        // save updated list

        const { done, text }: any = task.find(task => task.id === id)
        const upTask: taskDataProp = {
            ...text,
            done: !done
        };
        updatedTask(id, upTask)
            .then(() => hetchTasks())
    };
    //DELETE!!!!!!!!!!
    const handleTaskDelete = (id: number) => {
        deleteTask(id)
        .then(() => hetchTasks())
        
    };

        const sortedList = task
            .slice()
            .sort((a, b) => Number(a.done) - Number(b.done))
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={onCreate} />
                <ul className="list">
                    {sortedList.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={handleTaskDelete}
                            onChange={handleTaskStatusChange}
                        />
                    ))}

                </ul>
            </div>
        )
}

export default TasksList;