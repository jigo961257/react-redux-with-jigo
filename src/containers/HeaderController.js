import { connect } from "react-redux"
import Header from "../components/Header";

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
    cartData: state.cart_item
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Home;