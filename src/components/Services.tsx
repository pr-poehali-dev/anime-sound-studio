import { 
  MicIcon, 
  WaveIcon, 
  MusicIcon, 
  HeadphonesIcon, 
  SpeakerIcon, 
  LayersIcon 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <MicIcon className="w-12 h-12 text-anime-purple" />,
    title: "Озвучка персонажей",
    description: "Профессиональная озвучка аниме персонажей с учетом характера и эмоций"
  },
  {
    icon: <WaveIcon className="w-12 h-12 text-anime-pink" />,
    title: "Саунд-дизайн",
    description: "Создание уникальных звуковых эффектов и атмосферы для вашего аниме"
  },
  {
    icon: <MusicIcon className="w-12 h-12 text-anime-blue" />,
    title: "Композиция музыки",
    description: "Оригинальные музыкальные композиции, подчеркивающие настроение сцен"
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12 text-anime-cyan" />,
    title: "Мастеринг аудио",
    description: "Профессиональная обработка и сведение всех звуковых дорожек"
  },
  {
    icon: <SpeakerIcon className="w-12 h-12 text-anime-purple" />,
    title: "Фоли эффекты",
    description: "Создание реалистичных звуков окружения и действий персонажей"
  },
  {
    icon: <LayersIcon className="w-12 h-12 text-anime-pink" />,
    title: "Адаптация локализации",
    description: "Адаптация озвучки и звуковых дорожек для международной аудитории"
  }
];

const Services = () => {
  return (
    <section className="py-20 relative" id="services">
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full bg-anime-pattern opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anime">
            <span className="text-gradient">Наши</span> <span className="text-gradient-sound">услуги</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг в области звукозаписи и саунд-дизайна для аниме проектов любой сложности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group relative">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
              
              {/* Декоративные звуковые волны (видны при наведении) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="sound-bar mx-[1px]"
                    style={{
                      height: `${Math.max(2, Math.sin(i * 0.2) * 10 + 2)}px`,
                      opacity: Math.max(0.5, Math.sin(i * 0.2) + 0.5),
                    }}
                  ></div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;