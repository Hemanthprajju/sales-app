import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@mui/material';
import { createSalePerson } from '../../apis/api';

interface FormDialogProps {
    open: boolean;
    onClose: () => void;
    onCreated: () => void;   // 👈 add this
}

const FormDialog: React.FC<FormDialogProps> = ({ open, onClose, onCreated }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const createSales = async (data: any) => {
        try {
            await createSalePerson(data);
            reset();
            onClose();
            onCreated();

        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };



    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent sx={{ paddingBottom: 0 }}>

                <form onSubmit={handleSubmit(createSales)}>
                    <DialogContent>
                        <TextField
                            label="First Name"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            {...register("firstName", { required: "First Name is required" })}
                            error={!!errors.firstName}

                        />
                        <TextField
                            label="Last Name"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            {...register("lastName", { required: "Last Name is required" })}
                            error={!!errors.lastName}

                        />
                        <TextField
                            label="Phone Number"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            type="tel"
                            {...register("phoneNumber", {
                                required: "Phone Number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Enter a valid 10-digit phone number",
                                },
                            })}
                            error={!!errors.phoneNumber}

                        />
                        <TextField
                            label="Email Address"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Enter a valid email",
                                },
                            })}
                            error={!!errors.email}

                        />
                        <TextField
                            label="Years of Experience"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            type="number"
                            {...register("noOfExperience", {
                                required: "Experience is required",
                                min: { value: 0, message: "Minimum is 0" },
                            })}
                            error={!!errors.noOfExperience}

                        />
                        <TextField
                            label="Branch Name"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            {...register("branchName", { required: "Branch Name is required" })}
                            error={!!errors.branchName}

                        />
                        <TextField
                            label="Branch Address"
                            fullWidth
                            margin="dense"
                            variant="standard"
                            {...register("branchAddress", {
                                required: "Branch Address is required",
                            })}
                            error={!!errors.branchAddress}

                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default FormDialog;
