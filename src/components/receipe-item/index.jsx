import './styles.css'

const ReceipeItem = ({ receipe, handleClick }) => {
    const { id, image, title } = receipe
    return (
        <div key={id} className='receipe-item'>
            <div>
                <img src={image} alt={title} />
            </div>
            <p>{title}</p>
            <button onClick={handleClick}>Add to Favorites</button>
        </div>
    )
}

export default ReceipeItem