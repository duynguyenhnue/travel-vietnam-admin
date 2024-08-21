import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { SnackbarActions } from '../../redux/snackbar';

export default function SimpleSnackbar() {
  const snackbar = useSelector((state: any) => state.snackbar.snackbar);
  const dispatch = useDispatch();
  

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(SnackbarActions.CloseSnackBar());
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={snackbar.content}
        action={action}
        sx={{
            ".MuiPaper-root": {
                backgroundColor: snackbar.state == "warn" ? "#9c9c29" : (snackbar.state == "error" ? "#ac0e0e" : "#0f7c1a")
            }
        }}
      />
    </div>
  );
}