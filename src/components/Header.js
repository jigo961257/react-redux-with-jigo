import React from 'react'

const Header = (props) => {
    console.warn("props pass on heaeder is : ", );
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
                    }}>{props.cartData.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header