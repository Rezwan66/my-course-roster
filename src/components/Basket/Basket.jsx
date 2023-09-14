import PropTypes from 'prop-types';

const Basket = props => {
  return (
    <div className="bg-white rounded-md card-body space-y-4">
      <h3 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining{' '}
      </h3>
      <hr />
      <h2 className="text-xl font-bold">Course Name</h2>
      <ol></ol>
      <hr />
      <h4 className="text-base font-medium">Total Credit Hour : </h4>
    </div>
  );
};

Basket.propTypes = {};

export default Basket;
