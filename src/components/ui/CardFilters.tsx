
import React, { useState } from 'react';
import { Filter, Search, X } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: {
    bank?: string;
    fee?: string;
    rewards?: string;
    search?: string;
  }) => void;
  banks: string[];
}

const CardFilters: React.FC<FiltersProps> = ({ onFilterChange, banks }) => {
  const [filters, setFilters] = useState({
    bank: '',
    fee: '',
    rewards: '',
    search: '',
  });
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      bank: '',
      fee: '',
      rewards: '',
      search: '',
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          placeholder="Search credit cards..."
          className="form-input-premium pl-10"
        />
        <Search className="absolute left-3 top-3 h-5 w-5 text-slate" />
      </div>
      
      {/* Filters Toggle Button (Mobile) */}
      <button
        onClick={toggleFilters}
        className="md:hidden flex items-center justify-center w-full py-2 bg-gray-100 rounded-md text-slate-dark mb-4"
      >
        <Filter className="h-4 w-4 mr-2" />
        {filtersVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      
      {/* Filter Controls */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
          filtersVisible ? 'block' : 'hidden md:grid'
        }`}
      >
        {/* Bank Filter */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-dark">
            Bank
          </label>
          <select
            name="bank"
            value={filters.bank}
            onChange={handleFilterChange}
            className="form-input-premium"
          >
            <option value="">All Banks</option>
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
        
        {/* Annual Fee Filter */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-dark">
            Annual Fee
          </label>
          <select
            name="fee"
            value={filters.fee}
            onChange={handleFilterChange}
            className="form-input-premium"
          >
            <option value="">Any Fee</option>
            <option value="no-fee">No Annual Fee</option>
            <option value="low">Low (₹0 - ₹999)</option>
            <option value="medium">Medium (₹1,000 - ₹4,999)</option>
            <option value="high">High (₹5,000+)</option>
          </select>
        </div>
        
        {/* Rewards Filter */}
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-dark">
            Rewards Type
          </label>
          <select
            name="rewards"
            value={filters.rewards}
            onChange={handleFilterChange}
            className="form-input-premium"
          >
            <option value="">All Rewards</option>
            <option value="cashback">Cashback</option>
            <option value="travel">Travel</option>
            <option value="points">Reward Points</option>
            <option value="miles">Air Miles</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </div>
      </div>
      
      {/* Clear Filters Button */}
      {(filters.bank || filters.fee || filters.rewards || filters.search) && (
        <button
          onClick={clearFilters}
          className="mt-4 text-sm flex items-center text-teal hover:text-teal-dark transition-colors"
        >
          <X className="h-4 w-4 mr-1" /> Clear Filters
        </button>
      )}
    </div>
  );
};

export default CardFilters;
