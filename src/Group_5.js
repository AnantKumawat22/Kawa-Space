import './Group_5.css';

function Group_5({ bigcard }) {
    return (
        bigcard &&
        <div className="Group_5">
            <div className="Imagediv">
                <img src={bigcard.picture.large} className="Image"></img>
            </div>
            <div className="Group_3">
                <span className="Main_name">{`${bigcard.name.title} ${bigcard.name.first} ${bigcard.name.last}`}</span>
                <span className="Main_address">
                    {bigcard.location.street.number}, {bigcard.location.street.name}, {bigcard.location.city}, {bigcard.location.state},{bigcard.location.country}, {bigcard.location.postcode}<br />
                    {bigcard.location.timezone.offset} - {bigcard.location.timezone.description}<br />
                    {bigcard.gender}
                </span>
            </div>
        </div>
    );
}

export default Group_5;