import './styles.css'

const ReceipeItem = ({ receipe }) => {
    const { id, image, title } = receipe
    return (
        <div className='receipe-item'>
            <div>
                <img src={image} alt={title} />
            </div>
            <p>{title}</p>
            <button>Add to Favorites</button>
        </div>
    )
}

export default ReceipeItem