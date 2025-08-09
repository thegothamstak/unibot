import PropTypes from 'prop-types';

export default function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 animate-slide-in">
      <Icon className="text-5xl text-blue-500 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-base text-gray-600 text-center">{description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};