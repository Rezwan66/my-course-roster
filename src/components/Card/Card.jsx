import PropTypes from 'prop-types';

const Card = ({ card }) => {
  //   console.log(card);
  const { course_img, credit, details, name, price } = card;
  return (
    <div>
      <h2>{card.name}</h2>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;
