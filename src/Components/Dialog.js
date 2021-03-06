import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AlertDialog extends React.Component {


  render(){
  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={this.props.modalState[0]}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">¿Estás seguro de haber trabajado {this.props.modalState[1]} horas?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Asignando tus horas correctamente nos ayudarás a brindate una experiencia mejor.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.closeModal} color="primary">
            No
          </Button>
          <Button onClick={this.props.closeModal} color="primary" autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}