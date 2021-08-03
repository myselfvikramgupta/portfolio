import Button from "./components/button/Button"
function Introduction() {
    return (
        <>
            <section className="home">
                <div className="bg_hero">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.8,-56C59.6,-47,65.2,-29.8,68.5,-11.9C71.8,5.9,72.8,24.2,65.1,37.7C57.5,51.1,41.1,59.6,23.6,66.7C6.1,73.8,-12.5,79.6,-25.7,73.5C-39,67.5,-46.8,49.5,-55.8,32.8C-64.8,16.1,-74.8,0.5,-73.8,-14.3C-72.7,-29.2,-60.5,-43.4,-46.4,-51.9C-32.2,-60.5,-16.1,-63.4,0.9,-64.5C18,-65.6,36,-65,47.8,-56Z" transform="translate(40 0)" />
                    </svg>

                </div>
                <div className="container">
                    <div className="intro_section">
                        <div className="profile_image">
                            <div className="image">
                                <img src="/images/profile1.png" alt="" />
                            </div>
                        </div>
                        <div className="intro">
                            <h1>Hi there!</h1>
                            <h2>I’m Vikram Gupta</h2>
                            <h3>MERN Stack Developer</h3>
                        </div>
                      <div className="btn_group">

                      <Button link="#work" btnType="btn_primary_outline" text="My Work" />
                      <Button link="https://drive.google.com/file/d/1YMy_zrrduW7X__Zsjg2kL9rO31e9eVfB/view?usp=sharing" btnType="btn_primary" text="Resume" />
                    
                      </div>
                     
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
