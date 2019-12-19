import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo, delDoggo, delAllDoggo } from '../../actions/doggos';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos// this would be in HomePageComponent's props
  };
};

const mapDispatchToProps = ({
  likeDoggo,
  delDoggo,
  delAllDoggo// this would be in HomePageComponent's props
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     likeDoggo: (arg) => dispatch(likeDoggo(arg)),
//     delDoggo: (arg) => dispatch(delDoggo(arg)),
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

