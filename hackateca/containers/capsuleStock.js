import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CapsuleStock from "../components/capsuleStock";
import { actions } from "../actions/example";

class CapsuleStockContainer extends React.PureComponent {
  render() {
    return <CapsuleStock {...this.props } test={() => this.test()} />
  }

  test() {
    this.props.actions.test();
  }
}


function mapStateToProps({ example: { message } }, props) {
  return { message };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      test: dispatch.example.test()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CapsuleStockContainer);

