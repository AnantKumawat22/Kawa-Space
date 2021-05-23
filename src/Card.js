import './Card.css';

function Card({ email, name, gender, className }) {
    return (
        <div className={className}>
            <span className="Insturl">{email}</span>
            <div className="Small_card_frame">
                <span className="Insname">{`${name.title} ${name.first} ${name.last}`}</span>
                <div className="Frame_1">
                    <span className="Nl">NL</span>
                    <span className="Separator">·</span>
                    <span className="Gender">{gender}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;