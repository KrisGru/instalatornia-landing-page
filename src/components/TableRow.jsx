import PropTypes from "prop-types";

const TableRow = ({ name, price }) => {
  return (
	<>
	   <li className="service-item">
			<p className="serviceName">{name}</p>
			<p className="servicePrice">{price}</p>
		</li>
	</>
  );
};

TableRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
};

export default TableRow;
