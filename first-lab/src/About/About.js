import './About.css';
import HeadWords from '../HeadsWords/HeadsWords'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-5 text-center mb-5 pt-3">
                    <HeadWords name="About" id="name"/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-5 pt-3 mb-5 pt-3">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati sapiente recusandae unde, assumenda voluptatibus ducimus tenetur aut similique voluptatum consectetur numquam distinctio perspiciatis, neque tempora possimus odio fuga natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati sapiente recusandae unde, assumenda voluptatibus ducimus tenetur aut similique voluptatum consectetur numquam distinctio perspiciatis, neque tempora possimus odio fuga natus
                    </p>
                    <button type="button" className="btn btn-warning DownloadBtn mt-4 text-center btnHeader">Download Resume</button>
                </div>
            </div>
        </div>
    )
};

export default About;

