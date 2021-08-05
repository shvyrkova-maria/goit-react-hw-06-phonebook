import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import { connect } from 'react-redux';
import * as actions from 'redux/contacts/contacts-actions';

function Filter({ currentFilter, onChange }) {
  return (
    <DebounceInput
      id={`id-${nanoid(3)}`}
      type="text"
      name="name"
      value={currentFilter}
      debounceTimeout={700}
      onChange={onChange}
      placeholder="Search"
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentFilter: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.getFilterValue(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
