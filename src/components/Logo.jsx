import logo from "assets/logo.png";
import PropTypes from "prop-types";

const Logo = ({ width }) => (
  <a style={{ width: width }}>
    <img src={logo} alt="Logo" width="100%" />
  </a>
);

Logo.propTypes = {
  width: PropTypes.string,
};
export default Logo;
