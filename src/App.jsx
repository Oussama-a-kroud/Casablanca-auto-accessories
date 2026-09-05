import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileBottomNav from './components/MobileBottomNav';
import CartToast from './components/CartToast';
import { PRODUCTS, BRANDS } from './data/products';
import { Car, CheckCircle2, RotateCcw } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchCar, setSearchCar] = useState('');

  // Mobile Cart Toast Notification State
  const [toastProduct, setToastProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const catalogRef = useRef(null);

  // Add to Cart without automatically opening the cart drawer
  const handleAddToCart = (productWithDetails) => {
    setCart((prevCart) => [...prevCart, productWithDetails]);
    setToastProduct(productWithDetails);
    setShowToast(true);
  };

  const handleQuickBuy = (product) => {
    setCheckoutProduct({
      ...product,
      vehicle: selectedVehicle
    });
    setIsCheckoutOpen(true);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const scrollToCatalog = () => {
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Category Filter
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // 2. Search Query Filter
    if (searchCar.trim()) {
      const q = searchCar.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchSub = product.subtitle.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      if (!matchName && !matchSub && !matchCat) {
        return false;
      }
    }

    // 3. Brand / Vehicle Filter
    if (selectedVehicle && selectedVehicle.brand) {
      const brandId = selectedVehicle.brand.toLowerCase();
      
      // Universal items (Bac de coffre / Pack integral) show up
      if (product.category === 'coffre' || product.category === 'pack') {
        return true;
      }

      const prodId = product.id.toLowerCase();
      const prodName = product.name.toLowerCase();

      let matchBrand = prodId.includes(brandId) || prodName.includes(brandId);
      
      if (!matchBrand) {
        if (brandId === 'dacia' && (prodId.includes('dokker') || prodId.includes('duster'))) matchBrand = true;
        if (brandId === 'renault' && (prodId.includes('clio') || prodId.includes('express'))) matchBrand = true;
        if (brandId === 'peugeot' && (prodId.includes('208') || prodId.includes('301') || prodId.includes('308') || prodId.includes('3008') || prodId.includes('rifter') || prodId.includes('partner'))) matchBrand = true;
        if (brandId === 'volkswagen' && (prodId.includes('golf') || prodId.includes('caddy') || prodId.includes('tiguan') || prodId.includes('vw'))) matchBrand = true;
        if (brandId === 'hyundai' && (prodId.includes('accent') || prodId.includes('tucson') || prodId.includes('santafe'))) matchBrand = true;
        if (brandId === 'mercedes' && prodId.includes('mercedes')) matchBrand = true;
        if (brandId === 'nissan' && prodId.includes('qashqai')) matchBrand = true;
        if (brandId === 'toyota' && (prodId.includes('corolla') || prodId.includes('rav4'))) matchBrand = true;
        if (brandId === 'skoda' && prodId.includes('octavia')) matchBrand = true;
        if (brandId === 'audi' && prodId.includes('audi')) matchBrand = true;
        if (brandId === 'seat' && prodId.includes('ateca')) matchBrand = true;
        if (brandId === 'kia' && prodId.includes('sportage')) matchBrand = true;
        if (brandId === 'ford' && prodId.includes('fiesta')) matchBrand = true;
        if (brandId === 'citroen' && prodId.includes('c4')) matchBrand = true;
        if (brandId === 'honda' && prodId.includes('crv')) matchBrand = true;
      }

      if (!matchBrand) {
        return false;
      }

      // Specific Model sub-filtering if model selected
      if (selectedVehicle.model) {
        const modelLower = selectedVehicle.model.toLowerCase();
        if (modelLower.includes('duster 1') && !prodId.includes('duster-1')) return false;
        if (modelLower.includes('duster 2') && !prodId.includes('duster-2')) return false;
        if (modelLower.includes('duster 3') && !prodId.includes('duster-3')) return false;
        if (modelLower.includes('clio 4') && !prodId.includes('clio-4')) return false;
        if (modelLower.includes('clio 5') && !prodId.includes('clio-5')) return false;
        if (modelLower.includes('golf 4') && !prodId.includes('golf-4')) return false;
        if (modelLower.includes('golf 7') && !prodId.includes('golf-7')) return false;
        if (modelLower.includes('w203') && !prodId.includes('w203')) return false;
      }
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Readex_Pro','Plus_Jakarta_Sans',sans-serif] pb-16 lg:pb-0">
      
      {/* Toast Notification for Cart Additions (Without auto opening drawer) */}
      <CartToast
        show={showToast}
        product={toastProduct}
        onViewCart={() => {
          setShowToast(false);
          setIsCartOpen(true);
        }}
        onClose={() => setShowToast(false)}
      />

      {/* Header */}
      <Header
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={setActiveCategory}
        activeCategory={activeCategory}
        searchCar={searchCar}
        setSearchCar={setSearchCar}
      />

      {/* Hero Banner */}
      <Hero onFilterVehicle={(veh) => {
        setSelectedVehicle(veh);
        scrollToCatalog();
      }} />

      {/* Catalog Section */}
      <main ref={catalogRef} className="flex-1 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 lg:py-10 w-full space-y-6 text-right">
        
        {/* Title & Filter Tabs */}
        <div className="space-y-4 border-b border-slate-200 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  كتالوج طابيات 7D الفاخرة
                </span>
              </div>
              <h2 className="text-lg sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                طابيات السيارات وأفرشة الصندوق
              </h2>
              {selectedVehicle && selectedVehicle.brand && (
                <div className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg w-fit">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>نتائج البحث لسيارة: <strong className="text-slate-900">{selectedVehicle.brand} {selectedVehicle.model} {selectedVehicle.year}</strong></span>
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="text-slate-500 hover:text-red-600 underline font-normal text-[11px] mr-2 flex items-center gap-0.5"
                  >
                    <RotateCcw className="w-3 h-3" /> إزالة الفلتر
                  </button>
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'جميع الطابيات' },
                { id: 'habitacle', label: 'طابيات 7D' },
                { id: 'coffre', label: 'فرش الصندوق' },
                { id: 'pack', label: 'باك كامل 7D' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-red-600 border-red-600 text-white shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Quick Filter Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs border-t border-slate-100 pt-3">
            <span className="text-slate-500 font-bold text-[11px] shrink-0 ml-1">الماركة:</span>
            <button
              onClick={() => setSelectedVehicle(null)}
              className={`px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all text-[11px] ${
                !selectedVehicle || !selectedVehicle.brand
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              الكل (جميع الماركات)
            </button>
            {BRANDS.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedVehicle({ brand: b.id, model: '', year: '' });
                  scrollToCatalog();
                }}
                className={`px-3 py-1 rounded-full font-bold whitespace-nowrap transition-all text-[11px] flex items-center gap-1 ${
                  selectedVehicle && selectedVehicle.brand === b.id
                    ? 'bg-red-600 text-white shadow-xs border border-red-600'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{b.logo}</span>
                <span>{b.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid - 2 Column Compact Grid on Mobile Phones */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-3 shadow-xs">
            <Car className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">لم نجد أي طابيات تطابق بحثك</h3>
            <p className="text-xs text-slate-500">جرب البحث باسم سيارة آخر أو إظهار كافة المنتجات.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchCar('');
                setSelectedVehicle(null);
              }}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors shadow-xs"
            >
              عرض كافة الطابيات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={(p) => setSelectedProduct(p)}
                onQuickBuy={handleQuickBuy}
                onAddToCart={handleAddToCart}
                selectedVehicle={selectedVehicle}
              />
            ))}
          </div>
        )}

      </main>

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer onSelectCategory={setActiveCategory} />

      {/* Floating WhatsApp Action (Desktop) */}
      <div className="hidden lg:block">
        <WhatsAppButton />
      </div>

      {/* Sticky Mobile Bottom Bar (Smartphones) */}
      <MobileBottomNav
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToCatalog={scrollToCatalog}
      />

      {/* Modals & Drawers */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          selectedVehicle={selectedVehicle}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setCheckoutProduct(null);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        singleProduct={checkoutProduct}
        onOrderCompleted={() => {
          setCart([]);
        }}
      />

    </div>
  );
}
