import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo, removeDoggo } from '../../actions/doggos';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos // this would be in HomePageComponent's props
  };
};

const mapDispatchToProps = ({
  likeDoggo,
  removeDoggo  // this would be in HomePageComponent's props
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

