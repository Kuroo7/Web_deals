import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div  >

                {!user && (<div className='container'>
                    <Link to='/'>Home</Link>
                    <Link to='/signUp'>Signup</Link>
                    <Link to='/login'>Login</Link>
                </div>
                )}
                {user && (
                    <div className='container'>
                        <Link to='/'>Home</Link>
                        <Link to='/profile'>Profile</Link>
                        <Link onClick={handleClick} to='/'>logout</Link>

                        {/* <button onClick={handleClick}>Log out</button> */}
                    </div>
                )}
            </div>
        </header>

        // <div className="nav">
        //     {/* <img src={require("../logo.png")} alt="" /> */}
        //     <input type="checkbox" id="nav-check" />
        //     <div className="nav-header">
        //         <div className="nav-title">
        //             Reeds
        //         </div>
        //     </div>
        //     <div class="nav-btn">
        //         <label for="nav-check">
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </label>
        //     </div>
        //     <div className="nav-links">
        //         <Link to="/Home">Home</Link>
        //         <Link to="/Deals">Deals</Link>
        //         {/* <Link to='/profile'>Profile</Link>
        //         <button onClick={handleClick}>Log out</button> */}


        //         {user && (
        //             <div className="nav-links">
        //                 <Link to='/profile'>Profile</Link>
        //                 <button onClick={handleClick}>Log out</button>
        //             </div>
        //         )}
        //         <Link to="/SignUp">SignUp/Login</Link>
        //     </div>
        // </div>
    )
}
export default Navbar