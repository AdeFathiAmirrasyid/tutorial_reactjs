import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addDataToAPI, getDataFromAPI, updateDataFromAPI, DeleteDataAPI } from "../../../config/redux/action";
import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      date: "",
      textButton: "SIMPAN",
      noteId: "",
    };
  }

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    this.props.getNotes(userData.uid);
  }

  handleSaveNotes = () => {
    const { title, content, textButton, noteId } = this.state;
    const { saveNotes, updateNotes } = this.props;
    const userData = JSON.parse(localStorage.getItem("userData"));

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid,
    };

    if (textButton === "SIMPAN") {
      saveNotes(data);
    } else {
      data.noteId = noteId;
      updateNotes(data);
    }
    console.log(data);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  updateNotes = (note) => {
    console.log(note);
    this.setState({
      title: note.data.title,
      content: note.data.content,
      textButton: "UPDATE",
      noteId: note.id,
    });
  };

  handleCancel = () => {
    this.setState({
      title: "",
      content: "",
      textButton: "SIMPAN",
    });
  };

  deleteNotes = (e, note) => {
    e.stopPropagation();
    const { deleteNote } = this.props;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const data = {
      userId: userData,
      noteId: note.id,
    };
    deleteNote(data);
  };

  render() {
    console.log("notes", this.props.notes);
    return (
      <div className="container-form">
        <div className="input-form">
          <input type="text" placeholder="title" onChange={(e) => this.onInputChange(e, "title")} className="input-title" value={this.state.title} />
          <textarea type="text" placeholder="content" onChange={(e) => this.onInputChange(e, "content")} className="input-content" value={this.state.content}></textarea>
          <div className="action-wrapper">
            {this.state.textButton === "UPDATE" ? (
              <button className="btn-save cancel" onClick={this.handleCancel}>
                Cancel
              </button>
            ) : (
              <div></div>
            )}
            <button className="btn-save" onClick={this.handleSaveNotes}>
              {this.state.textButton}
            </button>
          </div>
        </div>
        <hr />
        {this.props.notes.length > 0 ? (
          <Fragment>
            {this.props.notes.map((note) => {
              return (
                <div className="card-content" key={note.id} onClick={() => this.updateNotes(note)}>
                  <p className="title">{note.data.title}</p>
                  <p className="date">{note.data.date}</p>
                  <p className="content">{note.data.content}</p>
                  <div className="btn-delete" onClick={(e) => this.deleteNotes(e, note)}>
                    x
                  </div>
                </div>
              );
            })}
          </Fragment>
        ) : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  useData: state.user,
  notes: state.notes,
});

const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToAPI(data)),
  getNotes: (data) => dispatch(getDataFromAPI(data)),
  updateNotes: (data) => dispatch(updateDataFromAPI(data)),
  deleteNote: (data) => dispatch(DeleteDataAPI(data)),
});
export default connect(reduxState, reduxDispatch)(Dashboard);
