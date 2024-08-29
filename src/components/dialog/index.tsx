import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { DialogActions } from '../../redux/dialog';
import CreatePermissions from '../admin/dialog/permissions/create-permissions';
import UpdatePermissions from '../admin/dialog/permissions/update-permissions';
import UpdateUser from '../admin/dialog/users/update-users';
import CreateUser from '../admin/dialog/users/create-users';
import CreateService from '../admin/dialog/services/create-services';
import UpdateService from '../admin/dialog/services/update-services';

export default function AlertDialog() {
    const dialog = useSelector((state: any) => state.dialog.admin);
    const open = dialog.show;
    const name = dialog.name;
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(DialogActions.setAdmin({
            show: false,
            name: ""
        }))
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    ".MuiPaper-root": {
                        background: '#1B1C31',
                        padding: '30px 50px',
                        color: 'white',
                        borderRadius: '20px',
                        width: '-webkit-fill-available',
                        overflowX: 'hidden',
                        maxHeight: '85vh',
                        overflowY: 'auto'
                    }
                }}
            >
                {name === "create-permissions" && <CreatePermissions />}
                {name === "update-permissions" && <UpdatePermissions />}
                {name === "create-users" && <CreateUser />}
                {name === "update-users" && <UpdateUser />}
                {name === "create-services" && <CreateService />}
                {name === "update-services" && <UpdateService />}
            </Dialog>
        </React.Fragment>
    );
}