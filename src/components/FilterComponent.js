import { connect } from "react-redux";

function FilterComponent(props) {
  return (
    <div style={{ padding: 24 }}>
      <div>
        <input
          type="checkbox"
          checked={props.isTeaOnly}
          onChange={props.dispatchIsTeaOnlyChanged}
        />
        <label>Trà</label>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ isTeaOnly: state.sideBar.isTeaOnly });

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchIsTeaOnlyChanged: () =>
      dispatch({ type: "IS_TEA_ONLY_FLAG_CHANGED" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
