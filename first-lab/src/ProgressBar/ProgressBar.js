import './ProgressBar.css';

const ProgressBar = (props) => {
    return (
        <div className="progress m-3 HeightP" >
            <div className="progress-bar bg-light ProgressHeight" >
                {props.skill}
            </div>
            <div className="progress-bar bg-black HeightP" style={{ width: props.width}}>
            </div>
        </div>
    );
};

export default ProgressBar;
