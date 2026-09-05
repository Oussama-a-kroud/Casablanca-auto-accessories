import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('السلام عليكم كازابلانكا أوتو أكسسوار، أريد الاستفسار عن الطابيات.')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 font-bold text-xs group transition-all duration-300 hover:scale-105"
      aria-label="تواصل معنا عبر الواتساب"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-600 shrink-0" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-1">
        اطلب عبر الواتساب
      </span>
    </a>
  );
}
