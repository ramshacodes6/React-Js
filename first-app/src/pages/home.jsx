// function Home() {
//     return (
//         <>
//         <div>
//             <h1>Hi I am Ramsha</h1>
//             <p>Welcome to my website! I am learning React and web development.</p>
//         </div>

//         <section className="productSection">
//                 <h2>Our Products</h2>
//                 <h2 className="ProductMid">  </h2>         
//                      <div  className="productItems">
//                         <div>
//                         <img src=".\public\Images\1.png"></img>
//                         <h3>Shoes</h3>
//                         </div>
//                         <div>
//                         <img src=".\public\Images\2.png"></img>
//                         <h3>Jewellery</h3>
//                      </div>
//                      <div>
//                         <img src=".\public\Images\3.png"></img>
//                         <h3>Watch</h3>
//                      </div>

//                      </div>
                     
//         </section>

//         </>
//     );
// }

// export default Home;


function Home() {
    return (
        <>
            <div>
                <h1>Hi I am Ramsha</h1>
                <p>Welcome to my website! I am learning React and web development.</p>
            </div>

            <section className="productSection">
                <h2>Our Products</h2>
                
            
                <div className="ProductMid">
                
                    

                    <div className="productItems">
                        <img src="./Images/2.png" alt="Product" />
                        <h3>Women's Floral Dress</h3>
                        <p>₹4299</p>
                        <button className="cart-btn">Add To Cart</button>
                    </div>

                    <div className="productItems">
                        <img src="./Images/3.png" alt="Product" />
                        <h3>Classic Leather Watch</h3>
                        <p>₹2599</p>
                        <button className="cart-btn">Add To Cart</button>
                    </div>

            
                    <div className="productItems">
                        <img src="./Images/4.png" alt="Product" />
                        <h3>Leather Boots</h3>
                        <p>₹1799</p>
                        <button className="cart-btn">Add To Cart</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;


