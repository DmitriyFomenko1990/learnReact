import style from './FormsControls.module.css'

export const Input = ({input, meta, placeholder, type,  meta: { touched, error, warning }}) =>{

    return <div>
        <input {...input}
               type={type}
               placeholder={placeholder}
               className={touched && input.values && style.inputErr} />
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
}
