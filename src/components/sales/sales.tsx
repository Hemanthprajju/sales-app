import React, { useEffect, useState } from 'react';
import Topnav from '../topnav/topnav';
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { deleteSalePerson, getSalesList } from '../../apis/api';
import salesBanner from '../../assets/sales/Hemanth Kumar S (3).png'
import './sale.scss'
import { Add } from '@mui/icons-material';
import FormDialog from '../../components/create-sales/create-sale'; // update path if needed

const Sales: React.FC = () => {
    const [salesData, setSalesData] = useState<any[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getSalesList(10, 0); // Adjust the limit and skip as needed
                setSalesData(response.list); // Assuming the data is in response.data
                console.log('response.list', response.list)
            } catch (error) {
                console.error("Error fetching sales data", error);
            }
        };

        fetchData();
    }, []);

    const deleteSale = async (id: any) => {
        try {
            await deleteSalePerson(id);
            console.log('Sale deleted');

            // ✅ Remove deleted sale from state
            setSalesData(prevSales => prevSales.filter(sale => sale._id !== id));
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    const handleOpen = () => setDialogOpen(true);
    const handleClose = () => setDialogOpen(false);
    return (
        <>
            <Topnav />
            <FormDialog open={dialogOpen} onClose={handleClose}  />

            <div className='container-fluid p-0 banner'>
                <img className='saleImage' src={salesBanner} alt="" />
                <Button className='AddBtn' variant="outlined" color='success' startIcon={<Add />} onClick={handleOpen}>
                Add SE</Button>
            </div>
            <div className='container-fluid p-0'>
                < Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 360 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>First name</StyledTableCell>
                                    <StyledTableCell align="right">Last name</StyledTableCell>
                                    <StyledTableCell align="right">Phone number</StyledTableCell>
                                    <StyledTableCell align="right">Email</StyledTableCell>
                                    <StyledTableCell align="right">Actions</StyledTableCell>
                                    {/* <StyledTableCell align="right">Id</StyledTableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {salesData.map((sale) => (
                                    <StyledTableRow
                                        key={sale._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell component="th" scope="row">
                                            {sale.firstName}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{sale.lastName}</StyledTableCell>
                                        <StyledTableCell align="right">{sale.phoneNumber}</StyledTableCell>
                                        <StyledTableCell align="right">{sale.email}</StyledTableCell>
                                        <StyledTableCell align="right"><Button onClick={() => deleteSale(sale._id)} className='text-center' variant="outlined" color='error' startIcon={<DeleteIcon />}>
                                        </Button></StyledTableCell>
                                        {/* <StyledTableCell align="right">{sale._id}</StyledTableCell> */}
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

            </div>

        </>
    );
}

export default Sales;