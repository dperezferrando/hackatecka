import React from "react";
import { connect } from "react-redux";
import StockList from "../screens/stockList";

class StockListContainer extends React.PureComponent {
  render() {
    return <StockList {...this.props } increment={(item) => this.props.actions.increment(item)} />
  }

}


function mapStateToProps({ count }, props) {
  console.log("GG", count)
  return { capsulitas: count };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      increment: dispatch.count.increment
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockListContainer);

