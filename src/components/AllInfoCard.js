import './AllInfoCard.css';


const AllInfoCard = ({infoCard, onDelete, onEdit}) => {
    return ( 
        <div className='info'>
        <h2><span>Nombre:</span> {infoCard.first_name}</h2>
        <h2><span>Apellido:</span> {infoCard.last_name}</h2>
        <h2><span>Correo:</span> {infoCard.email}</h2>
        <h2><span>Cumpleaños:</span> {infoCard.birthday}</h2>
        <span>
            <button onClick={() => onEdit(infoCard)}>Editar</button>
            <button onClick={() => onDelete(infoCard.id)}>Eliminar</button>
        </span>
        </div>
    )
}

export default AllInfoCard;
