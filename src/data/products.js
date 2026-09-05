export const BRANDS = [
  { id: 'dacia', name: 'داسيا (Dacia)', logo: '🚗' },
  { id: 'renault', name: 'رينو (Renault)', logo: '🚙' },
  { id: 'peugeot', name: 'بيجو (Peugeot)', logo: '🏎️' },
  { id: 'volkswagen', name: 'فولكسفاغن (Volkswagen)', logo: '🚘' },
  { id: 'hyundai', name: 'هيونداي (Hyundai)', logo: '🚘' },
  { id: 'mercedes', name: 'مرسيدس (Mercedes-Benz)', logo: '⭐' },
  { id: 'nissan', name: 'نيسان (Nissan)', logo: '🚙' },
  { id: 'toyota', name: 'تويوتا (Toyota)', logo: '🚙' },
  { id: 'kia', name: 'كيا (Kia)', logo: '🚘' },
  { id: 'audi', name: 'أودي (Audi)', logo: '💍' },
  { id: 'skoda', name: 'شكودا (Škoda)', logo: '🚗' },
  { id: 'seat', name: 'سيات (SEAT)', logo: '🏎️' },
  { id: 'ford', name: 'فورد (Ford)', logo: '🚙' },
  { id: 'citroen', name: 'سيتروين (Citroën)', logo: '🚗' },
  { id: 'honda', name: 'هوندا (Honda)', logo: '🚘' }
];

export const CAR_MODELS = {
  dacia: [
    'دوكر / إكسبريس (Dokker / Express)',
    'دوستر 1 (Duster 2010 - 2017)',
    'دوستر 2 (Duster 2018 - 2024)',
    'دوستر 3 (Duster 2025 - 2026)'
  ],
  renault: [
    'كليو 4 (Clio 4)',
    'كليو 5 (Clio 5)',
    'إكسبريس (Express)'
  ],
  peugeot: [
    '301 (2014 - 2021)',
    '301 (2020+)',
    '208 (2022+)',
    '308 (2020+)',
    '3008 (2019+)',
    'بارتنر تيبي (Partner Tepee 2010 - 2020)',
    'ريفتر (Rifter 2020 - 2024)',
    'ريفتر (Rifter 2024 - 2026)'
  ],
  volkswagen: [
    'جولف 4 (Golf 4)',
    'جولف 7 (Golf 7)',
    'كادي (Caddy 2023+)',
    'تيجوان (Tiguan 2015 - 2023)'
  ],
  hyundai: [
    'أكسنت (Accent 2012 - 2018)',
    'توسان / أكسنت (Tucson / Accent 2023+)',
    'سانتافي (Santa Fe 2013 - 2021)',
    'سانتافي (Santa Fe 2020 - 2023)'
  ],
  mercedes: [
    'كلاس C (Mercedes W203)',
    'كلاس C (Mercedes W204 / W205 / W206)'
  ],
  nissan: [
    'قشقاي (Qashqai 2006 - 2014)'
  ],
  toyota: [
    'كورولا كروس (Corolla Cross 2021 - 2022)',
    'RAV4 (2020 - 2024)'
  ],
  kia: [
    'سبورتاج (Sportage 2023+)'
  ],
  audi: [
    'A3 (Audi A3 2021+)'
  ],
  skoda: [
    'أوكتافيا (Octavia 2015+)'
  ],
  seat: [
    'أتيبيكا (Ateca 2018+)'
  ],
  ford: [
    'فيستا (Fiesta 2009 - 2016)'
  ],
  citroen: [
    'C4 (Citroën C4 2020+)'
  ],
  honda: [
    'CR-V (Honda CR-V 2012 - 2016)'
  ]
};

