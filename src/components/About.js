import pass_photo from './pass_photo.jpg'
import './style.css'
import { Component } from 'react'
class About extends Component{
    constructor(props){
        super(props);
        this.state={isDisplayEduaction:false};
        this.state={isDisplaySkills:false}
    }
    render(){
        return(
            <div>
                <div class="container" >
                    <h1 class="mt-3">About</h1>
                    <div class="card mb-3" >
                        <div class="row g-0">
                            <div class="col-md-3 text-center">
                                <img src={pic.jpg} style={{maxHeight:"20rem"}} class="ml-1 my-1 img-fluid " alt="pass_phot"></img>
                            </div>
                            <div class="col-md-9">
                                <div class="card-body">
                                    <h3 class="card-title">Paruchuri V Naga Sumanth Maruthi Kumar</h3>
                                    <p >
                                        Hello,Myself Sumanth, currently I am purusing my B-Tech in Vellore institue of Technology,Chennai.
                                        I have a solid foundation in machine learning, not quite a beginner but not yet an expert. My proficiency lies
                                        in programming languages such as Python, C++, and Java, complemented by my expertise in web development.
                                        I have a keen aptitude for fast learning.
                                    </p>
                                    <button  style={{width:"10rem",backgroundColor:"white"}} onClick={()=>{this.setState({isDisplaySkills:false,isDisplayEduaction:!this.state.isDisplayEduaction})}}>Education details</button>
                                    <button  style={{width:"10rem",backgroundColor:"white",borderLeft:"none"}} onClick={()=>{this.setState({isDisplaySkills:!this.state.isDisplaySkills,isDisplayEduaction:false})}}>Skills</button>
                                    <div className={this.state.isDisplayEduaction ? 'dedu' : 'nedu'}>
                                    <table class="mt-4 table table-striped"  >
                                        <thead>
                                            <tr>
                                                <th>Education</th>
                                                <th>College</th>
                                                <th>Loaction</th>
                                                <th>Year</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>B-Tech</td>
                                                <td>Vellore Institue of Technology</td>
                                                <td>Chennai</td>
                                                <td>2021-present</td>
                                            </tr>
                                            <tr>
                                                <td>Intermediate</td>
                                                <td>Narayana Jr.College</td>
                                                <td>Vijayawada</td>
                                                <td>2019-2021</td>
                                            </tr>
                                            <tr>
                                                <td>Secondary School</td>
                                                <td>Bhashyam High School</td>
                                                <td>Guntur</td>
                                                <td>2018-2019</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    <div className={this.state.isDisplaySkills ? 'dedu' : 'nedu'}>
                                    <table class="mt-5 table table-striped"  >
                                        <tbody>
                                            <tr>
                                                <th>programming languages</th>
                                                <td>Python, Cpp, Java</td>
                                            </tr>
                                            <tr>
                                                <th>Web development</th>
                                                <td>HTML, CSS, Bootstrap, Java Script, React, Mongo</td>
                                            </tr>
                                            <tr>
                                                <th>Other Technologies</th>
                                                <td>Machine Learning, MySQL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default About;
