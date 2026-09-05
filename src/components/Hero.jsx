import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import VehicleSelector from './VehicleSelector';
import { getAssetUrl } from '../utils/image';

export default function Hero({ onFilterVehicle }) {
  return (
    <div className="bg-white pt-8 pb-12 lg:py-14 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Right Text & Filter (Arabic RTL) */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>الرقم 1 بالمغرب • طابيات 7D و 3D مصممة على المقاس</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              طابيات سيارات 7D على المقاس وفرش الصندوق الفاخر
            </h1>

            {/* Description */}
            <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
              حماية كاملة لداخلية سيارتك من الأوساخ والماء والأتربة. تصنيع وتفصيل دقيق بالليزر لجميع أنواع السيارات: هيونداي، داسيا، رينو، فولكسفاغن، بيجو، مرسيدس، وبي إم دبليو.
            </p>

            {/* Feature Bullets */}
            <div className="flex flex-wrap items-center justify-start gap-3 text-xs text-slate-700 font-semibold pt-1">
              <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-600" /> مطابقة 100% لنوع سيارتك
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-600" /> مقاوم للماء وبدون رائحة
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-red-600" /> الدفع عند الاستلام
              </span>
            </div>

            {/* Vehicle Selector Widget */}
            <div className="pt-2">
              <VehicleSelector onFilterVehicle={onFilterVehicle} />
            </div>

          </div>

          {/* Left Product Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-2.5 shadow-md">
              
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-slate-200">
                <img
                  src={getAssetUrl('/images/tapis_3d_real.jpg')}
                  alt="طابيات 7D على المقاس"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute top-3 right-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow">
                  صورة حقيقية للمنتج
                </div>

                <div className="absolute bottom-3 right-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-200 shadow-md text-right">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-slate-900">طابيات 7D فاخرة على المقاس</span>
                    <span className="font-black text-red-600 text-sm">470 درهم</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">طبقة مضادة للانزلاق مع أزرار التثبيت الأصلية</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
