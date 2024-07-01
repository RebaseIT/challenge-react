import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useState } from 'react';

type TableProps = {
    rows: Array<any>
    columns: Array<any>
}
export default function SimpleDataTable(tableProps: TableProps) {
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const modifyPageValue = (test, val) => {
        setPage(val)
    }
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            {tableProps.columns.map(column => {
                return (<TableCell key={column.headerName}>{column.headerName}</TableCell>)
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableProps.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {tableProps.columns.map(column => column.slot ? column.slot(row) : (<TableCell {...column.cellProps} key={`${row.name}-${row[column.field]}`}>{row[column.field]}</TableCell>))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={tableProps.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, val) => setPage(val)}
        onRowsPerPageChange={(e) => setRowsPerPage(e.target.value)}
        />
    </>
  )
}