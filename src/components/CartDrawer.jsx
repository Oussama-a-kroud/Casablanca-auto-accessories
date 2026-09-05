import React from 'react';
import { X, Trash2, ShoppingCart, ArrowLeft, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cart, onRemoveItem, onCheckout }) {
  if (!isOpen) return null;

  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const buildWhatsAppText = () => {
    let text = "السلام عليكم كازابلانكا أوتو أكسسوار، أريد طلب السلة التالية:\n\n";
    cart.forEach((item, i) => {
      text += `${i + 1}. ${item.name} (${item.color || 'عادي'})\n`;
      if (item.vehicle?.brand) {
        text += `   السيارة: ${item.vehicle.brand} ${item.vehicle.model || ''}\n`;
      }
      text += `   الثمن: ${item.price} درهم\n`;
    });
    text += `\nالمجموع الكلي: ${totalPrice} درهم (التوصيل مجاني بالمغرب)`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-right" dir="rtl">
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      {/* Drawer Container - Full Width on Mobile, Max-md on Desktop */}
      <div className="fixed inset-y-0 right-0 w-full sm:max-w-md flex pl-0">
        <div className="w-full bg-white border-l border-slate-200 text-slate-900 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-red-600 shrink-0" />
              <h2 className="text-base font-bold text-slate-900">سلة المشتريات ({cart.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingCart className="w-7 h-7" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">سلتك فارغة حالياً</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  تصفح مجموعتنا الممتازة من طابيات 7D وفرش الصندوق!
                </p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <img
                      src={getAssetUrl(item.image)}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">اللون: {item.color || 'عادي'}</p>
                      <div className="text-xs font-black text-red-600 mt-1 whitespace-nowrap">
                        {item.price} درهم
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="p-2 text-slate-400 hover:text-red-600 transition-colors shrink-0"
                    title="حذف من السلة"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              
              <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                <div className="flex justify-between items-center">
                  <span>المجموع الجزئي</span>
                  <span className="font-bold text-slate-900 whitespace-nowrap">{totalPrice} درهم</span>
                </div>
                <div className="flex justify-between items-center text-emerald-700 font-bold">
                  <span>التوصيل بالمغرب</span>
                  <span className="whitespace-nowrap">مجاني 100%</span>
                </div>
                <div className="flex justify-between items-center text-sm font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>المجموع الإجمالي</span>
                  <span className="text-red-600 text-base font-black whitespace-nowrap">{totalPrice} درهم</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onCheckout();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>إتمام الطلب (الدفع عند الاستلام)</span>
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppText()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-600" />
                  <span>طلب السلة عبر الواتساب</span>
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
