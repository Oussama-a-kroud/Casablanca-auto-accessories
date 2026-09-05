import React from 'react';
import { Sparkles, Droplets, Wrench, Truck } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="w-5 h-5 text-red-600" />,
      title: 'ماسح ليزر 7D على المقاس',
      description: 'مصمم خصيصاً بالملليمتر ليتطابق تماماً مع أرضية سيارتك الأصلية.'
    },
    {
      icon: <Droplets className="w-5 h-5 text-red-600" />,
      title: 'مقاوم للماء وبدون رائحة',
      description: 'مصنوع من خامة TPE صديقة للبيئة بدون أي رائحة. يحمي من الماء والأتربة والقهوة.'
    },
    {
      icon: <Wrench className="w-5 h-5 text-red-600" />,
      title: 'تثبيت محكم وأصلي',
      description: 'مزود بأزرار التثبيت الأصلية لمنع أي انزلاق تحت دواسة السياقة.'
    },
    {
      icon: <Truck className="w-5 h-5 text-red-600" />,
      title: 'توصيل سريع والدفع عند الاستلام',
      description: 'التوصيل مجاني لجميع المدن المغربية. لا تدفع إلا بعد استلام وتفحص المنتج.'
    }
  ];

  return (
    <div className="py-12 bg-white border-y border-slate-200 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            لماذا تختار Casablanca Auto Accessories؟
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            جودة مضمونة ومجربة لتحمل أصعب الظروف والاستعمال اليومي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-2 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {feat.icon}
              </div>
              <h3 className="text-xs font-bold text-slate-900">{feat.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
