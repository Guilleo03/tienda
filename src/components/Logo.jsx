import imgLogo from './../img/logo.png'
import './../styles/logo.scss'

const Logo = () => {
    return (
        <div>
            <a href="">
                <img className="logo" src={imgLogo} alt="Logo" />
            </a>
        </div>
    )
}

export default Logo
