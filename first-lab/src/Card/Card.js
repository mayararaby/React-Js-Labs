import './Card.css';

const Card = (props) => {
    return (
        <div class="card" style={{backgroundColor:props.color,borderColor:props.color,color:props.textColor}}>
            <div class="card-body text-center align-middle">{props.name}</div>
        </div>
    );
};

export default Card;
