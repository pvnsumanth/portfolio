import { Component } from "react";
import fertilizer_forcasting from './fertilizer_forcasting.png';
import spam_detection from './spam_detection.png';
import elephant_detection from './elephant_detection.jpg';
import age_calculator from './age_calculator.png';
import word_counter from './word_counter.png';
import calculator from './calculator.png';
class Projects extends Component{
    render(){
        return(
            <div>
                <div class="container">
                    <h1 class="mt-3">Projects</h1>
                    <h3 class="mt-5 mb-3">Machine Learning Projects</h3>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={fertilizer_forcasting}  class="img-fluid rounded-start" alt="Interfacepicture"></img>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h3 class="card-title">Fertilizer Forcasting</h3>
                                    <ul>
                                        <li>Developed a machine learning model to classify messages as spam or not using the Naive Bayes algorithm.</li>
                                        <li>Proficient in data preprocessing, including handling missing values, and successfully trained the Naive Bayes model on the preprocessed dataset.</li>
                                        <li> Proficient in data preprocessing, including handling missing values, and successfully trained the Naive Bayes model on the preprocessed dataset.</li>
                                        <li>Evaluated model performance and deployed the application for temporary practical use.</li>
                                    </ul>
                                    <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/fertilizer_forecasting">Git repository Link </a>
                                    &ensp; &ensp;
                                    <a class="text-decoration-none  text-primary" href="https://pvnsumanth-fertilizer-forecasting-app-fbo5cx.streamlit.app/">Website Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={spam_detection}  class="img-fluid rounded-start" alt="Interfacepicture"></img>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h3 class="card-title">SMS spam Detection</h3>
                                    <ul>
                                        <li>Developed a machine learning model to predict suitable 
                                            fertilizer based on agricultural parameters, including n, p, k,
                                            average temperature, and moisture levels.</li>
                                        <li>Proficient in data preprocessing, including handling missing values, outliers, and feature engineering, and successfully 
                                            trained the KNN model on the preprocessed dataset.</li>
                                        <li> Created an interactive user interface using Streamlit, allowing users to input
                                            agricultural parameters and obtain real-time fertilizer predictions.</li>
                                        <li>Evaluated model performance, deployed the system for practical use.</li>
                                    </ul>
                                    <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/SMS-spam-detection">Git repository Link </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={elephant_detection}  class="img-fluid rounded-start" alt="Interfacepicture"></img>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h3 class="card-title">Image Classification Model - Elephant Detection:</h3>
                                    <ul>
                                        <li>Developed a deep learning model for image classification that accurately identifies the presence of elephants in images.</li>
                                        <li>Utilized Convolutional Neural Networks (CNN) for the task, employing transfer learning techniques with Inception V3 and ResNet models.</li>
                                        <li> Achieved exceptional accuracy levels, with test data accuracy rates of 85%, 95%, and 97% using the respective models.</li>
                                        <li>Designed and implemented a user-friendly local interface, allowing users to run the image classification model on their own machines, thereby enhancing accessibility and usability.</li>
                                    </ul>
                                    <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/Image-Classification-Model-Elephant-Detection">Git repository Link </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 class="mt-5 mb-3">Web development Projects</h3>
                    <div class="row gy-4">
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center" ><img style={{height:"10rem"}}  class="img-fluid" src={age_calculator} alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Age calculator</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/age_calculator">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://age-calculator-pied.vercel.app/">Website Link</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center" ><img style={{height:"10rem"}} class="img-fluid" src={word_counter} alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Word Counter</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/word_counter">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://word-counter-theta.vercel.app/">Website Link</a>
                                    </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="card mb-10">
                                    <div class="card-image-top text-center"><img style={{height:"10rem"}} class="img-fluid" src={calculator}  alt="pic"></img></div>
                                    <div class="card-body">
                                        <h3 class="card-title">Calculator</h3>
                                        <a class="text-decoration-none  text-primary" href="https://github.com/pvnsumanth/calculator">Git repository Link </a>
                                        &ensp; &ensp;
                                        <a class="text-decoration-none  text-primary" href="https://calculator1-plum.vercel.app/">Website Link</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;