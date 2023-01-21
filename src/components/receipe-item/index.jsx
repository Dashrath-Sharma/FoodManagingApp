const ReceipeItem = ({receipe}) => {
    const {id, image, title} = receipe
    return(
        <div> 
            <img src={image} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

export default ReceipeItem