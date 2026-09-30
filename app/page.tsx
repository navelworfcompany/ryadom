import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-800">

            {/* --- Шапка --- */}
            <header className="container mx-auto px-3 sm:px-4 py-3 md:py-6 flex justify-between items-center gap-2 sm:gap-4">

                {/* Логотип */}
                <div className="flex items-center gap-2 shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                    <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900">FlowCRM</span>
                    <span className="hidden lg:block text-xs text-slate-500 ml-2">CRM для малого бизнеса</span>
                </div>

                {/* Меню — только от 1024px */}
                <nav className="hidden lg:flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:text-blue-600">Возможности</a>
                    <a href="#" className="hover:text-blue-600">Бизнесы</a>
                    <a href="#" className="hover:text-blue-600">Цены</a>
                    <a href="#" className="hover:text-blue-600">Отзывы</a>
                    <a href="#" className="hover:text-blue-600">FAQ</a>
                </nav>

                {/* Правая часть */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">

                    {/* «Войти» — только от 640px */}
                    <a href="#" className="hidden sm:block text-sm font-medium hover:text-blue-600 whitespace-nowrap">
                        Войти
                    </a>

                    {/* Кнопка — разный текст для разных размеров */}
                    <button className="bg-slate-900 text-white px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-slate-800 transition whitespace-nowrap">
                        <span className="hidden sm:inline">Попробовать бесплатно →</span>
                        <span className="sm:hidden">Попробовать →</span>
                    </button>

                    {/* Гамбургер — только до 1024px */}
                    <button className="lg:hidden p-1 -mr-1 shrink-0" aria-label="Меню">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* --- Герой --- */}
            <section className="w-full pl-4 md:pl-0 pt-6 pb-12 md:pt-10 md:pb-20 grid md:grid-cols-12 gap-6 items-center overflow-hidden">

                {/* Левая часть: текст */}
                <div className="md:col-span-5 lg:col-span-5 relative z-20 md:-mr-8 lg:-mr-16 px-4 md:px-0 md:pl-8 lg:pl-16">

                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 12 2 2 4-4" />
                        </svg>
                        Готовые CRM-решения для разных видов бизнеса
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 sm:mb-6 text-slate-900">
                        Выберите свой бизнес — <br />получите
                        <span className="text-indigo-600"> готовую CRM</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-md">
                        Мы настраиваем систему под ваш бизнес: нужные поля, услуги, статусы, уведомления и отчеты. Вам не нужно ничего настраивать — просто начните работать.
                    </p>

                    {/* Кнопки */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">

                        {/* Кнопка 1: Выбрать бизнес */}
                        <button className="bg-slate-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-slate-800 transition whitespace-nowrap">
                            Выбрать свой бизнес →
                        </button>

                        {/* Кнопка 2: Как это работает */}
                        <button className="border border-slate-200 bg-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base text-slate-900 hover:bg-slate-50 transition flex items-center justify-center gap-3 whitespace-nowrap">
                            <span className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                            </span>
                            <span className="flex flex-col items-start leading-tight text-left">
                                <span>Как это работает</span>
                                <span className="text-[10px] sm:text-xs text-slate-400 font-normal">1 минута</span>
                            </span>
                        </button>
                    </div>

                    {/* Три преимущества */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-sm">
                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-0.5">Запуск за 5 минут</p>
                                <p className="text-slate-500 leading-snug">Без внедрения и обучения</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-0.5">Уже настроено под ваш бизнес</p>
                                <p className="text-slate-500 leading-snug">Никаких сложных настроек</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 mb-0.5">Удобно для команды</p>
                                <p className="text-slate-500 leading-snug">До 5 сотрудников без лишних функций</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Правая часть: картинка */}
                <div className="md:col-span-7 relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center md:justify-end">
                    <Image
                        src="/hero-image.png"
                        alt="CRM для бизнеса"
                        fill
                        className="object-contain object-center md:object-right"
                        priority
                    />
                </div>
            </section>

            {/* --- Блок "Всё, что нужно" --- */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="bg-[#F8FAFC] rounded-[32px] py-12 px-6 md:py-16 md:px-12">

                    {/* Заголовок */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10 md:mb-14">
                        Всё, что нужно для вашего бизнеса
                    </h2>

                    {/* Сетка из 7 карточек */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10">

                        {/* 1. Онлайн-запись */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#FEE2E2] flex items-center justify-center mb-4">
                                <img src="/icons/calendar.webp" alt="Онлайн-запись" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Онлайн-запись
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                и календарь
                            </p>
                        </div>

                        {/* 2. База клиентов */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#D1FAE5] flex items-center justify-center mb-4">
                                <img src="/icons/users.webp" alt="База клиентов" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                База клиентов
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                и история визитов
                            </p>
                        </div>

                        {/* 3. Услуги и мастера */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#E0E7FF] flex items-center justify-center mb-4">
                                <img src="/icons/scissors.webp" alt="Услуги и мастера" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Услуги и мастера
                            </p>
                        </div>

                        {/* 4. Напоминания */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#FEF3C7] flex items-center justify-center mb-4">
                                <img src="/icons/bell.webp" alt="Напоминания" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Напоминания
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                (SMC, WhatsApp, email)
                            </p>
                        </div>

                        {/* 5. Лояльность */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#DBEAFE] flex items-center justify-center mb-4">
                                <img src="/icons/star.webp" alt="Лояльность" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Лояльность
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                и абонементы
                            </p>
                        </div>

                        {/* 6. Оплаты */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#E0E7FF] flex items-center justify-center mb-4">
                                <img src="/icons/payment.webp" alt="Оплаты" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Оплаты
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                и чеки
                            </p>
                        </div>

                        {/* 7. Аналитика */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl bg-[#D1FAE5] flex items-center justify-center mb-4">
                                <img src="/icons/chart.webp" alt="Аналитика" width={50} height={50} />
                            </div>
                            <p className="text-sm md:text-[15px] font-bold text-slate-900 leading-tight mb-1">
                                Аналитика
                            </p>
                            <p className="text-xs text-slate-500 leading-snug">
                                и отчеты
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Блок "Готовые решения для популярных бизнесов" --- */}
            <section className="container mx-auto px-4 py-12 md:py-16">

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        Готовые решения для популярных бизнесов
                    </h2>
                    <a href="#" className="text-blue-600 font-medium text-sm hover:underline whitespace-nowrap">
                        Все бизнесы →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* --- Барбершоп --- */}
                    <div className="bg-indigo-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Барбершоп</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/barber.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/barber.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Расписание мастеров</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Типы услуг и длительность</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Повторная запись</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Отзывы клиентов</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Маникюр / Педикюр --- */}
                    <div className="bg-rose-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Маникюр / Педикюр</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/nails.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/nails.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> База клиентов</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Услуги и материалы</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Напоминания о визите</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Абонементы и подарочные</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Массаж --- */}
                    <div className="bg-emerald-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Массаж</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/massage.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/massage.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Карточка клиента</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Курсы и абонементы</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Напоминания</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> История процедур</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Груминг --- */}
                    <div className="bg-green-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Груминг</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/grooming.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/grooming.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Клиент + питомец</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Породы и особенности</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> История визитов</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Следующий визит</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Мойка --- */}
                    <div className="bg-blue-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Автомойка</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/washing.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/washing.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Клиент + автомобиль</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> История работ</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Напоминания о визите</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Планирование загрузки</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Пилатес / Йога --- */}
                    <div className="bg-cyan-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Пилатес / Йога</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/pilates.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/pilates.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Абонементы и группы</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Расписание занятий</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Посещаемость</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Учет остатков занятий</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Кофе на вынос --- */}
                    <div className="bg-lime-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Кофе на вынос</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/coffee.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/coffee.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> База постоянных клиентов</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Программы лояльности</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Рассылки и акции</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Аналитика продаж</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Репетиторы --- */}
                    <div className="bg-violet-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Репетиторы</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/tutors.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden bg-slate-100 shrink-0">
                                <img src="/businesses/ui/tutors.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Ученики и родители</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Расписание занятий</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Оплаты и задолженности</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Уведомления</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Фастфуд --- */}
                    <div className="bg-orange-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Фастфуд</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/fastfood.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden shrink-0">
                                <img src="/businesses/ui/fastfood.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Меню и категории блюд</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Заказы и доставка</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Программы лояльности</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Аналитика продаж</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Ателье --- */}
                    <div className="bg-amber-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Ателье</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/atelier.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden shrink-0">
                                <img src="/businesses/ui/atelier.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Заказы и сроки</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Клиенты и мерки</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Примерки и статусы</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Оплаты и предоплаты</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Салон красоты --- */}
                    <div className="bg-purple-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Салон красоты</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/beauty.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden shrink-0">
                                <img src="/businesses/ui/beauty.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Услуги и мастера</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Онлайн-запись</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Программы лояльности</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> История визитов</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                    {/* --- Цветы / Подарки --- */}
                    <div className="bg-fuchsia-100 rounded-2xl border border-slate-200 p-4 hover:shadow-lg transition">
                        <div className="flex gap-2 sm:gap-3 mb-5">
                            <div className="w-1/2 flex flex-col gap-2">
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight text-center min-h-[48px] flex items-center justify-center">Цветы / Подарки</h3>
                                <div className="w-full aspect-square rounded-xl overflow-hidden">
                                    <img src="/businesses/flowers.webp" alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2 aspect-square rounded-lg border-2 overflow-hidden shrink-0">
                                <img src="/businesses/ui/flowers.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Каталог и остатки</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Заказы и доставка</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Клиенты и события</li>
                            <li className="text-xs text-slate-900 flex items-start gap-1.5"><span className="text-green-500 mt-0.5">✓</span> Оплаты и чеки</li>
                        </ul>
                        <a href="#" className="text-blue-600 text-xs font-semibold hover:underline">Подробнее →</a>
                    </div>

                </div>
            </section>

            {/* --- Блок "Простая настройка" --- */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="relative bg-[#F0F6FF] rounded-[32px] overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* ЛЕВАЯ КОЛОНКА: заголовок + текст + кнопка 
                lg: 5/12, xl: 4/12 — на 1024-1280px шире, на 1280px+ компактнее */}
                        <div className="lg:col-span-5 xl:col-span-4 relative z-10">

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                Простая настройка <br className="hidden sm:block" />
                                под ваш бизнес
                            </h2>

                            <p className="text-slate-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                                Выберите бизнес — и система автоматически создаст всё необходимое: услуги, статусы, шаблоны сообщений, отчеты и даже примеры данных.
                            </p>

                            <button className="bg-[#0F172A] text-white px-5 sm:px-6 lg:px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#1E293B] transition inline-flex items-center gap-2 whitespace-nowrap">
                                Посмотреть, как это работает →
                            </button>
                        </div>

                        {/* ПРАВАЯ ЧАСТЬ: шаги + картинка 
                lg: 7/12, xl: 8/12 */}
                        <div className="lg:col-span-7 xl:col-span-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">

                            {/* Шаги */}
                            <div className="flex items-start justify-center gap-2 sm:gap-3 shrink-0">

                                {/* Шаг 1 */}
                                <div className="flex flex-col items-center text-center w-[72px] sm:w-[80px]">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-2 shrink-0">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <line x1="19" y1="8" x2="19" y2="14" />
                                            <line x1="22" y1="11" x2="16" y2="11" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-900 leading-tight">
                                        Выбор<br />бизнеса
                                    </p>
                                </div>

                                {/* Стрелка */}
                                <div className="text-indigo-400 shrink-0 pt-5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>

                                {/* Шаг 2 */}
                                <div className="flex flex-col items-center text-center w-[72px] sm:w-[80px]">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#E0E7FF] rounded-full flex items-center justify-center mb-2 shrink-0">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-900 leading-tight">
                                        Автоматическая<br />настройка
                                    </p>
                                </div>

                                {/* Стрелка */}
                                <div className="text-indigo-400 shrink-0 pt-5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </div>

                                {/* Шаг 3 */}
                                <div className="flex flex-col items-center text-center w-[72px] sm:w-[80px]">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#D1FAE5] rounded-full flex items-center justify-center mb-2 shrink-0">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-900 leading-tight">
                                        Готовая система<br />для работы
                                    </p>
                                </div>

                            </div>

                            {/* Картинка */}
                            <div className="relative w-full md:w-auto md:flex-1 min-w-0 h-[240px] sm:h-[280px] md:h-[340px]">
                                <img
                                    src="/setup-image.webp"
                                    alt="Простая настройка FlowCRM"
                                    className="w-full h-full object-contain object-center rounded-[32px]"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* --- Блок "Отзывы" --- */}
            <section className="container mx-auto px-4 py-12 md:py-16">

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10">
                    Что говорят наши клиенты
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* --- Отзыв 1 --- */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                <img src="/reviews/ekaterina.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-900">Екатерина Иванова</p>
                                <p className="text-xs text-slate-500">Владелица маникюрного салона</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                            «Очень удобно, что система уже настроена под мою нишу. Запустилась за 10 минут, и сразу начала работать. Классно, что есть напоминания — клиенты действительно возвращаются!»
                        </p>

                        <div className="flex gap-0.5 text-yellow-400">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>

                    </div>

                    {/* --- Отзыв 2 --- */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                <img src="/reviews/alexey.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-900">Алексей Смирнов</p>
                                <p className="text-xs text-slate-500">Владелец барбершопа</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                            «Перешли с бумажной записи и не пожалели. Всё просто, понятно, есть нужные функции. Главное — не нужно ничего настраивать самому. Реально экономит время.»
                        </p>

                        <div className="flex gap-0.5 text-yellow-400">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>

                    </div>

                    {/* --- Отзыв 3 --- */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">

                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0">
                                <img src="/reviews/maria.webp" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm text-slate-900">Мария Кузнецова</p>
                                <p className="text-xs text-slate-500">Массажист</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 italic leading-relaxed mb-5">
                            «Система помогла мне выстроить работу с клиентами: все записи, история процедур, напоминания. Легко отслеживать, кто когда был и когда пора записывать на следующий сеанс.»
                        </p>

                        <div className="flex gap-0.5 text-yellow-400">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* --- Финальный CTA / Футер --- */}
            <footer className="container mx-auto px-4 py-12 md:py-16">
                <div className="relative bg-gradient-to-br from-[#0F2A5C] via-[#14357A] to-[#0A1F44] rounded-[32px] overflow-hidden">

                    <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">

                        {/* Верхняя часть: заголовок + кнопка */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 md:mb-10">

                            <div className="max-w-md">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                    Начните с бесплатного периода
                                </h2>
                                <p className="text-slate-300 text-sm md:text-base">
                                    Попробуйте систему 14 дней — без карты и обязательств.
                                </p>
                            </div>

                            <button className="bg-white text-[#0F2A5C] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm hover:bg-slate-100 transition whitespace-nowrap inline-flex items-center justify-center gap-2 max-w-[280px] shrink-0 self-auto">
                                Попробовать бесплатно →
                            </button>

                        </div>

                        {/* Разделитель */}
                        <div className="border-t border-white/10 mb-8"></div>

                        {/* Нижняя часть: три преимущества — в столбик по центру на мобильных, в 3 колонки от 640px */}
                        <div className="flex justify-center sm:block">
                            <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 w-full mx-auto sm:max-w-none shrink-0">

                                {/* Преимущество 1: Карта */}
                                <div className="flex items-center gap-3 h-12 sm:h-auto">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="5" width="20" height="14" rx="2" />
                                            <line x1="2" y1="10" x2="22" y2="10" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center text-left">
                                        <p className="text-[12px] text-slate-300 leading-tight">Без карты</p>
                                        <p className="text-[12px] text-slate-300 leading-tight">и обязательств</p>
                                    </div>
                                </div>

                                {/* Преимущество 2: Наушники */}
                                <div className="flex items-center gap-3 h-12 sm:h-auto">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center text-left">
                                        <p className="text-[12px] text-slate-300 leading-tight">Поддержка</p>
                                        <p className="text-[12px] text-slate-300 leading-tight">24/7</p>
                                    </div>
                                </div>

                                {/* Преимущество 3: Часы */}
                                <div className="flex items-center gap-3 h-12 sm:h-auto">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center text-left">
                                        <p className="text-[12px] text-slate-300 leading-tight">Быстрый старт</p>
                                        <p className="text-[12px] text-slate-300 leading-tight">за 5 минут</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </main>
    );
}