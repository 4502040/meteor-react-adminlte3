import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IndividualFile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.removeFile = this.removeFile.bind(this);
    this.renameFile = this.renameFile.bind(this);
    //console.log(this.props.fileUrl);

  }

  removeFile(){
    let conf = confirm('Вы действительно хотите удалить файл?') || false;
    if (conf == true) {
      Meteor.call('RemoveFile', this.props.fileType, this.props.fileId, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  renameFile(){

    let validName = /[^a-zA-Z0-9 \.:\+()\-_%!&]/gi;
    let prompt    = window.prompt('Переименовать файл?', this.props.fileName);

    // Replace any non valid characters, also do this on the server
    if (prompt) {
      prompt = prompt.replace(validName, '-');
      prompt.trim();
    }

    if (!_.isEmpty(prompt)) {
      Meteor.call('RenameFile', this.props.fileType, this.props.fileId, prompt, function (err, res) {
        if (err)
          console.log(err);
      })
    }
  }

  render() {
    return <div className="m-t-sm">
      <div className="row mt-2">        
        <div className="col-md-4">   
          <a href={this.props.origFileUrl} data-lightbox={this.props.fileName} data-title={this.props.fileName}><img src = {this.props.fileUrl} /></a>       
          
        </div>
        <div className="col-md-3">
          <div>
            <strong>{this.props.fileName}</strong>
          </div>
          <div className="mt-2">
            <button onClick={this.renameFile} className="btn btn-outline btn-primary btn-sm">
                Переименовать
              </button>
          </div>
          <div className="mt-2">
            <a href={this.props.fileUrl} className="btn btn-outline btn-primary btn-sm" target="_blank">Просмотр</a>
          </div>
          <div className="mt-2">
            <button onClick={this.removeFile} className="btn btn-outline btn-danger btn-sm">
            Удалить
          </button>
             </div>
          <div>
          Размер: {this.props.fileSize}
          </div>
        </div>
      </div>

    </div>
  }
}

// IndividualFile.props.propTypes = {
//   fileName: PropTypes.string.isRequired,
//   fileSize: PropTypes.number.isRequired,
//   fileUrl: PropTypes.string,
//   fileId: PropTypes.string.isRequired
// }

export default IndividualFile;