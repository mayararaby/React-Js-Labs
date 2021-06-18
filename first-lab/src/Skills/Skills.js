import './Skills.css';
import HeadWords from '../HeadsWords/HeadsWords'
import ProgressBar from "../ProgressBar/ProgressBar";


const Skills = () => {
    return (
        <div className="container-fluid bg-skills">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-5 text-center pt-3">
                    <HeadWords name="Skills" id="name" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati sapiente recusandae unde, assumenda voluptatibus ducimus
                        <br /> tenetur aut similique voluptatum consectetur numquam distinctio perspiciatis,
                        <br /> neque tempora possimus odio fuga natus?
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 text-center pt-3">
                    <h3 className="skillsFocus ml-5 mt-5" >
                        My Focus
                    </h3>
                    <ul className="m-3">
                        <li className="m-3">
                            Ui & Ux Design
                        </li>
                        <li className="m-3">
                            Responsive Design
                        </li>
                        <li className="m-3">
                            Web Design
                        </li>
                        <li className="m-3">
                            Mobile App Design
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-5 pt-3 mb-5 pt-3 text-center">
                    <ProgressBar skill="HTML" width="40%" />
                    <ProgressBar skill="CSS" width="50%" />
                    <ProgressBar skill="JavaScript" width="60%" />
                    <ProgressBar skill="React" width="40%" />
                    <ProgressBar skill="PhotoShop" width="75%" />
                    <ProgressBar skill="Adobe XD" width="30%" />
                    <ProgressBar skill="Node Js" width="10%" />
                    <ProgressBar skill="WordPress" width="20%" />
                </div>
            </div>
        </div>
    )
};

export default Skills;

