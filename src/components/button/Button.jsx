function Button({text="",btnType="",link=""}) {
    return (
        <>
              <a href={link} className={`btn ${btnType}`}>{text}</a>
        </>
    )
}

export default Button
