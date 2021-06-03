import React from 'react'
import classNames from 'classnames'

interface todoMethods {
  done: boolean,
  text: string,
  onChange: (text: number) => void,
  id: number,
  onDelete:(text: number)=> void,
}

const Task: React.FC<todoMethods> = ({ done, text, onChange, id, onDelete }) => {
    const listItemClasses = classNames('list-item', {'list-item_done': done});

    return (
        <li className={listItemClasses}>
            <input className="list-item__checkbox"
                type="checkbox"
                defaultChecked={done}
                onChange={()=> onChange(id)} />
            <span className="list-item__text">{text}</span>
            <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
        </li>
    )
}

export default Task;