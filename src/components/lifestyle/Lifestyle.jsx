import './lifestyle.scss';

export default function Lifestyle(){
    return(
        <div className="lifestyle" id="lifestyle">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                
                                <h2>A bit more about myself...</h2>
                                <p>Foodie who loves exploring new resturants in town, fav food is Sushi.<br/>
                                <br/>Have been playing badminton for seven years.<br/>
                                <br/>Love to travel and take photos. Recently started filming vlogs.<br/>
                                <br/> Plant lover who owns many succulents.</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/SushiIcon.png" alt="" />
                            <img src="assets/BadmintonIcon.png" alt="" />
                            <img src="assets/CameraIcon.png" alt="" />
                            <img src="assets/CactusIcon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}