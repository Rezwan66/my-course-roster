import PropTypes from 'prop-types';

const Basket = ({ selectedCourses, remaining, totalHour }) => {
  return (
    <div className="bg-white rounded-md card-body space-y-4">
      <h3 className="text-lg font-bold text-[#2F80ED]">
        Credit Hour Remaining {remaining} hr
      </h3>
      <hr />
      <h2 className="text-xl font-bold">Course Name</h2>
      <ol className="list-decimal px-5 text-[#1C1B1B99] space-y-2">
        {selectedCourses.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ol>
      <hr />
      <h4 className="text-base font-medium text-[#1C1B1BCC]">
        Total Credit Hour : {totalHour}
      </h4>
    </div>
  );
};

Basket.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  remaining: PropTypes.number,
  totalHour: PropTypes.number,
};

export default Basket;
