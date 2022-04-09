import React from "react";
import Header from "./Header";
// import '../App';
const Home = (props) => {
    console.warn("Home props: ", props);
    return (
        <div>
            {/* <Header sendProps={props.cartData} /> */}
            <h1>Home Conponet</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAVZooi?w=624&h=350&q=60&m=6&f=jpg&u=t"
                        style={{
                            width: '150px',
                        }}
                    />
                </div>
                <div className="text-wrapper item">
                    <span>Ruby Car</span><br />
                    <span>USD $ : 34.50</span>
                </div>
                <div className="btn-wrapper item">
                    <button className="cart-btn" onClick={() => {
                        props.addToCartHandler({
                            price: 1000.00,
                            name: "Nova car Tz340"
                        })
                    }}>Add to Cart</button>

                    <button className="cart-btn" style={{ marginLeft: '1rem', backgroundColor: "#0e0f82" }} onClick={() => {
                        props.removeToCartHandler()
                    }}>Remove To Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Home;