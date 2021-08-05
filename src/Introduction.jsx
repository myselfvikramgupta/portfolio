import Button from "./components/button/Button"
import HerobgSvg from './components/svgIcon/HerobgSvg'
function Introduction() {
    return (
        <>
            <section className="home">
                <div className="bg_hero">
                  <HerobgSvg />
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
