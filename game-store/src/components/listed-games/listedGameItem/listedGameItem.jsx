import { Link } from 'react-router-dom';

export default function GameItem({
    _id,         
    name,
    category,
    price,
    tags,
    summary
}) {

    return (
        <div className="col-lg-3 col-md-6">
            <div className="item">
                <div className="thumb">
                    <Link to={`/game-details/${_id}`}><img src={tags} alt={name} /></Link>
                    <span className="price"><em>${price}</em></span> 
                </div>
                <div className="down-content">
                    <span className="category">{category}</span>
                    <h4>{name}</h4>
                    <Link to={`/game-details/${_id}`}><i className="fa fa-shopping-bag"></i></Link> {/* Corrected the Link */}
                </div>
            </div>
        </div>
    );
}
