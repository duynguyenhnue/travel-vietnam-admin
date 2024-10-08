import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem, Stack } from '@mui/material';

import { type Tour } from '@/types/tour';
import { tourApi } from '@/lib/tour/tour';

import { TourDelete } from '../dashboard/tour/tour-delete';
import { UpdateTour } from '../dashboard/tour/tour-update';

interface ActionCellProps {
  data: Tour;
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
    await tourApi.deleteTour(data?._id || '');
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
      {action === 'delete' && (
        <TourDelete open={openDialog} onClose={handleCloseDiaLog} onDelete={handleDelete} title={data.title} />
      )}
      {action === 'update' && <UpdateTour open={openDialog} onClose={handleCloseDiaLog} tourId={data._id || ''} />}
    </Stack>
  );
}
