import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';

import type { Roles } from '@/types/roles';
import { type Tour } from '@/types/tour';
import { rolesApi } from '@/lib/roles/roles';
import { tourApi } from '@/lib/tour/tour';

import { UpdateRoles } from '../dashboard/roles/roles-update';
import { ViewRoles } from '../dashboard/roles/roles-view';
import { UpdateTour } from '../dashboard/tour/tour-update';
import { TourView } from '../dashboard/tour/tour-view';
import { CommonDelete } from './common-delete';
import { Hotel } from '@/types/hotel';

interface ActionCellProps {
  data: Tour | Roles | Hotel;
}

export function ActionCell(props: ActionCellProps): React.ReactElement {
  const { data } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [action, setAction] = useState<string>('');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleCloseDiaLog = (): void => {
    setOpenDialog(false);
  };
  const handleOpenDiaLog = (): void => {
    setOpenDialog(true);
  };

  const handleView = (): void => {
    setAction('view');
    handleOpenDiaLog();
    handleClose();
  };

  const handleUpdate = (): void => {
    setAction('update');
    handleOpenDiaLog();
    handleClose();
  };

  const handleOpenDelete = (): void => {
    setAction('delete');
    handleOpenDiaLog();
    handleClose();
  };

  const handleDelete = async (): Promise<void> => {
    if ('hotelId' in data) {
      await tourApi.deleteTour(data?._id || '');
    } else if ('name' in data) {
      await rolesApi.deleteRole('id' in data ? data?.id : '');
    }
    handleCloseDiaLog();
  };
  return (
    <Stack>
      <IconButton aria-controls={open ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleView}>View</MenuItem>
        <MenuItem onClick={handleUpdate}>Update</MenuItem>
        <MenuItem onClick={handleOpenDelete}>Delete</MenuItem>
      </Menu>
      {data && 'hotelId' in data ? (
        <>
          {action === 'delete' && (
            <CommonDelete
              open={openDialog}
              onClose={handleCloseDiaLog}
              onDelete={handleDelete}
              title={('title' in data && data?.title) || ''}
            />
          )}
          {action === 'update' && <UpdateTour open={openDialog} onClose={handleCloseDiaLog} tourId={data._id || ''} />}

          {action === 'view' && <TourView open={openDialog} onClose={handleCloseDiaLog} tourId={data._id || ''} />}
        </>
      ) : null}

      {data && 'name' in data ? (
        <>
          {action === 'delete' && (
            <CommonDelete
              open={openDialog}
              onClose={handleCloseDiaLog}
              onDelete={handleDelete}
              title={('name' in data && data?.name) || ''}
            />
          )}
          {action === 'update' && (
            <UpdateRoles open={openDialog} onClose={handleCloseDiaLog} roleId={'id' in data ? data?.id : ''} />
          )}

          {action === 'view' && (
            <ViewRoles open={openDialog} onClose={handleCloseDiaLog} roleId={'id' in data ? data?.id : ''} />
          )}
        </>
      ) : null}
    </Stack>
  );
}
