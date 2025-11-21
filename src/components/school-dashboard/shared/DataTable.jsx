import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import './DataTable.css';

const DataTable = ({
    columns = [],
    data = [],
    onRowClick,
    onQuickAction,
    selectable = false,
    onSelectionChange,
    pageSize = 10,
    className = ""
}) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [actionMenuOpen, setActionMenuOpen] = useState(null);

    // Sorting logic
    const sortedData = React.useMemo(() => {
        if (!sortConfig.key) return data;

        return [...data].sort((a, b) => {
            const aVal = a[sortConfig.key];
            const bVal = b[sortConfig.key];

            if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);

    // Pagination
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const paginatedData = sortedData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleSort = (key) => {
        setSortConfig(current => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedRows(new Set(paginatedData.map(row => row.id)));
        } else {
            setSelectedRows(new Set());
        }
        if (onSelectionChange) {
            onSelectionChange(checked ? paginatedData.map(row => row.id) : []);
        }
    };

    const handleSelectRow = (id, checked) => {
        const newSelected = new Set(selectedRows);
        if (checked) {
            newSelected.add(id);
        } else {
            newSelected.delete(id);
        }
        setSelectedRows(newSelected);
        if (onSelectionChange) {
            onSelectionChange(Array.from(newSelected));
        }
    };

    const renderCell = (row, column) => {
        if (column.render) {
            return column.render(row);
        }
        return row[column.key];
    };

    return (
        <div className={`data-table-container ${className}`}>
            <div className="table-wrapper">
                <table className="data-table">
                    <thead>
                        <tr>
                            {selectable && (
                                <th className="checkbox-cell">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                        className="table-checkbox"
                                    />
                                </th>
                            )}
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={column.sortable ? 'sortable' : ''}
                                    onClick={() => column.sortable && handleSort(column.key)}
                                >
                                    <div className="th-content">
                                        <span>{column.label}</span>
                                        {column.sortable && (
                                            <span className="sort-icon">
                                                {sortConfig.key === column.key ? (
                                                    sortConfig.direction === 'asc' ?
                                                        <ChevronUp size={16} /> :
                                                        <ChevronDown size={16} />
                                                ) : (
                                                    <ChevronDown size={16} className="inactive" />
                                                )}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                            {onQuickAction && <th className="actions-cell">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, index) => (
                            <tr
                                key={row.id || index}
                                className={`${selectedRows.has(row.id) ? 'selected' : ''} ${onRowClick ? 'clickable' : ''}`}
                                onClick={() => onRowClick && onRowClick(row)}
                            >
                                {selectable && (
                                    <td className="checkbox-cell" onClick={(e) => e.stopPropagation()}>
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.has(row.id)}
                                            onChange={(e) => handleSelectRow(row.id, e.target.checked)}
                                            className="table-checkbox"
                                        />
                                    </td>
                                )}
                                {columns.map((column) => (
                                    <td key={column.key} className={column.className || ''}>
                                        {renderCell(row, column)}
                                    </td>
                                ))}
                                {onQuickAction && (
                                    <td className="actions-cell" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            className="action-menu-btn"
                                            onClick={() => setActionMenuOpen(actionMenuOpen === row.id ? null : row.id)}
                                        >
                                            <MoreVertical size={16} />
                                        </button>
                                        {actionMenuOpen === row.id && (
                                            <div className="action-menu">
                                                {onQuickAction(row).map((action, idx) => (
                                                    <button
                                                        key={idx}
                                                        className="action-menu-item"
                                                        onClick={() => {
                                                            action.onClick(row);
                                                            setActionMenuOpen(null);
                                                        }}
                                                    >
                                                        {action.icon && <span className="action-icon">{action.icon}</span>}
                                                        {action.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="table-pagination">
                    <div className="pagination-info">
                        Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
                    </div>
                    <div className="pagination-controls">
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(p => p - 1)}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                className={`pagination-btn ${currentPage === idx + 1 ? 'active' : ''}`}
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {idx + 1}
                            </button>
                        ))}
                        <button
                            className="pagination-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(p => p + 1)}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
