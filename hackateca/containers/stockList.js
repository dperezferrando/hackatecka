import React from "react";
import { connect } from "react-redux";
import StockList from "../screens/stockList";

class StockListContainer extends React.PureComponent {
  render() {
    return <StockList {...this.props } increment={(item) => this.props.actions.increment(item)} />
  }

}


function mapStateToProps({ capsulitas }, props) {
  return { capsulitas: capsulitas };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      increment: dispatch.capsulitas.increment
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockListContainer);

