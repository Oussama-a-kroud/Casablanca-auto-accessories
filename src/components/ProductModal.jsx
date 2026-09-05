import React, { useState } from 'react';
import { X, Star, ShieldCheck, Truck, MessageCircle, ShoppingCart, Car, User, Phone, MapPin } from 'lucide-react';
import { BRANDS, WHATSAPP_NUMBER } from '../data/products';
import { getAssetUrl } from '../utils/image';

export default function ProductModal({ product, onClose, onAddToCart, selectedVehicle }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'أسود');
  
  // Client Form Information Fields for WhatsApp
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('الدار البيضاء (كازابلانكا)');
  const [carBrand, setCarBrand] = useState(selectedVehicle?.brand || '');
  const [carModel, setCarModel] = useState(selectedVehicle?.model || '');
  const [carYear, setCarYear] = useState(selectedVehicle?.year || '2023');

  const moroccanCities = [
    'الدار البيضاء (كازابلانكا)', 'الرباط', 'مراكش', 'طنجة', 'أكادير', 'فاس', 'مكناس',
    'وجدة', 'تطوان', 'القنيطرة', 'الجديدة', 'الناظور', 'بني ملال', 'آسفي',
    'المحمدية', 'العيون', 'مدينة أخرى بالمغرب'
  ];

  const images = [product.image, ...(product.secondaryImages || [])];

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    let msg = `*طلب جديد - كازابلانكا أوتو أكسسوار*\n\n`;
    msg += `📦 *المنتج:* ${product.name}\n`;
    msg += `💰 *الثمن:* ${product.price} درهم\n`;
    msg += `🎨 *اللون / الفينيسيون:* ${selectedColor}\n\n`;
    msg += `👤 *معلومات الزبون:*\n`;
    msg += `- الاسم الكامل: ${clientName || 'غير محدد'}\n`;
    msg += `- رقم الهاتف: ${clientPhone || 'غير محدد'}\n`;
    msg += `- مدينة التسليم: ${clientCity}\n`;
    msg += `- السيارة: ${carBrand} ${carModel} (${carYear})\n\n`;
    msg += `🚚 *الدفع:* عند الاستلام 100%`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleAddToCartClick = () => {
    onAddToCart({
      ...product,
      color: selectedColor,
      vehicle: { brand: carBrand, model: carModel, year: carYear }
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto text-right">
      
      {/* Mobile Sheet Container */}
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-t-3xl sm:rounded-2xl overflow-hidden my-0 sm:my-4 shadow-2xl max-h-[92vh] sm:max-h-none overflow-y-auto">
        
        {/* Touch Drag Indicator Mobile */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-2 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid md:grid-cols-12 gap-5 p-4 sm:p-6">
          
          {/* Right Column (Arabic RTL): Product Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={getAssetUrl(activeImage)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-red-600 scale-105' : 'border-slate-200 opacity-60'
                    }`}
                  >
                    <img src={getAssetUrl(img)} alt="معاينة" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Product Quick Info */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="text-slate-900">{product.rating} / 5</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount} تقييم)</span>
              </div>
              <h3 className="font-bold text-slate-900">{product.name}</h3>
              <div className="flex items-baseline gap-2 pt-0.5">
                <span className="text-xl font-black text-slate-900">{product.price} <span className="text-xs text-red-600 font-bold">درهم</span></span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">{product.originalPrice} درهم</span>
                )}
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-1 text-[11px] text-slate-600 font-medium hidden sm:block">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>توصيل سريع خلال 24 ساعة بكازابلانكا وكافة المدن</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>الدفع 100% عند الاستلام بعد معاينة المنتج</span>
              </div>
            </div>

          </div>

          {/* Left Column (Arabic RTL): Information Form for WhatsApp */}
          <div className="md:col-span-7 space-y-3 flex flex-col justify-between">
            
            <form onSubmit={handleSendWhatsApp} className="space-y-3">
              
              <div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold mb-1">
                  <MessageCircle className="w-3 h-3 fill-emerald-600 text-emerald-50" /> طلب مباشر عبر الواتساب
                </div>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                  أدخل معلوماتك لإرسال الطلب فوراً
                </h2>
              </div>

              {/* Color Finish Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    1. اللون / الفينيسيون: <span className="text-red-600">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                          selectedColor === c.name
                            ? 'bg-red-600 border-red-600 text-white shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Input Fields */}
              <div className="space-y-2 text-xs">
                
                {/* Nom Complet */}
                <div>
                  <label className="block font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-500" /> الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: محمد العلمي"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Numéro Téléphone */}
                <div>
                  <label className="block font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" /> رقم الهاتف (الواتساب) *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="مثال: 06 12 34 56 78"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Ville & Voiture */}
                <div className="grid grid-cols-2 gap-2">
                  
                  {/* Ville */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> المدينة *
                    </label>
                    <select
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                    >
                      {moroccanCities.map((city, idx) => (
                        <option key={idx} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {/* Marque Voiture */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-0.5 flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-slate-500" /> ماركة السيارة *
                    </label>
                    <select
                      value={carBrand}
                      onChange={(e) => {
                        setCarBrand(e.target.value);
                        setCarModel('');
                      }}
                      required
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                    >
                      <option value="">اختر الماركة</option>
                      {BRANDS.map((b) => (
                        <option key={b.id} value={b.name}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Modèle & Année */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-0.5">موديل السيارة *</label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: دوستر / جولف 7 / توسان"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-0.5">السنة</label>
                    <input
                      type="text"
                      placeholder="مثال: 2023"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-2.5 focus:border-red-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Submit Buttons: WhatsApp OR Add to Cart */}
              <div className="space-y-2 pt-2">
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
                  <span>إرسال طلبي عبر الواتساب ({product.price} درهم)</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddToCartClick}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                >
                  <ShoppingCart className="w-4 h-4 text-red-600 shrink-0" />
                  <span>إضافة للسلة ومتابعة التسوق 🛒</span>
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}
