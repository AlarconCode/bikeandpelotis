

function Logo(props) {
    return (
        <img 
          className={props.className}
          alt={props.alt}
          src={props.src}
          width={props.width}
        />
    )
}

export default Logo