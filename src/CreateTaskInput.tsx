import React, { useState } from 'react';

interface TodoFormProps {
  onCreate(text: string): void
}

const CreateTaskInput: React.FC<TodoFormProps> = props => {
    const [value, setValue] = useState<string>('') 
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

   const handleTaskCreate = () => {
        props.onCreate(value)
        setValue('')
    }

        return (
            <div className="create-task">
                <input type="text"
                    value={value}
                    onChange={handleChange}
                    className="create-task__input" />

                <button className=" btn create-task__btn" onClick={handleTaskCreate}>Create</button>
            </div>
        );
};


export default CreateTaskInput;
