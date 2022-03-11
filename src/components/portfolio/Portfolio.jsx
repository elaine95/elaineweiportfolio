import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { useEffect, useState } from 'react';
import {UIUXPortfolio, dataPortfolio, mobilePortfolio, graphicsPortfolio} from '../../data';

export default function Portfolio(){
    const [selected, setSelected] = useState("featured");
    const [data, setData]= useState([]);

    const list = [
        {
            id: "mobile",
            title: "Mobile Web App"
        },
        {
            id: "UIUX",
            title: "UI/UX Design"
        },
        {
            id: "dataScience",
            title: "Data Science"
        },
        {
            id: "graphic",
            title: "Computer Graphic"
        }      
    ];
    useEffect(()=>{
        switch(selected) {
            case "UIUX":
                setData(UIUXPortfolio);
                break;
            case "dataScience":
                setData(dataPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "graphic":
                setData(graphicsPortfolio);
                break;
            default:
                setData(mobilePortfolio);

        }
            
    }, [selected]);

    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}/>
                ))}               
            </ul>
            <div className="container">
                {data.map(d => (

                    <div className="item">
                        <a href = {d.link} target="_blank" rel="noopener noreferrer">
                            <img src={d.img} alt=""/>
                        </a>
                        <h3>{d.title}</h3>
                    </div> 

                ))}              
            </div>
        </div>
    )
}