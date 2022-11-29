import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuppliesListItem from '../SuppliesListItem/SuppliesListItem';
import { Button, Box, Select, MenuItem, InputLabel, Switch, Stack, ButtonGroup, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';




function SuppliesList() {
    const dispatch = useDispatch();
    // gets all supplies from redux store
    // consider renaming. supplies vs items. is another reducer needed?
    const supplies = useSelector(store => store.supplies.supplies);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    console.log('This is my supplies list: ', supplies.supplies);

    /// useEFFECT WILL POPULATE THE SUPPLY LIST ON PAGE LOAD
    /// FETCH_SUPPLIES DISPATCH WILL GET STOPPED BY ROOTSAGA 
    useEffect(() => {
        console.log("Inside useEffect")
        dispatch({
            type: 'FETCH_SUPPLIES'
        })
    }, [])


    return (<>
        <Box className="main-container, grid-col_12">


            <TableContainer component={Paper}
                sx={{ minHeight: '45vh', boxShadow: '10px 10px 5px gray'}} >

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}><h2>Current Inventory</h2></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {supplies
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((supply, i) => {
                            return <TableRow><SuppliesListItem key={i} supply={supply} /></TableRow>
                        })}

                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={30}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />



            </TableContainer>

        </Box>
    </>)
}

export default SuppliesList;