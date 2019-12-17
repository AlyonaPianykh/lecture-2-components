import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo, deleteDoggo, deleteAllDoggos, undoDoggos } from '../../actions/doggos';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos } } = state;

  return {
    likedDoggos, // this would be in HomePageComponent's props
    deleteDoggo,
    deleteAllDoggos,
    undoDoggos
  };
};

const mapDispatchToProps = ({
  likeDoggo, // this would be in HomePageComponent's props
  deleteDoggo,
  deleteAllDoggos,
  undoDoggos
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

