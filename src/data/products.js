export const BRANDS = [
  { id: 'hyundai', name: 'هيونداي (Hyundai)', logo: '🚘' },
  { id: 'renault', name: 'رينو (Renault)', logo: '🚙' },
  { id: 'dacia', name: 'داسيا (Dacia)', logo: '🚗' },
  { id: 'volkswagen', name: 'فولكسفاغن (Volkswagen)', logo: '🚘' },
  { id: 'peugeot', name: 'بيجو (Peugeot)', logo: '🏎️' },
  { id: 'mercedes', name: 'مرسيدس (Mercedes-Benz)', logo: '⭐' },
  { id: 'bmw', name: 'بي إم دبليو (BMW)', logo: '🔵' },
  { id: 'audi', name: 'أودي (Audi)', logo: '💍' },
  { id: 'toyota', name: 'تويوتا (Toyota)', logo: '🚙' },
  { id: 'kia', name: 'كيا (Kia)', logo: '🚘' },
  { id: 'citroen', name: 'سيتروين (Citroën)', logo: '🚗' },
  { id: 'fiat', name: 'فيات (Fiat)', logo: '🚗' }
];

export const CAR_MODELS = {
  hyundai: ['توسان Tucson (2023+)', 'توسان Tucson 3', 'أكسنت Accent', 'i10', 'i20', 'كريتا Creta', 'سانتافي Santa Fe'],
  renault: ['كليو Clio 4', 'كليو Clio 5', 'ميغان Megane 4', 'كادجار Kadjar', 'أوسترال Austral', 'كابتور Captur 2', 'إكسبريس Express'],
  dacia: ['دوستر Duster 1/2', 'دوستر Duster 3 (2024+)', 'لوغان Logan (2012-2020)', 'لوغان Logan 3 (2021+)', 'سانديرو ستيبواي Sandero', 'جوجر Jogger'],
  volkswagen: ['كادي Caddy', 'جولف Golf 7 / 7.5', 'جولف Golf 8', 'بولو Polo 6', 'تيجوان Tiguan 2', 'طوارق Touareg', 'تي روك T-Roc', 'باسات Passat B8'],
  peugeot: ['208 II', '308 III', '2008 II', '3008 II', '5008 II', 'بارتنر Partner / Rifter'],
  mercedes: ['كلاس C (W205/W206)', 'كلاس E (W213)', 'كلاس A (W177)', 'GLC', 'GLE', 'CLA'],
  bmw: ['الفئة 3 (G20/F30)', 'الفئة 5 (G30)', 'الفئة 1 (F40)', 'X1', 'X3', 'X5'],
  audi: ['A3 Sportback', 'A4', 'A6', 'Q3', 'Q5', 'Q8'],
  toyota: ['ياريس Yaris', 'كورولا Corolla', 'RAV4', 'هيلوكس Hilux', 'لاند كروزر Land Cruiser'],
  kia: ['سبورتاج Sportage 5 (2022+)', 'سبورتاج Sportage 4', 'بيكانتو Picanto', 'سيلتوس Seltos'],
  citroen: ['C3 III', 'C4 III', 'C5 Aircross', 'بيرلينجو Berlingo'],
  fiat: ['500 / 500X', 'تيبو Tipo', 'دوبلو Doblo', 'فيورينو Fiorino']
};

