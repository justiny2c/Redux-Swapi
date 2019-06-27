import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getChars } from "../actions";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.getChars()
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return "LOADING"
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error
})

export default connect (
mapStateToProps, { getChars }) (CharacterListView);
