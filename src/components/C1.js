import {Component} from 'react';
import logo_png from './logo_png.png';
import { Link } from 'react-router-dom';
class C1 extends Component{
    render(){
        return(
            <div class="container">
                <nav class="navbar bg-gradient-light mt-3" style={{backgroundColor:"#F9F6F0"}}>
                    <Link to="/" class="navbar-brand"><img src={logo_png} alt='pic' style={{width:"300px"}}></img></Link>
                    <div class="nav" >
                        <Link to="/" class="nav-link" style={{color:"#710117",fontWeight:"bolder",fontFamily:'sans-serif'}}>Home</Link>
                        <Link to="/about" class="nav-link" style={{color:"#710117",fontWeight:"bolder",fontFamily:'sans-serif'}}>About</Link>
                        <Link to="/projects" class="nav-link" style={{color:"#710117",fontWeight:"bolder",fontFamily:'sans-serif'}}>Projects</Link>
                        <Link to="/certificates" class="nav-link" style={{color:"#710117",fontWeight:"bolder",fontFamily:'sans-serif'}}>Certificates</Link>
                        <Link to="/contact" class="nav-link"  style={{color:"#710117",fontWeight:"bolder",fontFamily:'sans-serif'}}>Contact</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default C1;