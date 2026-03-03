import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldAlert, 
  BrainCircuit, 
  TrendingUp, 
  Smartphone, 
  Scale, 
  EyeOff, 
  UserCheck, 
  AlertTriangle,
  FileWarning,
  Landmark
} from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Технологии создания Deepfakes",
    subtitle: "как инструменты современной киберпреступности",
    icon: <ShieldAlert className="w-16 h-16 text-red-500 mb-6" />,
    content: (
      <div className="text-xl text-neutral-300 space-y-6 text-center max-w-3xl mx-auto">
        <p>От развлечения к серьезному орудию киберпреступности, наносящему ощутимый ущерб гражданам и организациям.</p>
        <p className="text-sm text-neutral-500 mt-12">Используйте стрелки на клавиатуре для навигации</p>
      </div>
    ),
    layout: 'title'
  },
  {
    id: 2,
    title: "Что такое Deepfake?",
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
    content: (
      <div className="space-y-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-indigo-400 mb-2">Термин</p>
          <p className="text-neutral-300">От англ. <strong className="text-white">deep learning</strong> (глубокое обучение) и <strong className="text-white">fake</strong> (подделка).</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-indigo-400 mb-2">Определение</p>
          <p className="text-neutral-300">Изображения или видео, сгенерированные ИИ, где один фрагмент накладывается на другой с поразительной точностью. Различить «на глаз» оригинал и подделку часто невозможно.</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-indigo-400 mb-2">Проблема восприятия</p>
          <p className="text-neutral-300">Главная характеристика — «возможность казаться реальной». По данным исследований, 72% пользователей до сих пор не знают, как определить подделку.</p>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 3,
    title: "Масштабы угрозы в России",
    icon: <TrendingUp className="w-8 h-8 text-rose-400" />,
    content: (
      <div className="grid grid-cols-2 gap-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 col-span-2 md:col-span-1">
          <div className="text-4xl font-bold text-rose-500 mb-2">119 млрд ₽</div>
          <p className="text-neutral-400">Ущерб от киберпреступлений за 7 месяцев 2025 года (+16% к прошлому году).</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 col-span-2 md:col-span-1">
          <div className="text-4xl font-bold text-rose-500 mb-2">x2.3 раза</div>
          <p className="text-neutral-400">Рост случаев мошенничества с дипфейками. Прогнозируется рост в 5-10 раз.</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 col-span-2">
          <p className="font-semibold text-rose-400 mb-2">Каждый десятый россиянин</p>
          <p className="text-neutral-300">уже сталкивался с попытками мошенничества с использованием дипфейков.</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 col-span-2">
          <p className="font-semibold text-rose-400 mb-2">Региональный пример (Ростовская область)</p>
          <p className="text-neutral-300">&gt;13 тыс. киберпреступлений (ущерб &gt;2.5 млрд руб). Из них зафиксированы случаи с применением Deepfake, несмотря на общее снижение киберпреступности в регионе.</p>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 4,
    title: "Почему дипфейки стали массовым явлением?",
    icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
    content: (
      <div className="space-y-6 text-lg">
        <div className="flex items-start gap-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-emerald-400 mb-2">Технологическая доступность</p>
            <p className="text-neutral-300">Более 50 тысяч ресурсов в открытом доступе для создания дипфейков. Сделать фальшивый голос или видео можно за считанные минуты.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-emerald-400 mb-2">Технологическая основа (GAN)</p>
            <p className="text-neutral-300">Генеративно-состязательные сети: генератор создает подделку, дискриминатор пытается её отличить. Качество постоянно растет в ходе этого «состязания».</p>
          </div>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 5,
    title: "Основные схемы применения (Часть 1)",
    icon: <AlertTriangle className="w-8 h-8 text-amber-400" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-amber-400 mb-4 text-xl">Дипфейк-звонки</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Звонки от «сотрудников банков», «следователей» или «близких».</li>
            <li>Использование баз утечек и персонализированных обращений.</li>
            <li>Взлом мессенджеров, изучение переписки.</li>
            <li>Просьбы перевести деньги голосом родственника.</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-amber-400 mb-4 text-xl">Сбор биометрии</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Выманивание фото лица под видом «подтверждения личности».</li>
            <li>Создание фальшивых документов и профилей.</li>
            <li>Обход систем биометрической аутентификации (FaceID).</li>
            <li>Шантаж и дискредитация.</li>
          </ul>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 6,
    title: "Основные схемы применения (Часть 2)",
    icon: <FileWarning className="w-8 h-8 text-amber-400" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-amber-400 mb-4 text-xl">Дипфейки «из прошлого»</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Использование старых фото/видео (например, флешмобы 2016 года).</li>
            <li>Создание компромата на основе архивных данных.</li>
            <li>Опасность: отсутствие цифровых следов подделки на старых материалах.</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-amber-400 mb-4 text-xl">Фишинг и подделка документов</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Массовая рассылка писем от имени госорганов с помощью ИИ.</li>
            <li>Создание фальшивых сайтов.</li>
            <li>Подделка паспортных данных для оформления кредитов (ущерб $75 млн в Китае).</li>
          </ul>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 7,
    title: "Векторы угроз и шантаж",
    icon: <EyeOff className="w-8 h-8 text-purple-400" />,
    content: (
      <div className="space-y-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-purple-400 mb-2">DeepNudes и травля</p>
          <p className="text-neutral-300">Деструктивный метод создания порнографических подделок. Используется для шантажа медийных персон и обычных граждан. Требует изучения социальных контактов жертвы.</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-purple-400 mb-2">Финансовое вымогательство</p>
          <p className="text-neutral-300">Угрозы отправить сгенерированные компрометирующие материалы в сеть или близким, если не будет уплачен выкуп.</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-purple-400 mb-2">Политические манипуляции</p>
          <p className="text-neutral-300">Подмена лиц и аудиодорожек для дезинформации, изменения мнения масс и влияния на общественность.</p>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 8,
    title: "Правовое регулирование",
    icon: <Scale className="w-8 h-8 text-blue-400" />,
    content: (
      <div className="space-y-6 text-lg">
        <div className="flex items-start gap-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-400 mb-2">Уголовная ответственность</p>
            <p className="text-neutral-300">Законопроект о дополнении ст. 272.1 УК РФ ответственностью за автоматизированную обработку персональных данных для создания дипфейков.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-400 mb-2">Охрана голоса</p>
            <p className="text-neutral-300">Законопроект, запрещающий использование голоса (включая синтезированные записи) без согласия человека.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-400 mb-2">Запрет деструктивных сервисов</p>
            <p className="text-neutral-300">Предложение ограничить работу нейросервисов, создающих deepfake-порнографию («раздеваторов»), используемых для травли.</p>
          </div>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 9,
    title: "Сложности выявления",
    icon: <EyeOff className="w-8 h-8 text-cyan-400" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50 col-span-1 md:col-span-2">
          <p className="font-semibold text-cyan-400 mb-2">Технические аспекты</p>
          <p className="text-neutral-300 italic">«Если мошенник пользуется серьезным инструментом, определить подделку человеку практически невозможно. Сделанный нейросетью контент может выявить только другая нейросеть».</p>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-cyan-400 mb-4">Признаки подделки</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Неестественная монотонная речь.</li>
            <li>Дефекты звука и видео (артефакты).</li>
            <li>Несвойственная мимика и моргание.</li>
          </ul>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-cyan-400 mb-4">Проблема латентности</p>
          <ul className="space-y-3 text-neutral-300 list-disc list-inside">
            <li>Точной статистики не существует.</li>
            <li>Многие жертвы не обращаются в полицию.</li>
            <li>«Сырье» массово публикуется в соцсетях.</li>
          </ul>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 10,
    title: "Рекомендации по защите",
    icon: <ShieldAlert className="w-8 h-8 text-emerald-400" />,
    content: (
      <div className="space-y-6 text-lg">
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-emerald-400 mb-4">Для граждан</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-300">
            <ul className="space-y-2 list-disc list-inside">
              <li>Не сообщать коды подтверждения.</li>
              <li>Перезванивать близким по сотовой связи.</li>
              <li>Задавать личные проверочные вопросы.</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Проверять адреса сайтов.</li>
              <li>Не давать доступ к камере незнакомым сервисам.</li>
              <li>Ограничивать публикацию личных данных.</li>
            </ul>
          </div>
        </div>
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800/50">
          <p className="font-semibold text-emerald-400 mb-2">Технические меры</p>
          <p className="text-neutral-300">Использовать двухфакторную аутентификацию, браузеры с антивирусными плагинами и критически относиться к любым запросам конфиденциальной информации.</p>
        </div>
      </div>
    ),
    layout: 'content'
  },
  {
    id: 11,
    title: "Заключение",
    icon: <AlertTriangle className="w-8 h-8 text-indigo-400" />,
    content: (
      <div className="space-y-6 text-lg text-center max-w-4xl mx-auto mt-8">
        <p className="text-2xl font-medium text-neutral-200 mb-8">
          Технологии опережают правовое регулирование и защитные механизмы.
        </p>
        <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800/50 inline-block text-left">
          <p className="text-neutral-300 italic text-xl leading-relaxed">
            «Предотвратить рост таких преступлений можно только совместными усилиями — государства, IT-компаний, платформ и самих пользователей».
          </p>
          <p className="text-neutral-500 mt-4 font-semibold">— сенатор Артём Шейкин</p>
        </div>
      </div>
    ),
    layout: 'content'
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#050505] text-neutral-100 font-sans selection:bg-indigo-500/30">
      {/* Header / Progress */}
      <header className="flex items-center justify-between p-6 z-10">
        <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium tracking-wider uppercase">
          <ShieldAlert className="w-4 h-4" />
          <span>Кибербезопасность</span>
        </div>
        <div className="text-neutral-500 font-mono text-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-5xl"
          >
            {slide.layout === 'title' ? (
              <div className="text-center flex flex-col items-center">
                {slide.icon}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-neutral-400 font-light mb-12">
                  {slide.subtitle}
                </h2>
                {slide.content}
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
                    {slide.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    {slide.title}
                  </h2>
                </div>
                <div className="flex-1">
                  {slide.content}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Controls */}
      <footer className="p-6 flex justify-center gap-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-4 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-4 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </footer>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-neutral-900 w-full">
        <motion.div 
          className="h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
