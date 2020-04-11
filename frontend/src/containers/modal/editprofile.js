import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditProfile from '../../components/editprofile';
import Modal from '../../components/modal';
import {hideModal, editProfileReset, editProfile} from '../../actions';

class EditProfileModal extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.handleClose();
    }
  }

  render() {
    const {
      isAuthenticated,
      isEditing,
      error,
      avatar,
      name,
      license,
      qualification,
      specilization,
      profession,
      district,
      state,
      editProfile,
      handleClose,
      success,
    } = this.props;

    return !isAuthenticated ? null : (
      <Modal onClose={handleClose} dialogStyle={{minWidth: '500px'}}>
        <EditProfile
          avatar={avatar}
          name={name}
          license={license}
          handleEdit={editProfile}
          isLoading={isEditing}
          error={error}
          success={success}
          qualification={qualification}
          specilization={specilization}
          profession={profession}
          district={district}
          state={state}
        />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isEditing: state.auth.isEditing,
  error: state.auth.editError,
  avatar: state.auth.avatar,
  name: state.auth.name,
  success: state.auth.editSuccess,
});

const mapDispatchToProps = dispatch => ({
  editProfile: newProfile => {
    dispatch(editProfile(newProfile));
  },
  handleClose: () => {
    dispatch(hideModal());
    dispatch(editProfileReset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileModal);
