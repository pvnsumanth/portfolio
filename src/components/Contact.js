import { Component } from "react";
import photo from './photo.jpg';
import { Link } from "react-router-dom";
import './style.css';
class Contact extends Component{
    render(){
        return(
            <div class="mt-3 mb-3">
                <div class="container">
                    <h1>Contact</h1>
                    <div class="card" style={{backgroundColor:"#F9F6F0"}}>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-3 text-center">
                                    <a href="https://linkedin.com/in/paruchuri-sumanth-68718024b/" ><i class="bi bi-linkedin " style={{fontSize:"2rem"}} ></i></a>
                                    
                                </div>
                                <div class="col-3 text-center">
                                    <a href="https://github.com/pvnsumanth" class="text-success"><i class="bi bi-github" style={{fontSize:"2rem"}}></i></a>
                                </div>
                                <div class="col-3 text-center">
                                    <a href="mailto:pvnsmaruthikumar@gmail" class="text-danger"><i class="bi bi-envelope" style={{fontSize:"2rem"}}></i></a>
                                </div>
                                <div class="col-3  text-center">
                                        <Link to="/" class="text-decoration-none text-dark" style={{fontWeight:"bolder",fontFamily:"sans-serif"}}>
                                            <img src={photo} class="img2" style={{height:"3rem",borderRadius:"%50"}} alt="pic"></img>&ensp;
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;
