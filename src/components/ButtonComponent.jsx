const Button =({ onClick, buttonText  })=>{
    return(
        <button type={"button"} onClick={onClick} className="bg-green-500 text-white">
           {buttonText}
            </button>
    )
}
export default Button