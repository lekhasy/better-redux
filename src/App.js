import "./App.css";
import { connect } from "react-redux";
import FilterComponent from "./components/FilterComponent";
import MainListComponent from "./components/MainListComponent";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <flex-container
          style={{
            flexGrow: 1,
            width: "100%",
            backgroundColor: "purple",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: 24, paddingBottom: 0, fontSize: 48 }}>
            {" "}
            Menu
          </div>
          <flex-container style={{ flexGrow: 1 }}>
            <flex-container
              style={{ flexBasis: 300, margin: 48, backgroundColor: "#057a9c" }}
            >
              <FilterComponent />
            </flex-container>
            <flex-container
              style={{ flexGrow: 2, margin: 48, backgroundColor: "brown" }}
            >
              <MainListComponent />
            </flex-container>
          </flex-container>
        </flex-container>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({ isTeaOnly: state.sideBar.isTeaOnly });

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
