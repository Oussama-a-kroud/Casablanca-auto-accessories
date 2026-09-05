import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <div className="py-12 bg-slate-50 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            آراء زبنائنا الكرام بالمغرب
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            سائقون وعائلات جربوا طابياتنا 7D وعبروا عن رضاهم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    {t.name}
                    {t.verified && (
                      <span className="text-emerald-600 text-[10px] flex items-center gap-0.5 font-semibold">
                        <CheckCircle className="w-3 h-3 text-emerald-600" /> زبون مؤكد
                      </span>
                    )}
                  </h4>
                  <p className="text-[11px] text-slate-500">{t.car} • {t.city}</p>
                </div>
                <span className="text-[10px] text-slate-400">{t.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
