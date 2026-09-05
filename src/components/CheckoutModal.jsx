import React, { useState } from 'react';
import { X, CheckCircle2, Truck, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function CheckoutModal({ isOpen, onClose, cart, singleProduct, onOrderCompleted }) {
  if (!isOpen) return null;

  const itemsToBuy = singleProduct ? [singleProduct] : cart;
  const totalPrice = itemsToBuy.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: 'الدار البيضاء (كازابلانكا)',
    address: '',
    carModel: singleProduct?.vehicle?.model || ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const moroccanCities = [
    'الدار البيضاء (كازابلانكا)', 'الرباط', 'مراكش', 'طنجة', 'أكادير', 'فاس', 'مكناس',
    'وجدة', 'تطوان', 'القنيطرة', 'الجديدة', 'الناظور', 'بني ملال', 'آسفي',
    'المحمدية', 'العيون', 'مدينة أخرى بالمغرب'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onOrderCompleted) {
      onOrderCompleted();
    }
  };

  const openWhatsAppConfirmation = () => {
    let msg = `*طلب جديد - كازابلانكا أوتو أكسسوار*\n`;
    msg += `الزبون: ${formData.fullName}\n`;
    msg += `الهاتف: ${formData.phone}\n`;
    msg += `المدينة: ${formData.city}\n`;
    msg += `العنوان: ${formData.address}\n`;
    msg += `السيارة: ${formData.carModel}\n\n`;
    msg += `*المنتجات:*\n`;
    itemsToBuy.forEach((item) => {
      msg += `- ${item.name} (${item.price} درهم)\n`;
    });
    msg += `\n*المجموع الإجمالي: ${totalPrice} درهم (الدفع عند الاستلام)*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto text-right">
      
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 space-y-5">
            
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold mb-1.5">
                <Truck className="w-3.5 h-3.5" /> توصيل مجاني + الدفع عند الاستلام 100%
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">
                إتمام الطلب ({totalPrice} درهم)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                يرجى إدخال معلوماتك لتأكيد الشحن والتوصيل.
              </p>
            </div>

            {/* Summary */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1.5 text-xs">
              <span className="font-bold text-slate-700">الطابيات المطلوبة:</span>
              {itemsToBuy.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-900 font-medium">
                  <span className="truncate max-w-[260px]">{item.name}</span>
                  <span className="font-bold text-red-600">{item.price} درهم</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: محمد العلمي"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    placeholder="مثال: 06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">مدينة التسليم *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  >
                    {moroccanCities.map((city, i) => (
                      <option key={i} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">ماركة وموديل السيارة *</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: داسيا دوستر / جولف 7"
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">العنوان الكامل بالتفصيل *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="الحي، الشارع، رقم الشقة أو نقطة قريبة..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>تأكيد الطلب ({totalPrice} درهم - الدفع عند الاستلام)</span>
              </button>

            </form>

          </div>
        ) : (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-slate-900">تم تسجيل طلبك بنجاح!</h2>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                شكراً لك <strong className="text-slate-900">{formData.fullName}</strong>! سنتصل بك على الرقم <strong className="text-slate-900">{formData.phone}</strong> لتأكيد الشحن والتوصيل.
              </p>
            </div>

            <div className="space-y-2 max-w-sm mx-auto pt-2">
              <button
                onClick={openWhatsAppConfirmation}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>إرسال تاكيد الطلب عبر الواتساب</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold py-2.5 rounded-lg text-xs"
              >
                العودة للتسوق
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
