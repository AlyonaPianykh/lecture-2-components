import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo, deleteDoggo, deleteAllDoggo } from '../../actions/doggos';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos // this would be in HomePageComponent's props
  };
};

const mapDispatchToProps = ({
  likeDoggo,// this would be in HomePageComponent's props
  deleteDoggo,
  deleteAllDoggo
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

