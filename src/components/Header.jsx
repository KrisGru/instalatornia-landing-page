import PropTypes from "prop-types";

function Header({ logo, text }) {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <h1>{text}</h1>
    </div>
  );
}

Header.propTypes = {
  logo: PropTypes.any,
  text: PropTypes.string,
};

export default Header;
