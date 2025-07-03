import React, { forwardRef, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { tableVariants } from '../../utils/variants';
import { TableProps, TableColumn } from '../../types';

/**
 * Table component for displaying tabular data with sorting capabilities
 * 
 * @example
 * ```tsx
 * const columns = [
 *   { key: 'name', title: 'Name', sortable: true },
 *   { key: 'email', title: 'Email', sortable: true },
 *   { key: 'status', title: 'Status', render: (value) => <StatusBadge status={value}>{value}</StatusBadge> }
 * ];
 * 
 * <Table 
 *   columns={columns} 
 *   data={users} 
 *   sortable 
 *   onSort={(column, direction) => console.log(column, direction)}
 * />
 * ```
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({
    className,
    columns,
    data,
    sortable = true,
    loading = false,
    onSort,
    defaultSortColumn,
    defaultSortDirection = 'asc',
    testId,
    ...props
  }, ref) => {
    const [sortColumn, setSortColumn] = useState<string | null>(defaultSortColumn || null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(defaultSortDirection);

    const handleSort = (column: TableColumn) => {
      if (!sortable || !column.sortable) return;

      let newDirection: 'asc' | 'desc' = 'asc';
      
      if (sortColumn === column.key) {
        newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      }

      setSortColumn(column.key);
      setSortDirection(newDirection);
      
      if (onSort) {
        onSort(column.key, newDirection);
      }
    };

    const getSortIcon = (column: TableColumn) => {
      if (!sortable || !column.sortable) return null;
      
      if (sortColumn !== column.key) {
        return null;
      }

      return sortDirection === 'asc' ? 
        <ChevronUp className="w-4 h-4 ml-1" /> : 
        <ChevronDown className="w-4 h-4 ml-1" />;
    };

    if (loading) {
      return (
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 rounded mb-2"></div>
          ))}
        </div>
      );
    }

    return (
      <div className={cn(tableVariants(), className)}>
        <table
          ref={ref}
          className="min-w-full divide-y divide-gray-200"
          data-testid={testId}
          {...props}
        >
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
                    column.sortable && sortable && 'cursor-pointer hover:bg-gray-100 select-none'
                  )}
                  onClick={() => handleSort(column)}
                  style={{ width: column.width }}
                >
                  <div className="flex items-center">
                    {column.title}
                    {getSortIcon(column)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {column.render 
                      ? column.render(row[column.key], row, index)
                      : row[column.key]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500">No data available</p>
          </div>
        )}
      </div>
    );
  }
);

Table.displayName = 'Table'; 