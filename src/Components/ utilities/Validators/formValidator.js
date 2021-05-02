

export const required = value =>  value ? undefined : 'Поле не заполнено'

export const minLength5 = value =>  value.length < 5 ? 'Введите от 5 символов' : undefined

export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Вводите только буквы или цифры'
        : undefined
