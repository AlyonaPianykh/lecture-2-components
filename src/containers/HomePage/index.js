import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo,removeDoggo, removeAll, setLoading } from '../../actions/doggos.action';
import { getFilters } from '../../actions/filters.action';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos }, filters: {loading} } = state;

  console.log({loading});

  return {
    likedDoggos, // this would be in HomePageComponent's props
    loading
  };
};


const mapDispatchToProps =  {
    getFilters,
    likeDoggo,
    removeDoggo,
    removeAll,
    setLoading,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
