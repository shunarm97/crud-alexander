import { useForm } from "react-hook-form";

const CreateForm = ({onCreate}) => {

    const { register, handleSubmit, reset} =useForm()
    const defaultValues = {first_name:"", last_name:"", email:"", password:"", birthday:""}
    
    const onSubmit = (res) => {
        onCreate(res)
        reset(defaultValues)
    } 

    return (
        <div className="dates">
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre:</label>
        <input id="name"{...register ("first_name")} />
        <br />
        <label htmlFor="last">Apellido:</label>
        <input id="last"{...register ("last_name")} />
        <br />
        <label htmlFor="email">Correo:</label>
        <input id="email"{...register ("email")} />
        <br />
        <label htmlFor="poss">Contraseña:</label>
        <input id="poss"{...register ("password")} />
        <br />
        <label htmlFor="date">Fecha de Nacimiento:</label>
        <input id="date"type='date' {...register ("birthday")} />
        <br />
        <input type='submit' value='Enviar' className="boton"/>
        </form>
        </div>
    )
}

export default CreateForm;