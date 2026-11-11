


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
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    

                    {/* <div className="productItems">
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
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Home;

function ProductCard(){
    return(
    <div className="productItems">
                        <img src="./Images/1.png" alt="Product" />
                        <h3>Casual Sneakers</h3>
                        <p>₹1999</p>
                        <button className="cart-btn">Add To Cart</button>
    </div>
    )
}

