import { Component } from "react";
import dataxact_event from './dataxact_event.png';
import math_auction from './math_auction.png';
import problem_solving_basic from './problem_solving_basic.png';
import problem_solving_intermediate from './problem_solving_intermediate.png';
import python_basic from './python_basic.png';
class Certificates extends Component{
    render(){
        return(
            <div>
                <div class="container">
                    <h1 class="mt-3 mb-3">Certificates</h1>
                    <div class="row gy-3">
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src={dataxact_event} alt="pic" class="img-top img-fluid"></img>
                                <div class="card-body">
                                    <h3 class="card-title">DataXact event Runners</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src={math_auction} alt="pic" class="img-top img-fluid"></img>
                                <div class="card-body">
                                    <h3 class="card-title mt-1">Math Auction Winners</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 gy-3">
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src={problem_solving_basic} alt="pic" class="img-top img-fluid"></img>
                                <div class="card-body">
                                    <h3 class="card-title">Problem Solving Basic</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src={problem_solving_intermediate} alt="pic" class="img-top img-fluid"></img>
                                <div class="card-body">
                                    <h3 class="card-title">Problem Solving Basic</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card">
                                <img src={python_basic} alt="pic" class="img-top img-fluid"></img>
                                <div class="card-body">
                                    <h3 class="card-title">Problem Solving Basic</h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Certificates;