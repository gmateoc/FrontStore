import {ErrorMessage, useField} from 'formik';
import {InputText} from "primereact/inputtext";
import {Message} from 'primereact/message';


const CustomErrorMessage = ({children}) => {
    return (
        <Message severity="error" text={children} className='formErrorMessage mt-1'/>
    )
}

export const CustomFormLoginInput = ({label, iconSrc, placeholder, ...props}) => {
    const [field] = useField(props);
    return (
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <label htmlFor={props.id || props.name} >
                {label}
            </label>
            <div
                style={{
                    position: 'relative',
                    backgroundColor: 'black',
                    borderRadius: '5px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none'
                    }}
                >
                    <img src={iconSrc} alt={label} />
                </div>
                <InputText
                    {...field} {...props} placeholder={placeholder}
                    style={{ backgroundColor: '#282828 !important' }}
                    className='w-full'
                />
            </div>
            <ErrorMessage name={props.name} component={CustomErrorMessage} />
        </div>
    );
};

export const CustomFormChangeNameInput = ({label, iconSrc, placeholder, ...props}) => {
    const [field] = useField(props);
    return (
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <label htmlFor={props.id || props.name} >
                {label}
            </label>
            <div
                style={{
                    position: 'relative',
                    backgroundColor: 'none',
                    borderRadius: '5px',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none'
                    }}
                >
                    <img src={iconSrc} alt={label} />
                </div>
                <InputText
                    {...field} {...props} placeholder={placeholder}
                    style={{ backgroundColor: '#282828 !important' }}
                    className='w-full'
                />
            </div>
            <ErrorMessage name={props.name} component={CustomErrorMessage} />
        </div>
    );
};