import React from "react";
// import '../App';
const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                right: '30px',
            }}>
                <img src="https://icon2.cleanpng.com/20171220/ajq/shopping-cart-png-5a3a4566719ed0.1530820715137682944654.jpg"
                    style={{
                        width: '60px',
                        height: '60px',
                        // backgroundColor: "white"
                    }}
                />
                <div style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "red",
                    borderRadius: "12px",
                    position: "absolute",
                    top: '3px',
                    right: '2px',
                    // boxShadow:"#fff 0px 1px 2px",
                }}>
                    <span style={{
                        color: "white",
                    }}>+</span>
                </div>
            </div>
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
                    <span>Ruby Car</span>
                    <span>USD $ : 34.50</span>
                </div>
                <div className="btn-wrapper item">
                    <button className="cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;