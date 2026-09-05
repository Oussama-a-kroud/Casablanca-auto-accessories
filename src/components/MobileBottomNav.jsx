import React from 'react';
import { ShoppingCart, MessageCircle, Car, Home } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function MobileBottomNav({ cartCount, onOpenCart, onScrollToCatalog }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg flex items-center justify-around">
      
      {/* Home / Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-600 hover:text-red-600 transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>الرئيسية</span>
      </button>

      {/* Catalog */}
      <button
        onClick={onScrollToCatalog}
        className="flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-600 hover:text-red-600 transition-colors"
      >
        <Car className="w-5 h-5 text-red-600" />
        <span>طابيات 7D</span>
      </button>

      {/* Prominent Trolley ShoppingCart Button */}
      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center gap-0.5 text-[10px] font-bold text-slate-800 hover:text-red-600 transition-colors"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5 text-red-600" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2.5 bg-red-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full shadow">
              {cartCount}
            </span>
          )}
        </div>
        <span>السلة ({cartCount})</span>
      </button>

      {/* Direct WhatsApp Action */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Casablanca Auto Accessories, je souhaite commander.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span>واتساب</span>
      </a>

    </div>
  );
}
