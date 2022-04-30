import { useForm } from "react-hook-form";


const CreateForm = ({onCreate}) => {

    const { register, handleSubmit, reset } =useForm()
    
    const onSubmit = (res) => {
        onCreate(res)
        console.log(res)
    } 


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">ingrese nombre</label>
        <input id="name"{...register ("first_name")} />
        <br />
        <label htmlFor="last">ingrese apellido</label>
        <input id="last"{...register ("last_name")} />
        <br />
        <label htmlFor="email">ingrese correo</label>
        <input id="email"{...register ("email")} />
        <br />
        <label htmlFor="poss">ingrese contraseña</label>
        <input id="poss"{...register ("password")} />
        <br />
        <label htmlFor="date">ingrese fecha de nacimiento</label>
        <input id="date"type='date' {...register ("birthday")} />
        <br />
        <input type='submit' value='enviar'/>
        </form>
    )
}

export default CreateForm;