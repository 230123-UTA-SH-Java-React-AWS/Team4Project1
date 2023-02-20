import React from 'react';
import './InputField.css';

type Props = {
    inputId:string,
    labelValue:string,
    inputType?:string,
    required?:boolean,
    changeAction:(e: React.ChangeEvent<HTMLInputElement>) => void,
    inputDefault?:string | number,
    placeholder?:string
}

const InputField = ({inputId, labelValue, inputType, required, changeAction, inputDefault, placeholder}:Props) => {
    return (
        <div className='form-group'>
            <label htmlFor={inputId} className='form-label'>{labelValue}</label>
            <input id={inputId} onChange={(e) => changeAction(e)} className='form-control' type={typeof inputType !== null ? inputType : 'text'}  value={inputDefault} placeholder={placeholder} required={typeof required !== null ? required : false}/>
        </div>);
}

export default InputField;