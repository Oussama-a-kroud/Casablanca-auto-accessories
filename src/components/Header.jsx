import React, { useState } from 'react';
import { ShoppingCart, ShieldCheck, Truck, MessageCircle, Menu, X, Search } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function Header({ cartCount, onOpenCart, onSelectCategory, activeCategory, searchCar, setSearchCar }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-4">
        <span className="flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-red-400" /> توصيل 24h بالدار البيضاء وسريع لكافة مدن المغرب
        </span>
        <span className="hidden sm:inline text-slate-600">•</span>
        <span className="hidden sm:flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-300" /> الدفع عند الاستلام 100%
        </span>
        <span className="hidden md:inline text-slate-600">•</span>
        <span className="hidden md:inline font-semibold text-slate-100">
          طابيات 7D و 3D على المقاس
        </span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectCategory('all')}>
          <img
            src="/images/logo.png"
            alt="Casablanca Auto Accessories"
            className="h-12 w-auto object-contain hover:scale-102 transition-transform"
          />
          <div className="hidden sm:block">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 block leading-tight font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
              Casablanca Auto <span className="text-red-600">Accessories</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
              Accessoires Auto Service
            </span>
          </div>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
          {[
            { id: 'all', label: 'جميع الطابيات' },
            { id: 'habitacle', label: 'طابيات 7D على المقاس' },
            { id: 'coffre', label: 'فرش الصندوق' },
            { id: 'pack', label: 'باك كامل 7D' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Quick Search */}
          <div className="relative hidden md:block w-44">
            <input
              type="text"
              placeholder="ابحث عن سيارتك..."
              value={searchCar}
              onChange={(e) => setSearchCar(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 text-xs text-slate-900 rounded-lg py-1.5 pr-8 pl-3 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2" />
          </div>

          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Casablanca Auto Accessories, je souhaite commander.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>واتساب</span>
          </a>

          {/* Prominent Shopping Cart Trolley Icon */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-md flex items-center justify-center gap-1.5 px-3"
            aria-label="عرض السلة"
          >
            <ShoppingCart className="w-5 h-5 text-red-500" />
            <span className="text-xs font-bold hidden sm:inline">السلة</span>
            {cartCount > 0 && (
              <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سيارتك (مثال: داسيا، جولف...)"
              value={searchCar}
              onChange={(e) => setSearchCar(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 text-xs text-slate-900 rounded-lg py-2 pr-8 pl-3"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'all', label: 'جميع الطابيات' },
              { id: 'habitacle', label: 'طابيات 7D' },
              { id: 'coffre', label: 'فرش الصندوق' },
              { id: 'pack', label: 'باك كامل' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-3 rounded-lg text-xs font-semibold text-right border ${
                  activeCategory === cat.id
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-lg text-xs w-full shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            اطلب المساعدة عبر الواتساب
          </a>
        </div>
      )}
    </header>
  );
}
