import React from 'react';

const PrudentialRatios = ({ prudentialRatios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {prudentialRatios.map((ratio, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">{ratio.ratio}</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Current:</span>
              <span className={`text-sm font-medium ${
                ratio.status === 'above' ? 'text-green-600' : ratio.status === 'below' ? 'text-red-600' : 'text-gray-900'
              }`}>
                {ratio.current}%
              </span>
            </div>
            {ratio.minimum && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Minimum:</span>
                <span className="text-sm font-medium text-gray-900">{ratio.minimum}%</span>
              </div>
            )}
            {ratio.maximum && (
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Maximum:</span>
                <span className="text-sm font-medium text-gray-900">{ratio.maximum}%</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Target:</span>
              <span className="text-sm font-medium text-blue-600">{ratio.target}%</span>
            </div>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                ratio.status === 'above' ? 'bg-green-100 text-green-800' : 
                ratio.status === 'below' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {ratio.status === 'above' ? 'Above Target' : 
                 ratio.status === 'below' ? 'Below Target' : 'At Target'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrudentialRatios;
