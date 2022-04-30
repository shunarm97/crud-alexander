import './AllInfoCard.css';


const AllInfoCard = ({infoCard, onDelete}) => {
    return ( 
        <div className='info'>
        <h2><span>Nombre:</span> {infoCard.first_name}</h2>
        <h2><span>Apellido:</span> {infoCard.last_name}</h2>
        <h2><span>Correo:</span> {infoCard.email}</h2>
        <h2><span>Cumpleaños:</span> {infoCard.birthday}</h2>
        <span>
            <button onClick={() => onDelete(infoCard.id)}>eliminar</button>
        </span>
        </div>
    )
}

export default AllInfoCard;

<span></span>