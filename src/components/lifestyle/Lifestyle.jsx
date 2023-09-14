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
                                <p>Foodie who loves exploring new resturants in town, fav food is Sushi. <br/>
                                <br/>Have been playing badminton for more than 10 years. <br/>
                                <br/>Love travel and taking photos. <br/>
                                <br/>Plant lover who owns many plants. <br/>
                                <br/>Recently practicing Pilate to improve self-care.<br/> </p>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/sushi.png" alt="" />
                            <img src="assets/BadmintonIcon.png" alt="" />
                            <img src="assets/CameraIcon.png" alt="" />
                            <img src="assets/Yoga.png" alt="" />
                            <img src="assets/Plants.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}