import { connect } from "react-redux"
import Home from "../components/Home";
import { add_to_cart, remove_to_cart } from "../services/action/action";

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(add_to_cart(data)),
    removeToCartHandler: data => dispatch(remove_to_cart(data))
});

const mapStateToProps = state => ({
    cartData: state.cart_item
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home;