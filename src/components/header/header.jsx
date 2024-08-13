export default function Header() {
    return (
    
  <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
             
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="Logo" style={{ width: '158px' }} />
                </a>
                
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="shop.html">Our Shop</a></li>
                  <li><a href="product-details.html">Product Details</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#">Sign In</a></li>
                </ul>
                <a href="#" className="menu-trigger" onClick={(e) => e.preventDefault()}>
                  <span>Menu</span>
                </a>
               
              </nav>
            </div>
          </div>
        </div>
      </header>
       <div className="main-banner">
       <div className="container">
         <div className="row">
           <div className="col-lg-6 align-self-center">
             <div className="caption header-text">
               <h6>Welcome to lugx</h6>
               <h2>BEST GAMING SITE EVER!</h2>
               <p>
                 LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. 
                 You can download and use this layout for commercial purposes. Please tell your friends 
                 about TemplateMo.
               </p>
               <div className="search-input">
                 <form id="search" action="#">
                   <input 
                     type="text" 
                     placeholder="Type Something" 
                     id="searchText" 
                     name="searchKeyword" 
                     
                   />
                   <button type="button">Search Now</button>
                 </form>
               </div>
             </div>
           </div>
           <div className="col-lg-4 offset-lg-2">
             <div className="right-image">
               <img src="assets/images/banner-image.jpg" alt="" />
               <span className="price">$22</span>
               <span className="offer">-40%</span>
             </div>
           </div>
         </div>
       </div>
     </div>
      
     </div>
    );
  }
  