import React from 'react';

type Props = {
    label: string,
    error?: string,
    type: string,
    name: string,
    placeholder?: string,
    value: string,
    onChange: (e: any) => void,
    required?: boolean
}

const FormInput = ({ label, error, onChange, ...otherInputProps }: Props) => {
    let inputElement = null;
    let inputStyles = "w-full py-[.5rem] px-4 rounded-lg outline-none transition-all duration-150 hover:shadow-sm focus:shadow-tertiary-900 hover:shadow-tertiary-900 text-gray-800 font-inherit placeholder:text-gray-600 placeholder:text-[.97rem] focus:ring focus:ring-offset-1 focus:ring-offset-slate-50 focus:ring-tertiary-900 "

    if(otherInputProps.type === "textarea")
        inputElement = (
            <textarea 
                {...otherInputProps}
                className={`form-textarea h-48 ${inputStyles}`}
                onChange={onChange}
            />
        )
    else 
        inputElement = (
            <input 
                {...otherInputProps}
                className={`form-input ${inputStyles}`}
                onChange={onChange}
            />
        )

    return (
        <div className='form-group flex flex-col gap-y-1' role="group">
            <label className='capitalize text-[.96rem]'>{label}</label>
            {inputElement}
            {error ? (
                <span className='form-error'>{error}</span> 
            ) : null}
        </div>
    )
}

export default FormInput