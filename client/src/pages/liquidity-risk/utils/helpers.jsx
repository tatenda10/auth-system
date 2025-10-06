export const formatCurrency = (amount) => {
  if (amount === 0) return '-';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const getRowStyle = (item) => {
  if (item.isTotal) return 'border-b-4 border-gray-600 bg-gray-100';
  if (item.type === 'main-header') return 'font-bold text-sm bg-gray-200 border-b-2 border-gray-400';
  if (item.type === 'sub-header') return 'font-semibold text-sm bg-gray-100 border-b border-gray-300';
  if (item.type === 'sub-sub-header') return 'font-medium text-sm bg-gray-50';
  if (item.type === 'formula') return 'font-semibold text-sm text-gray-600 italic bg-gray-50';
  if (item.type === 'calculation') return 'font-bold text-sm text-gray-900 bg-gray-200 border-b-2 border-gray-400';
  return item.id % 2 === 0 ? 'bg-gray-50' : 'bg-white';
};

export const getIndentStyle = (level) => {
  if (level === 0) return 'ml-0';
  if (level === 1) return 'ml-2';
  if (level === 2) return 'ml-8';
  if (level === 3) return 'ml-12';
  return `ml-${level * 4}`;
};

export const getReportingDate = (selectedDate) => {
  const date = new Date(selectedDate);
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();
  return `${month}-${year}`;
};

export const renderValue = (item, column) => {
  if (item.type === 'main-header' || item.type === 'sub-header') {
    return <span className="text-xs text-gray-400">-</span>;
  }
  
  if (item.type === 'formula') {
    return <span className="text-xs text-gray-400">-</span>;
  }

  if (item.type === 'calculation') {
    if (column === 'factor') {
      return <span className="text-xs text-gray-400">-</span>;
    }
    // For LCR row, show as percentage with special styling
    if (item.id === 43) { // LCR row
      const value = item[column] || 0;
      const percentage = (value * 100).toFixed(1);
      return (
        <span className="text-xs font-bold text-gray-900">
          {percentage}%
        </span>
      );
    } else { // Other calculation rows
      return (
        <span className="text-xs font-bold text-gray-900">
          {formatCurrency(item[column] || 0)}
        </span>
      );
    }
  }

  switch (column) {
    case 'factor':
      if (item.factor === '') return <span className="text-xs text-gray-400">-</span>;
      // Convert factor to percentage for display with enhanced styling
      const factorValue = parseFloat(item.factor);
      let factorDisplay = '';
      let factorClass = '';
      
      if (factorValue === 1.0) {
        factorDisplay = '100%';
        factorClass = 'text-gray-800';
      } else if (factorValue === 0.95) {
        factorDisplay = '95%';
        factorClass = 'text-gray-700';
      } else if (factorValue === 0.85) {
        factorDisplay = '85%';
        factorClass = 'text-gray-600';
      } else if (factorValue === 0.50) {
        factorDisplay = '50%';
        factorClass = 'text-gray-500';
      } else {
        factorDisplay = `${(factorValue * 100).toFixed(0)}%`;
        factorClass = 'text-gray-600';
      }
      
      return (
        <span className={`text-xs font-medium px-1 py-0.5 ${factorClass}`}>
          {factorDisplay}
        </span>
      );
    case 'currentMonth':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.currentMonth)}</span>;
    case 'prevMonth':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.prevMonth)}</span>;
    case 'forecast':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.forecast)}</span>;
    case 'factorAppliedCurrent':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.factorAppliedCurrent)}</span>;
    case 'factorAppliedPrev':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.factorAppliedPrev)}</span>;
    case 'factorAppliedForecast':
      return <span className="text-xs font-medium text-gray-900">{formatCurrency(item.factorAppliedForecast)}</span>;
    default:
      return <span className="text-xs text-gray-400">-</span>;
  }
};
