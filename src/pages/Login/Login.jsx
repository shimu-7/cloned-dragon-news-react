import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Result } from "postcss";


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page',location.pathname);

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        //console.log(form.get('email'));
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then(result =>{
            console.log('user logged in successfully',result.user)

            // navigate use
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }


    return (
        <div>
            <Navbar></Navbar>

            <div >
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center my-2">Do not have an account? Please <Link to="/register"><span className="text-red-600 font-bold">Register</span></Link></p>
            </div>

        </div>
    );
};

export default Login;