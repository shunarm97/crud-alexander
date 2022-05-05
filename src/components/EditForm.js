import { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({defValues, onEdit}) => {

    const { register, handleSubmit, reset} = useForm()
    
    useEffect(() => {
    if (defValues) {
        reset(defValues)
    }
    }, [reset, defValues])
    
    const onSubmit = (res) => {
        onEdit(res)
    }

return ( 
    <div className="dates">
    <form onSubmit={handleSubmit(onSubmit)}>
        <label  htmlFor="name">Nombre:</label>
        <input id="name"required={true} {...register('first_name')}/> <br />
        <label htmlFor="last">Apellido:</label>
        <input id="last"required={true} {...register('last_name')}/> <br />
        <label htmlFor="email">Correo:</label>
        <input id="email"required={true} {...register('email')}/> <br />
        <label htmlFor="password">Contraseña:</label>
        <input id="password"required={true} {...register('password')}/> <br />
        <label htmlFor="date">Fecha de Nacimiento:</label>
        <input type={"date"} id="date"required={true} {...register('birthday')}/> <br />
        <input type="submit" value='Editar' className="boton" />
    </form>
    </div>
)
}

export default EditForm;