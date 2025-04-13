import { Button } from "@/components/ui/button";
import { PlayCircleIcon, MicIcon, SparklesIcon } from "lucide-react";
import SoundBars from "./SoundBars";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 bg-anime-pattern opacity-20 z-0"></div>
      
      {/* Градиентные декоративные круги */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-anime-purple/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-anime-pink/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex mb-6">
            <SoundBars />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-anime">
            <span className="text-gradient">Создаем звуки</span> для 
            <span className="text-gradient-sound"> аниме миров</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Профессиональная студия звукозаписи и саунд-дизайна, специализирующаяся на создании уникальных звуковых ландшафтов для аниме проектов
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-anime hover:opacity-90 transition-opacity text-white h-12 px-6">
              <PlayCircleIcon className="w-5 h-5 mr-2" />
              Демо работы
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-6">
              <SparklesIcon className="w-5 h-5 mr-2" />
              Заказать проект
            </Button>
          </div>
        </div>
      </div>
      
      {/* Декоративные звуковые волны внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="sound-bar mx-[1px]"
            style={{
              height: `${Math.max(4, Math.sin(i * 0.2) * 20 + 5)}px`,
              opacity: Math.max(0.5, Math.sin(i * 0.2) + 0.5),
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;