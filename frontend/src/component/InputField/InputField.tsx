import React from 'react';
import './InputField.css';

type Props = {
    inputId:string,
    labelValue:string,
    changeAction:(e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?:string
}

const InputField = ({inputId, labelValue, changeAction, placeholder}:Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={inputId} className='form-label'>{labelValue}</label>
            <input id={inputId} onChange={(e) => changeAction(e)} className='form-control' type={'text'}  placeholder={placeholder}/>
        </div>);
}

export default InputField;