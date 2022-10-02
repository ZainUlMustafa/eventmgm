import IMAGE_LAND from '../../assets/image_land.png'

function LandingEventCard() {
    return (
        <div className="container-fluid" style={{ backgroundColor: 'transparent' }}>
            <div className="d-flex align-items-center flex-column">
                <img style={{maxWidth:460}} className="card-img-top" src={IMAGE_LAND} alt="Card image cap" />
            </div>
        </div>
    );
}

export default LandingEventCard;