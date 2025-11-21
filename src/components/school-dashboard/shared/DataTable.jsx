import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Filter, MoreVertical, Download, Trash2, Edit, Eye } from 'lucide-react';

const DataTable = ({
    columns,
    data,
    selectable = false,
    onSelectionChange,
    onQuickAction,
    pageSize = 10,
    searchPlaceholder = "Search..."
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    // Filter data based on search term
    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort data
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    // Pagination
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = paginatedData.map(row => row.id);
            setSelectedRows(allIds);
            onSelectionChange && onSelectionChange(allIds);
        } else {
            setSelectedRows([]);
            onSelectionChange && onSelectionChange([]);
        }
    };

    const handleSelectRow = (id) => {
        const newSelection = selectedRows.includes(id)
            ? selectedRows.filter(rowId => rowId !== id)
            : [...selectedRows, id];
        setSelectedRows(newSelection);
        onSelectionChange && onSelectionChange(newSelection);
    };

    return (
        <div className="w-full">
            {/* Table Actions Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder={searchPlaceholder}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-[var(--border-radius-base)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-[var(--border-radius-base)] text-sm text-[var(--text-secondary)] hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </button>
                    <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-[var(--border-radius-base)] text-sm text-[var(--text-secondary)] hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto border border-gray-200 rounded-[var(--border-radius-base)] bg-white">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-[var(--text-secondary)] uppercase bg-[var(--surface-muted)] border-b border-gray-200">
                        <tr>
                            {selectable && (
                                <th className="p-4 w-4">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                                        onChange={handleSelectAll}
                                        checked={paginatedData.length > 0 && selectedRows.length === paginatedData.length}
                                    />
                                </th>
                            )}
                            {columns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`px-6 py-3 font-semibold tracking-wide ${col.sortable ? 'cursor-pointer hover:text-[var(--primary-color)]' : ''}`}
                                    onClick={() => col.sortable && handleSort(col.key)}
                                >
                                    <div className="flex items-center gap-1">
                                        {col.label}
                                        {sortConfig.key === col.key && (
                                            <span className="text-[var(--primary-color)]">
                                                {sortConfig.direction === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                            {onQuickAction && <th className="px-6 py-3 text-right">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((row, index) => (
                                <tr
                                    key={row.id || index}
                                    className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                                >
                                    {selectable && (
                                        <td className="p-4 w-4">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                                                checked={selectedRows.includes(row.id)}
                                                onChange={() => handleSelectRow(row.id)}
                                            />
                                        </td>
                                    )}
                                    {columns.map((col) => (
                                        <td key={col.key} className="px-6 py-4 text-[var(--text-primary)]">
                                            {col.render ? col.render(row) : row[col.key]}
                                        </td>
                                    ))}
                                    {onQuickAction && (
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                {onQuickAction(row).map((action, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={action.onClick}
                                                        className="p-1.5 text-gray-500 hover:text-[var(--primary-color)] hover:bg-blue-50 rounded-md transition-colors"
                                                        title={action.label}
                                                    >
                                                        {action.icon}
                                                    </button>
                                                ))}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length + (selectable ? 1 : 0) + (onQuickAction ? 1 : 0)} className="px-6 py-8 text-center text-gray-500">
                                    No data found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[var(--text-secondary)]">
                    Showing <span className="font-medium text-[var(--text-primary)]">{startIndex + 1}</span> to <span className="font-medium text-[var(--text-primary)]">{Math.min(startIndex + pageSize, sortedData.length)}</span> of <span className="font-medium text-[var(--text-primary)]">{sortedData.length}</span> entries
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 rounded-[var(--border-radius-base)] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 text-sm font-medium rounded-[var(--border-radius-base)] ${currentPage === page
                                    ? 'bg-[var(--primary-color)] text-white'
                                    : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 rounded-[var(--border-radius-base)] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
