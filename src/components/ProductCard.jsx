import React from 'react';
import { Star, ShoppingCart, MessageCircle, Check } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function ProductCard({ product, onSelectProduct, onQuickBuy, onAddToCart, selectedVehicle }) {
  const whatsappText = encodeURIComponent(
    `السلام عليكم كازابلانكا أوتو أكسسوار، أريد طلب: ${product.name} (الثمن: ${product.price} درهم).` +
    (selectedVehicle ? `\nالسيارة: ${selectedVehicle.brand} ${selectedVehicle.model}` : '')
  );

  return (
    <div className="bg-white border border-slate-200 hover:border-slate-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between text-right group">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge Top Right */}
        {product.badge && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[9px] sm:text-[11px] font-bold px-2 py-0.5 rounded shadow-xs">
            {product.badge}
          </span>
        )}

        {/* Selected Vehicle Badge */}
        {selectedVehicle && selectedVehicle.brand && (
          <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-white/95 text-slate-800 text-[9px] font-semibold py-0.5 px-2 rounded border border-slate-200 flex items-center justify-between shadow-xs">
            <span className="truncate">مطابق لسيارتك</span>
            <Check className="w-3 h-3 text-emerald-600 shrink-0" />
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 mb-0.5">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-[11px] sm:text-xs font-bold text-slate-900">{product.rating}</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400">({product.reviewsCount})</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="text-xs sm:text-sm font-bold text-slate-900 hover:text-red-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          {/* Subtitle */}
          <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          
          {/* Price Header */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-base sm:text-xl font-black text-slate-900">{product.price} <span className="text-[10px] sm:text-xs font-bold text-red-600">درهم</span></span>
              {product.originalPrice && (
                <span className="text-[10px] sm:text-xs text-slate-400 line-through mr-1.5">
                  {product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-700 font-bold bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              الدفع عند الاستلام
            </span>
          </div>

          {/* Action CTAs: Add to Cart + WhatsApp */}
          <div className="grid grid-cols-2 gap-1.5">
            
            {/* Add to Cart Quick Button with Trolley Icon */}
            <button
              onClick={() => onAddToCart(product)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 font-bold py-2 px-2 rounded-xl text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors"
              title="إضافة للسلة"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>أضف للسلة</span>
            </button>

            {/* Direct Order */}
            <button
              onClick={() => onSelectProduct(product)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-xl text-[11px] sm:text-xs flex items-center justify-center gap-1 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>اطلب الآن</span>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
