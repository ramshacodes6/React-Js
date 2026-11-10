function Home() {
    return (
        <>
        <div>
            <h1>Hi I am Ramsha</h1>
            <p>Welcome to my website! I am learning React and web development.</p>
        </div>

        <section className="productSection">
                <h2>Our Products</h2>
                <h2 className="ProductMid">  </h2>         
                     <div  className="productItems">
                        <img src=".\public\Images\1.png"></img><h2>Shoes</h2>
                        <img src=".\public\Images\2.png"></img><h2>Jewellery</h2>
                     </div>

        </section>

        </>
    );
}

export default Home;