

export default function GameItem({
    name ,
    category ,
    price,
    tags,
    summary
}){


    return (  <div className="col-lg-3 col-md-6">
        <div className="item">
          <div className="thumb">
            <a href="product-details.html"><img src="assets/images/trending-03.jpg" alt="" /></a>
            <span className="price"><em>$64</em>$44</span>
          </div>
          <div className="down-content">
            <span className="category">Action</span>
            <h4>Assasin Creed</h4>
            <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>
      )
}