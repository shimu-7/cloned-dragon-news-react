import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const {title, image_url, details, _id} = news
    return (
       
            <div className="card shadow-lg bg-base-100 mb-16 border">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {
                        details.length >200 ? <p>{details.slice(0,200)}<Link className="text-blue-400" to={`/details/${_id}`}> Read more...</Link></p> : <p>{details}</p>
                    }
                </div>
                
            </div>
        
    );
};

export default NewsCard;