export const PRODUCTS = [
  {
    id: 'hyundai-accent-tucson-7d',
    name: 'طابيات هيونداي أكسنت / توسان 7D على المقاس (Hyundai Accent / Tucson)',
    category: 'habitacle',
    subtitle: 'طابيات سيارة 7D عالية الكثافة مصممة بتقنية الليزر مع أزرار التثبيت الأصلية',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 185,
    badge: 'طابيات 7D على المقاس 🏆',
    image: '/images/tucson_470dh.png',
    secondaryImages: [
      '/images/tapis_3d_real.jpg',
      '/images/tapis_7d_list.png'
    ],
    features: [
      'تصميم 7D بالليزر مخصص تماماً لسيارات هيونداي أكسنت وتوسان 2023+',
      'حواف مرتفعة وحماية كاملة للمقاعد الأمامية والخلفية من الماء والأتربة',
      'طبقة مضادة للانزلاق وسهلة التنظيف بالماء في 10 ثوانٍ',
      'مادة TPE/EVA صديقة للبيئة وبدون أي رائحة'
    ],
    colors: [
      { id: 'black', name: 'أسود كربون 7D', hex: '#18181b' },
      { id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' },
      { id: 'beige', name: 'بيج فاخر', hex: '#d97706' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'renault-dacia-duster-7d',
    name: 'طابيات رينو وداسيا دوستر 7D أوريجينال (Renault & Dacia Duster)',
    category: 'habitacle',
    subtitle: 'طابيات 7D أوريجينال على المقاس لسيارات رينو كليو، ميغان، إكسبريس وداسيا دوستر ولوغان',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 210,
    badge: 'طابيات 7D أوريجينال 🎱',
    image: '/images/renault_460dh.png',
    secondaryImages: [
      '/images/tapis_3d_real.jpg',
      '/images/tapis_7d_list.png'
    ],
    features: [
      'مطابقة 100% لمقاسات سيارات رينو وداسيا دوستر',
      'حماية الشفرة والموكيت الأصلي للسيارة',
      'تثبيت محكم ومقاوم للانزلاق تحت الدواسات',
      'مقاوم للمياه، الزيوت والأوساخ'
    ],
    colors: [
      { id: 'black-mat', name: 'أسود مات أوريجينال', hex: '#0f172a' },
      { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'vw-caddy-golf-7d-super',
    name: 'طابيات فولكسفاغن كادي وجولف 7D سوبر (VW Caddy / Golf)',
    category: 'habitacle',
    subtitle: 'طابيات 7D سوبر لحماية قصوى لسيارات فولكسفاغن كادي، جولف 7/8، بولو وتيجوان',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 142,
    badge: 'طابيات 7D سوبر ⚡',
    image: '/images/caddy_470dh.png',
    secondaryImages: [
      '/images/tapis_3d_real.jpg',
      '/images/tapis_7d_list.png'
    ],
    features: [
      'لمسة 7D سوبر مقواة للسيارات التجارية والسيارات العائلية',
      'مشابك تثبيت جاهزة للتركيب المباشر',
      'سمك ممتاز لراحة القدمين وعزل الأصوات',
      'مقاوم للماء 100% وسريع الجفاف'
    ],
    colors: [
      { id: 'black', name: 'أسود أنثراسيت سوبر', hex: '#18181b' },
      { id: 'brown', name: 'بني جلد فاخر', hex: '#78350f' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'bac-de-coffre-3d-sur-mesure',
    name: 'فرش الصندوق الخلفي 7D المقاوم للماء (Bac de Coffre)',
    category: 'coffre',
    subtitle: 'حماية كاملة لصندوق السيارة من السوائل، الأمتعة والأوساخ',
    price: 350,
    originalPrice: 450,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'فرش الصندوق 🧳',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    secondaryImages: [
      '/images/tapis_3d_real.jpg'
    ],
    features: [
      'مفصل خصيصاً 7D حسب المقاس الدقيق لصندوق سيارتك',
      'سطح مضاد للانزلاق يمنع تحرك الأمتعة أثناء السياقة',
      'مقاوم للماء، الزيوت، الأتربة والغبار',
      'حواف مرتفعة تمنع تسرب السوائل للموكيت الاصلي'
    ],
    colors: [
      { id: 'black', name: 'أسود مات مضاد للانزلاق', hex: '#0f172a' }
    ],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'pack-integral-7d-luxe',
    name: 'باك كامل 7D فاخر (طابيات السيارة + فرش الصندوق)',
    category: 'pack',
    subtitle: 'الحماية الشاملة 360 درجة لداخلية سيارتك بالكامل',
    price: 750,
    originalPrice: 990,
    rating: 5.0,
    reviewsCount: 230,
    badge: 'عرض باك كامل 7D 🔥',
    image: '/images/tapis_3d_real.jpg',
    secondaryImages: [
      '/images/tucson_470dh.png',
      '/images/renault_460dh.png'
    ],
    features: [
      'يشمل 4 طابيات داخلية 7D على المقاس + 1 فرش صندوق السيارة المقاوم للماء',
      'وفر أكثر من 120 درهم عند طلب الباك الكامل',
      'جودة فاخرة مع هيكل متين من 7 طبقات',
      'حماية كاملة للسيارة من التآكل والأوساخ'
    ],
    colors: [
      { id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' },
      { id: 'black', name: 'أسود كربون فاخر', hex: '#18181b' }
    ],
    inStock: true,
    fastDelivery: true
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'كريم بناني',
    city: 'الدار البيضاء (كازابلانكا)',
    car: 'هيونداي توسان 2023',
    rating: 5,
    comment: 'خدت طابيات 7D على المقاس لتوسان بـ 470 درهم. جاو لاصقين 100% ومافيها حتى ريحة! التوصيل فـ 24 ساعة فـ كازا. شكراً بزاف!',
    date: 'منذ يومين',
    verified: true
  },
  {
    id: 2,
    name: 'يوسف العمراني',
    city: 'الرباط',
    car: 'داسيا دوستر',
    rating: 5,
    comment: 'طابيات 7D أوريجينال لدوستر بـ 460 درهم واعرين بزاف. الجودة جيدة وساهلين فـ التنظيف بالماء.',
    date: 'منذ 5 أيام',
    verified: true
  },
  {
    id: 3,
    name: 'مهدي الشرايبي',
    city: 'مراكش',
    car: 'فولكسفاغن كادي',
    rating: 5,
    comment: 'طابيات 7D سوبر للكادي ديالي. كيحميو السيارة 100%. التعامل وسرعة الإجابة فـ الواتساب ممتازة.',
    date: 'منذ أسبوع',
    verified: true
  }
];

export const FAQ_ITEMS = [
  {
    question: 'ما هو الفرق بين طابيات 3D وطابيات 7D على المقاس؟',
    answer: 'طابيات 7D توفر حماية مقواة مع حواف أكثر ارتفاعاً، وتصميم فاخر بخياطة أنيقة وهيكل متعدد الطبقات المقاوم للماء والذي يغطي موكيت السيارة بالكامل وبدقة متناهية.'
  },
  {
    question: 'كيف أتأكد من أن الطابيات متوافقة 100% مع سيارتي؟',
    answer: 'طابياتنا 7D (هيونداي أكسنت/توسان، رينو/داسيا دوستر، فولكسفاغن كادي/جولف، إلخ) مصممة بتقنية الليزر لكل ماركة وموديل. عند طلبك، تختار نوع سيارتك وسنتأكد من إرسال الموديل المطابق تماماً.'
  },
  {
    question: 'ما هي مدة التوصيل بالمغرب؟',
    answer: 'التوصيل سريع لكافة المدن المغربية (الدار البيضاء، الرباط، مراكش، طنجة، فاس، أكادير، وجدة...) والدفع يكون عند الاستلام خلال 24 إلى 48 ساعة.'
  },
  {
    question: 'كيف يتم دفع الثمن؟',
    answer: 'الدفع يكون 100% عند الاستلام (Cash on Delivery). تفحص طلبك أولاً وتتأكد منه ثم تقوم بالدفع للموزع.'
  }
];

export const WHATSAPP_NUMBER = '212610320613';
export const DISPLAY_PHONE = '+212 610-320613';