export const PRODUCTS = [
  // --- DACIA ---
  {
    id: 'dacia-dokker-express-7d',
    name: 'طابيات داسيا دوكر / إكسبريس 7D (Dacia Dokker / Express)',
    category: 'habitacle',
    subtitle: 'طابيات 7D عنائية وخاصة بسيارات داسيا دوكر وإكسبريس',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'داسيا Dokker 🚗',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لمقاسات داسيا دوكر وإكسبريس', 'حماية كاملة للموكيت والدواسات', 'مقاوم للمياه وسهل الغسل'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'dacia-duster-1-7d',
    name: 'طابيات داسيا دوستر 1 7D (Dacia Duster 2010 - 2017)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة داسيا دوستر الجيل الأول',
    price: 460,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 195,
    badge: 'داسيا Duster 1 🚗',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تطابق 100% مع أرضية دوستر 2010-2017', 'أزرار تثبيت لمنع الانزلاق', 'حواف مرتفعة لحماية الموكيت'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'dacia-duster-2-7d',
    name: 'طابيات داسيا دوستر 2 7D (Dacia Duster 2018 - 2024)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة داسيا دوستر الجيل الثاني',
    price: 460,
    originalPrice: 580,
    rating: 5.0,
    reviewsCount: 230,
    badge: 'داسيا Duster 2 🔥',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لموديل دوستر 2018-2024', 'مادة TPE/EVA الفاخرة بدون أي رائحة', 'حماية قصوى ضد السوائل وغبار'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'dacia-duster-3-7d',
    name: 'طابيات داسيا دوستر 3 الجديد 7D (Dacia Duster 2025 - 2026)',
    category: 'habitacle',
    subtitle: 'طابيات 7D أحدث موديل لسيارة داسيا دوستر 3 الجديدة',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 88,
    badge: 'داسيا Duster 3 (جديد) ✨',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مقاس دقيق حصري لـ Duster 3 2025/2026', 'تصميم عصري رياضي ثلاثي الطبقات', 'تثبيت محكم للغاية'],
    colors: [{ id: 'black', name: 'أسود سبور', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- RENAULT ---
  {
    id: 'renault-express-7d',
    name: 'طابيات رينو إكسبريس 7D (Renault Express)',
    category: 'habitacle',
    subtitle: 'طابيات 7D مخصصة لسيارة رينو إكسبريس التجارية والعائلية',
    price: 460,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 112,
    badge: 'Renault Express 🚙',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['هيكل متين مخصص للعمل الشاق والرحلات', 'سهلة التنظيف والتجفيف السريع', 'أزرار التثبيت الأصلية'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#0f172a' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'renault-clio-4-7d',
    name: 'طابيات رينو كليو 4 7D (Renault Clio 4)',
    category: 'habitacle',
    subtitle: 'طابيات 7D أوريجينال على المقاس لسيارة رينو كليو 4',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 215,
    badge: 'Clio 4 أوريجينال 🎱',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تطابق 100% مع مقاس كليو 4', 'حماية حواف الأبواب والموكيت الأصلي', 'مقاوم للانزلاق'],
    colors: [{ id: 'black', name: 'أسود أوريجينال', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'renault-clio-5-7d',
    name: 'طابيات رينو كليو 5 7D (Renault Clio 5)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة رينو كليو 5',
    price: 460,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 180,
    badge: 'Clio 5 فاخرة 🌟',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تصميم ليزر دقيق لكليو 5', 'مظهر رياضي أنيق بلمسة 7D', 'سهلة التنظيف'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#0f172a' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- PEUGEOT ---
  {
    id: 'peugeot-208-2022-7d',
    name: 'طابيات بيجو 208 7D (Peugeot 208 II 2022+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة بيجو 208 الجيل الجديد',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 145,
    badge: 'Peugeot 208 🦁',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['مفصلة بالليزر لمقاس بيجو 208 2022+', 'أزرار تثبيت أصلية', 'حماية كامة للأرضية والموكيت'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' }, { id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-301-2014-2021-7d',
    name: 'طابيات بيجو 301 7D (Peugeot 301 2014 - 2021)',
    category: 'habitacle',
    subtitle: 'طابيات 7D مخصصة لسيارة بيجو 301 موديلات 2014 إلى 2021',
    price: 460,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 160,
    badge: 'Peugeot 301 🏎️',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['تطابق دقيق لمقاسات بيجو 301', 'مقاوم للماء والأتربة', 'سريع الجفاف'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-301-2020-7d',
    name: 'طابيات بيجو 301 7D (Peugeot 301 2020+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D لسيارة بيجو 301 موديلات 2020 وما فوق',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 130,
    badge: 'Peugeot 301 (2020+) 🦁',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['تصميم ليزر مخصص للموديل الحديث', 'تثبيت ممتاز', 'خامات عالية المتانة'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-308-2020-7d',
    name: 'طابيات بيجو 308 7D (Peugeot 308 2020+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D سبور لسيارة بيجو 308 الجيل الجديد',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 175,
    badge: 'Peugeot 308 ⚡',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['تصميم سبور راقي 7D', 'أقصى درجة حماية', 'سهل التنظيف في 10 ثوانٍ'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' }, { id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-3008-2019-7d',
    name: 'طابيات بيجو 3008 7D (Peugeot 3008 2019+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة على المقاس لسيارة بيجو 3008 SUV',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 210,
    badge: 'Peugeot 3008 SUV 🦁',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['مطابقة 100% لسيارة بيجو 3008 SUV', 'حماية كاملة للمقاعد الخلفية والأمامية', 'مقاوم للماء والشحومات'],
    colors: [{ id: 'black', name: 'أسود كربون فاخر', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-partner-tepee-7d',
    name: 'طابيات بيجو بارتنر تيبي 7D (Peugeot Partner Tepee 2010 - 2020)',
    category: 'habitacle',
    subtitle: 'طابيات 7D متينة لسيارات بيجو بارتنر تيبي',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 155,
    badge: 'Partner Tepee 🚙',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['تصميم مقوى ومخصص للعمل العائلي والتجاري', 'سهولة التركيب', 'تثبيت محكم'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-rifter-2020-2024-7d',
    name: 'طابيات بيجو ريفتر 7D (Peugeot Rifter 2020 - 2024)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة بيجو ريفتر 2020-2024',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 140,
    badge: 'Peugeot Rifter 🦁',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['مقاس ليزر دقيق جداً لـ Rifter', 'أزرار التثبيت الأصلية', 'مقاوم للمياه والماء المالح'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'peugeot-rifter-2024-2026-7d',
    name: 'طابيات بيجو ريفتر 7D الجديد (Peugeot Rifter 2024 - 2026)',
    category: 'habitacle',
    subtitle: 'طابيات 7D أحدث إكسترا لسيارة بيجو ريفتر 2024-2026',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 95,
    badge: 'Rifter 2024/2026 (جديد) ✨',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['قصة حصرياً لموديلات ريفتر 2024-2026', 'لمسة سبور فاخرة', 'حماية 100%'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- VOLKSWAGEN ---
  {
    id: 'vw-golf-4-7d',
    name: 'طابيات فولكسفاغن جولف 4 7D (VW Golf 4)',
    category: 'habitacle',
    subtitle: 'طابيات 7D مخصصة لسيارة فولكسفاغن جولف 4',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 185,
    badge: 'VW Golf 4 🚘',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تطابق ممتاز مع أرضية Golf 4', 'تثبيت محكم ومظهر تجديد رائع لداخلية السيارة', 'مقاوم للانزلاق'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'vw-golf-7-7d',
    name: 'طابيات فولكسفاغن جولف 7 7D (VW Golf 7)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة ومصممة بالليزر لسيارات فولكسفاغن جولف 7 / 7.5',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 240,
    badge: 'VW Golf 7 سوبر ⚡',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لجولف 7', 'أزرار التثبيت الأصلية للـ VW', 'عزل ممتاز للأصوات'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء GTE/GTI', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'vw-caddy-2023-7d',
    name: 'طابيات فولكسفاغن كادي 7D (VW Caddy 2023+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D سوبر مقواة لسيارة فولكسفاغن كادي الجيل الجديد 2023+',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 190,
    badge: 'VW Caddy 2023 🏆',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مخصصة كلياً لمقاسات Caddy 2023+', 'تحمل الأتربة الثقيلة والأوساخ', 'مقاوم للماء 100%'],
    colors: [{ id: 'black', name: 'أسود سوبر', hex: '#18181b' }, { id: 'brown', name: 'بني جلد فاخر', hex: '#78350f' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'vw-tiguan-2015-2023-7d',
    name: 'طابيات فولكسفاغن تيجوان 7D (VW Tiguan 2015 - 2023)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارات فولكسفاغن تيجوان SUV',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 165,
    badge: 'VW Tiguan SUV 🚘',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مقاس ليزر 100% لـ Tiguan', 'حماية للمقاعد الأمامية والخلفية', 'مظهر أنيق ومقاوم للتآكل'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- HYUNDAI ---
  {
    id: 'hyundai-accent-2012-2018-7d',
    name: 'طابيات هيونداي أكسنت 7D (Hyundai Accent 2012 - 2018)',
    category: 'habitacle',
    subtitle: 'طابيات 7D مصممة على المقاس لسيارة هيونداي أكسنت 2012-2018',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 178,
    badge: 'Hyundai Accent 🚘',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بدقة لـ Accent 2012-2018', 'تثبيت قوي مع أزرار الأرضية', 'سهلة الغسل بالماء'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'hyundai-tucson-accent-2023-7d',
    name: 'طابيات هيونداي توسان / أكسنت 7D (Hyundai Tucson / Accent 2023+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D ليزر فاخرة لسيارات هيونداي توسان وأكسنت 2023+',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 220,
    badge: 'Tucson 2023+ الأكثر مبيعاً 🏆',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تصميم ليزر دقيق جداً لـ Tucson 2023+', 'طبقة مضادة للانزلاق ومقاومة للمياه', 'مواد صديقة للبيئة بدون رائحة'],
    colors: [{ id: 'black', name: 'أسود كربون 7D', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' }, { id: 'beige', name: 'بيج فاخر', hex: '#d97706' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'hyundai-santafe-2013-2021-7d',
    name: 'طابيات هيونداي سانتافي 7D (Hyundai Santa Fe 2013 - 2021)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارات هيونداي سانتافي الجيل السابق',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 125,
    badge: 'Santa Fe SUV 🚙',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['حماية عائلية شاملة لموكيت Santa Fe', 'حواف مرتفعة', 'مقاوم للماء تماماً'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'hyundai-santafe-2020-2023-7d',
    name: 'طابيات هيونداي سانتافي 7D (Hyundai Santa Fe 2020 - 2023)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارات هيونداي سانتافي الحديثة',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Santa Fe 2020+ 🚘',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لموديل Santa Fe الحديث', 'تثبيت محكم وخامة فاخرة', 'سهل التنظيف'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- MERCEDES ---
  {
    id: 'mercedes-w203-7d',
    name: 'طابيات مرسيدس كلاس C W203 7D (Mercedes C-Class W203)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة مرسيدس كلاس C W203',
    price: 480,
    originalPrice: 620,
    rating: 4.9,
    reviewsCount: 135,
    badge: 'Mercedes W203 ⭐',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tucson_470dh.png'],
    features: ['تطابق ممتاز مع W203', 'لمسة جلدية VIP', 'عزل الأصوات والحرارة'],
    colors: [{ id: 'black', name: 'أسود VIP', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'mercedes-w204-w205-w206-7d',
    name: 'طابيات مرسيدس كلاس C W204/W205/W206 7D (Mercedes C-Class W204/W205/W206)',
    category: 'habitacle',
    subtitle: 'طابيات VIP 7D مصممة بتقنية الليزر لموديلات مرسيدس C-Class الحديثة',
    price: 480,
    originalPrice: 620,
    rating: 5.0,
    reviewsCount: 190,
    badge: 'Mercedes VIP ⭐',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tucson_470dh.png'],
    features: ['مفصلة بالليزر لموديلات W204, W205 & W206', 'أزرار التثبيت الأصلية', 'فخامة وسهولة في التنظيف'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت VIP', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء AMG', hex: '#991b1b' }, { id: 'brown', name: 'بني جلد ملكي', hex: '#78350f' }],
    inStock: true,
    fastDelivery: true
  },

  // --- NISSAN & TOYOTA ---
  {
    id: 'nissan-qashqai-2006-2014-7d',
    name: 'طابيات نيسان قشقاي 7D (Nissan Qashqai 2006 - 2014)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة نيسان قشقاي الجيل الأول',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 140,
    badge: 'Nissan Qashqai 🚙',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/renault_460dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مقاس دقيق لموديل قشقاي 2006-2014', 'مقاوم للماء والأتربة', 'تثبيت محكم'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#0f172a' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'toyota-corolla-cross-7d',
    name: 'طابيات تويوتا كورولا كروس 7D (Toyota Corolla Cross 2021 - 2022)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة تويوتا كورولا كروس',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 115,
    badge: 'Corolla Cross 🚙',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لـ Corolla Cross', 'مادة حماية ثلاثية الأبعاد 7D', 'سريعة الجفاف'],
    colors: [{ id: 'black', name: 'أسود أوريجينال', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'toyota-rav4-2020-2024-7d',
    name: 'طابيات تويوتا RAV4 7D (Toyota RAV4 2020 - 2024)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فائقة الجودة لسيارة تويوتا RAV4 SUV',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 165,
    badge: 'Toyota RAV4 🏆',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تطابق 100% مع RAV4 2020-2024', 'مقاوم للماء والزيوت', 'خامة متينة جداً'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- SKODA, AUDI, SEAT, KIA, FORD, CITROEN, HONDA ---
  {
    id: 'skoda-octavia-2015-7d',
    name: 'طابيات شكودا أوكتافيا 7D (Škoda Octavia 2015+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة شكودا أوكتافيا',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 150,
    badge: 'Škoda Octavia 🚗',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لموديل Octavia 2015+', 'تثبيت ممتاز مع أزرار الفولكسفاغن/شكودا', 'مظهر أنيق'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'audi-a3-2021-7d',
    name: 'طابيات أودي A3 7D (Audi A3 2021+)',
    category: 'habitacle',
    subtitle: 'طابيات VIP 7D لسيارات أودي A3 الحديثة',
    price: 480,
    originalPrice: 620,
    rating: 5.0,
    reviewsCount: 135,
    badge: 'Audi A3 VIP 💍',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['تصميم VIP خصيصاً لـ Audi A3 2021+', 'جلد فاخر مقوى بخياطة دقيقة', 'حماية عزل عالية'],
    colors: [{ id: 'black', name: 'أسود أنثراسيت', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء S-Line', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'seat-ateca-2018-7d',
    name: 'طابيات سيات أتيبيكا 7D (SEAT Ateca 2018+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة سيات أتيبيكا SUV',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 120,
    badge: 'SEAT Ateca 🏎️',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/caddy_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مطابقة 100% لـ SEAT Ateca', 'تثبيت محكم بدون انزلاق', 'سهل التنظيف'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'kia-sportage-2023-7d',
    name: 'طابيات كيا سبورتاج 7D (Kia Sportage 2023+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فاخرة لسيارة كيا سبورتاج الجيل الجديد',
    price: 470,
    originalPrice: 600,
    rating: 5.0,
    reviewsCount: 185,
    badge: 'Kia Sportage 2023+ 🔥',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة بالليزر لموديل Sportage 2023+', 'أزرار التثبيت الأصلية', 'مقاوم للماء والأوساخ'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }, { id: 'black-red', name: 'أسود بخياطة حمراء GT-Line', hex: '#991b1b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'ford-fiesta-2009-2016-7d',
    name: 'طابيات فورد فيستا 7D (Ford Fiesta 2009 - 2016)',
    category: 'habitacle',
    subtitle: 'طابيات 7D مخصصة لسيارة فورد فيستا 2009-2016',
    price: 460,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 130,
    badge: 'Ford Fiesta 🚙',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['تطابق دقيق مع Ford Fiesta', 'حماية حواف الأبواب والموكيت', 'سريع الجفاف'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#0f172a' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'citroen-c4-2020-7d',
    name: 'طابيات سيتروين C4 7D (Citroën C4 2020+)',
    category: 'habitacle',
    subtitle: 'طابيات 7D على المقاس لسيارة سيتروين C4 الجديدة',
    price: 470,
    originalPrice: 600,
    rating: 4.9,
    reviewsCount: 110,
    badge: 'Citroën C4 🚘',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg', '/images/tapis_7d_list.png'],
    features: ['مقاس ليزر 100% لـ Citroën C4 2020+', 'مظهر عصري أنيق', 'مقاوم للماء والأتربة'],
    colors: [{ id: 'black', name: 'أسود مات', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'honda-crv-2012-2016-7d',
    name: 'طابيات هوندا CR-V 7D (Honda CR-V 2012 - 2016)',
    category: 'habitacle',
    subtitle: 'طابيات 7D فائقة الجودة لسيارة هوندا CR-V',
    price: 470,
    originalPrice: 600,
    rating: 4.8,
    reviewsCount: 95,
    badge: 'Honda CR-V 🚘',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tucson_470dh.png', '/images/tapis_3d_real.jpg'],
    features: ['مفصلة لسيارة Honda CR-V 2012-2016', 'تثبيت ممتاز بحواف مرتفعة', 'مقاوم للشحوم والماء'],
    colors: [{ id: 'black', name: 'أسود كربون', hex: '#18181b' }],
    inStock: true,
    fastDelivery: true
  },

  // --- TRUNK MATS & COMPLETE PACKS ---
  {
    id: 'bac-de-coffre-3d-sur-mesure',
    name: 'فرش الصندوق الخلفي 7D المقاوم للماء (Bac de Coffre)',
    category: 'coffre',
    subtitle: 'حماية كاملة لصندوق السيارة من السوائل، الأمتعة والأوساخ لجميع السيارات',
    price: 350,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 180,
    badge: 'فرش الصندوق 🧳',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    secondaryImages: ['/images/tapis_3d_real.jpg'],
    features: ['مفصل خصيصاً 7D حسب المقاس الدقيق لصندوق سيارتك (دوستر، كليو، توسان، كادي، بيجو، إلخ)', 'سطح مضاد للانزلاق يمنع تحرك الأمتعة أثناء السياقة', 'مقاوم للماء، الزيوت، الأتربة والغبار', 'حواف مرتفعة تمنع تسرب السوائل للموكيت الاصلي'],
    colors: [{ id: 'black', name: 'أسود مات مضاد للانزلاق', hex: '#0f172a' }],
    inStock: true,
    fastDelivery: true
  },
  {
    id: 'pack-integral-7d-luxe',
    name: 'باك كامل 7D فاخر (طابيات السيارة + فرش الصندوق)',
    category: 'pack',
    subtitle: 'الحماية الشاملة 360 درجة لداخلية سيارتك بالكامل لجميع السيارات',
    price: 750,
    originalPrice: 990,
    rating: 5.0,
    reviewsCount: 310,
    badge: 'عرض باك كامل 7D 🔥',
    image: '/images/tapis_3d_real.jpg',
    secondaryImages: ['/images/tucson_470dh.png', '/images/renault_460dh.png'],
    features: ['يشمل 4 طابيات داخلية 7D على المقاس + 1 فرش صندوق السيارة المقاوم للماء', 'وفر أكثر من 120 درهم عند طلب الباك الكامل', 'جودة فاخرة مع هيكل متين من 7 طبقات', 'حماية كاملة للسيارة من التآكل والأوساخ'],
    colors: [{ id: 'black-red', name: 'أسود بخياطة حمراء سبور', hex: '#991b1b' }, { id: 'black', name: 'أسود كربون فاخر', hex: '#18181b' }],
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
