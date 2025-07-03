import React, { forwardRef, useState, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { dataTableVariants } from '../../utils/variants';
import { DataTableProps } from '../../types';
import { Table } from '../Table';
import { SearchInput } from '../SearchInput';
import { FilterSelect } from '../FilterSelect';
import { StatusBadge } from '../StatusBadge';
import { HealthIndicator } from '../HealthIndicator';

/**
 * DataTable component - Advanced table with built-in search, filtering, and pagination
 * 
 * @example
 * ```tsx
 * <DataTable
 *   data={endpoints}
 *   columns={[
 *     { key: 'hostname', title: 'Hostname', sortable: true },
 *     { key: 'status', title: 'Status', sortable: true, 
 *       render: (value) => <StatusBadge status={value.toLowerCase()}>{value}</StatusBadge> },
 *     { key: 'health', title: 'Health', sortable: true,
 *       render: (value) => <HealthIndicator status={value.toLowerCase()}>{value}</HealthIndicator> }
 *   ]}
 *   searchable
 *   filterable
 *   searchPlaceholder="Search endpoints..."
 *   filters={[
 *     { key: 'status', options: [
 *       { value: '', label: 'All Status' },
 *       { value: 'online', label: 'Online' },
 *       { value: 'offline', label: 'Offline' }
 *     ]}
 *   ]}
 * />
 * ```
 */
export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  ({
    className,
    data,
    columns,
    searchable = true,
    filterable = true,
    searchPlaceholder = 'Search...',
    filters = [],
    loading = false,
    onSearch,
    onFilter,
    onSort,
    testId,
    ...props
  }, ref) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    // Filter and search data
    const filteredData = useMemo(() => {
      let filtered = [...data];

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(item =>
          columns.some(column => {
            const value = item[column.key];
            if (typeof value === 'string') {
              return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
          })
        );
      }

      // Apply column filters
      Object.entries(activeFilters).forEach(([key, value]) => {
        if (value) {
          filtered = filtered.filter(item => {
            const itemValue = item[key];
            if (typeof itemValue === 'string') {
              return itemValue.toLowerCase() === value.toLowerCase();
            }
            return false;
          });
        }
      });

      // Apply sorting
      if (sortColumn) {
        filtered.sort((a, b) => {
          const aValue = a[sortColumn];
          const bValue = b[sortColumn];
          
          if (typeof aValue === 'string' && typeof bValue === 'string') {
            const comparison = aValue.localeCompare(bValue);
            return sortDirection === 'asc' ? comparison : -comparison;
          }
          
          if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
          }
          
          return 0;
        });
      }

      return filtered;
    }, [data, searchTerm, activeFilters, sortColumn, sortDirection, columns]);

    const handleSearch = (value: string) => {
      setSearchTerm(value);
      if (onSearch) {
        onSearch(value);
      }
    };

    const handleFilter = (key: string, value: string) => {
      setActiveFilters(prev => ({
        ...prev,
        [key]: value
      }));
      if (onFilter) {
        onFilter(key, value);
      }
    };

    const handleSort = (column: string, direction: 'asc' | 'desc') => {
      setSortColumn(column);
      setSortDirection(direction);
      if (onSort) {
        onSort(column, direction);
      }
    };

    const clearAllFilters = () => {
      setSearchTerm('');
      setActiveFilters({});
      setSortColumn(null);
      setSortDirection('asc');
    };

    const hasActiveFilters = searchTerm || Object.values(activeFilters).some(v => v);

    return (
      <div
        ref={ref}
        className={cn(dataTableVariants(), className)}
        data-testid={testId}
        {...props}
      >
        {/* Header with search and filters */}
        <div className="mb-4 space-y-4">
          {/* Search and Clear Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {searchable && (
              <div className="flex-1 max-w-sm">
                <SearchInput
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  onClear={() => handleSearch('')}
                />
              </div>
            )}
            
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Filters */}
          {filterable && filters.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <div key={filter.key} className="min-w-40">
                  <FilterSelect
                    options={filter.options}
                    value={activeFilters[filter.key] || ''}
                    onValueChange={(value) => handleFilter(filter.key, value)}
                    placeholder={filter.placeholder || `All ${filter.key}`}
                    size="sm"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredData.length} of {data.length} results
        </div>

        {/* Table */}
        <Table
          data={filteredData}
          columns={columns}
          loading={loading}
          sortable
          onSort={handleSort}
          {...(sortColumn && { defaultSortColumn: sortColumn })}
          defaultSortDirection={sortDirection}
        />
      </div>
    );
  }
);

DataTable.displayName = 'DataTable'; 