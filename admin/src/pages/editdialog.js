
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react';
import { Mycontext1 } from './categorylist';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Dialogedit = () => {
    const context = useContext(Mycontext1);
    return (
        <>
            <Dialog open={context.open} >
                { context.loadopen===true && <div>
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>}
                <DialogTitle><b>EDIT CATEGORY</b></DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        To edit the category, please enter your details  here.
                    </DialogContentText>
                    <form onSubmit={context.Editfinal}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Category Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={context.formfields.name}
                            onChange={context.changeValue}

                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="images"
                            name="images"
                            label="Image Url"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={context.formfields.images}
                            onChange={context.addimgurl}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="color"
                            name="color"
                            label="Color"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={context.formfields.color}
                            onChange={context.changeValue}
                        />
                        <DialogActions>
                            <Button onClick={context.handleClose} variant='outlined'>Cancel</Button>
                            <Button type="submit" >Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Dialogedit;