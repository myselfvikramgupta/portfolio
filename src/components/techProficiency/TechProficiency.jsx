function TechProficiency({ language = "", logo = "" }) {
    return (
        <>
            <div className={`${language} icons_box`}>
                <img src={`/images/icons/${logo}`} alt="" />
            </div>
        </>
    )
}

export default TechProficiency
