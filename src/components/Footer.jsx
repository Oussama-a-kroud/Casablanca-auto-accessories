import React from 'react';
import { Phone, MapPin, MessageCircle, ShieldCheck, Code2 } from 'lucide-react';
import { WHATSAPP_NUMBER, DISPLAY_PHONE } from '../data/products';
import { getAssetUrl } from '../utils/image';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl('/images/logo.png')}
                alt="Casablanca Auto Accessories"
                className="h-12 w-auto bg-white p-1 rounded-lg"
              />
              <div>
                <span className="text-base font-extrabold text-white block leading-tight font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
                  Casablanca Auto <span className="text-red-500">Accessories</span>
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
                  Accessoires Auto Service
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              المتجر رقم 1 بالدار البيضاء والمغرب لطابيات السيارات 7D المصممة على المقاس وأفرشة الصندوق المقاومة للماء.
            </p>
            <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <ShieldCheck className="w-4 h-4 text-red-500" /> مطابقة 100% لنوع سيارتك
            </div>
          </div>

          {/* Nav */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">الأقسام</h4>
            <ul className="space-y-1 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('habitacle')} className="hover:text-white">
                  طابيات 7D على المقاس
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('coffre')} className="hover:text-white">
                  فرش الصندوق (Bac de Coffre)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('pack')} className="hover:text-white">
                  باك كامل 7D
                </button>
              </li>
            </ul>
          </div>

          {/* Models */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">أنواع السيارات بالمغرب</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              هيونداي توسان / أكسنت • داسيا دوستر / لوغان • رينو كليو / ميغان • فولكسفاغن كادي / جولف • بيجو 208 / 3008
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">التواصل والطلبات</h4>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 font-semibold hover:text-emerald-300"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400 text-slate-900" />
              <span>الواتساب المباشر ({DISPLAY_PHONE})</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{DISPLAY_PHONE}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>الدار البيضاء وتوصيل سريع لكافة المدن</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar with Pro Developer Credit */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Casablanca Auto Accessories - جميع الحقوق محفوظة.</p>
          
          <div className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-700/80 transition-all shadow-xs">
            <Code2 className="w-3.5 h-3.5 text-red-400" />
            <span>تصميم وتطوير:</span>
            <span className="font-extrabold text-white tracking-wide font-['Plus_Jakarta_Sans',sans-serif]" dir="ltr">
              Oussama Akroud
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
