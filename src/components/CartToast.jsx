import React, { useEffect } from 'react';
import { CheckCircle2, ShoppingBag, ArrowLeft, X } from 'lucide-react';

export default function CartToast({ show, message, product, onViewCart, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show || !product) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 animate-slide-down">
      <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-center justify-between gap-3 max-w-md mx-auto">
        
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="min-w-0 text-right">
            <span className="text-[11px] text-emerald-400 font-bold block">تمت الإضافة إلى السلة بنجاح!</span>
            <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
            <span className="text-[11px] font-black text-red-500">{product.price} درهم</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onViewCart}
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>السلة</span>
          </button>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
