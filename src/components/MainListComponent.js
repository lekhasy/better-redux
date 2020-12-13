import { connect } from "react-redux";
import { Products } from "../data/products";

function MainListComponent(props) {
  return (
    <div>
      <ul>
        {Products.filter((i) => (props.isTeaOnly ? i.isTea : true)).map((p) => (
          <li key={p.name} style={{ textAlign: "left" }}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ isTeaOnly: state.sideBar.isTeaOnly });

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListComponent);
