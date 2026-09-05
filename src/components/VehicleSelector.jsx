import React, { useState } from 'react';
import { BRANDS, CAR_MODELS } from '../data/products';
import { Car, Search, CheckCircle, RotateCcw } from 'lucide-react';

export default function VehicleSelector({ onFilterVehicle }) {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const years = ['2024 (حديث)', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015 أو أقدم'];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onFilterVehicle) {
      onFilterVehicle({
        brand: selectedBrand,
        model: selectedModel,
        year: selectedYear
      });
    }
  };

  const handleReset = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYear('');
    if (onFilterVehicle) {
      onFilterVehicle(null);
    }
  };

  return (
    <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-right">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Car className="w-4 h-4 text-red-600" /> اختر نوع وموديل سيارتك
        </h2>
        {(selectedBrand || selectedModel) && (
          <button
            type="button"
            onClick={handleReset}
            className="text-[11px] text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors font-medium"
          >
            <RotateCcw className="w-3 h-3" /> إعادة الضبط
          </button>
        )}
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        
        {/* Brand */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">1. الماركة</label>
          <select
            value={selectedBrand}
            onChange={(e) => {
              setSelectedBrand(e.target.value);
              setSelectedModel('');
            }}
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-900 rounded-lg p-2 focus:border-red-600 focus:bg-white focus:outline-none"
          >
            <option value="">-- اختر الماركة --</option>
            {BRANDS.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">2. الموديل</label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={!selectedBrand}
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-900 rounded-lg p-2 focus:border-red-600 focus:bg-white focus:outline-none disabled:opacity-40"
          >
            <option value="">-- اختر الموديل --</option>
            {selectedBrand &&
              CAR_MODELS[selectedBrand]?.map((m, idx) => (
                <option key={idx} value={m}>{m}</option>
              ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-700 mb-1">3. السنة</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disabled={!selectedModel}
            className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-900 rounded-lg p-2 focus:border-red-600 focus:bg-white focus:outline-none disabled:opacity-40"
          >
            <option value="">-- اختر السنة --</option>
            {years.map((y, idx) => (
              <option key={idx} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span>عرض الطابيات المطابقة</span>
          </button>
        </div>

      </form>

      {selectedBrand && selectedModel && (
        <div className="mt-2.5 bg-slate-50 border border-slate-200 p-2 rounded-lg flex items-center justify-between text-xs text-slate-700">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            السيارة المختارة: <strong className="text-slate-900">{selectedBrand} {selectedModel} ({selectedYear || 'جميع السنوات'})</strong>
          </span>
        </div>
      )}
    </div>
  );
}
