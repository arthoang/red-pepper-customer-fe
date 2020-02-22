import React from 'react';
import ReactDOM from 'react-dom';
import { useTable } from 'react-table';
import classnames from 'classnames';
import classes from './DataTable.module.css';

const Table = (props) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns: props.columns,
        data: props.data
    });

    let classNames = classnames(props.className.split(" ").map(name => {
        return classes[name];
    }));

    const onRowClick = (event) => {
        let rowSelected = ReactDOM.findDOMNode(event.target).parentNode.rowIndex;
        props.selectRow(props.data[rowSelected-1]);
    }

    //render UI
    return (
        <table {...getTableProps()} className={classNames}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => {
                            if (column.show === false) {
                                column.toggleHidden();
                            }
                            return (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            );
                        })}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(
                (row, i) => {
                    prepareRow(row);
                    //console.log(row.getRowProps());
                    return (
                    <tr {...row.getRowProps()} onClick={onRowClick}>
                        {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                    )}
                )}
            </tbody>

        </table>
    )
} 

export default Table;