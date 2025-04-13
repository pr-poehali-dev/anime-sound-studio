import { Card, CardContent } from "@/components/ui/card";
import { 
  UserIcon, 
  AwardIcon, 
  TargetIcon 
} from "lucide-react";

const About = () => {
  return (
    <section className="py-20 relative" id="about">
      {/* Фоновые элементы */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-anime-purple/10 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-anime">
              <span className="text-gradient">О нашей</span> <span className="text-gradient-sound">студии</span>
            </h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              AnimeSound — профессиональная студия звукозаписи и саунд-дизайна, специализирующаяся на создании звукового оформления для аниме проектов разного масштаба.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8">
              Наша команда состоит из профессионалов в области звукозаписи, композиторов, звуковых инженеров и актеров озвучки, которые тщательно работают над каждым проектом, чтобы создать идеальное звуковое сопровождение.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                    <UserIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">15+</h3>
                  <p className="text-sm text-foreground/70">Профессионалов</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3">
                    <AwardIcon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-1">50+</h3>
                  <p className="text-sm text-foreground/70">Завершенных проектов</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <TargetIcon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">8</h3>
                  <p className="text-sm text-foreground/70">Лет опыта</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Студия AnimeSound" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              
              {/* Декоративные звуковые волны */}
              <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center">
                {Array.from({ length: 60 }).map((_, i) => (
                  <div
                    key={i}
                    className="sound-bar"
                    style={{
                      height: `${Math.max(2, Math.sin(i * 0.2) * 10 + 2)}px`,
                      opacity: Math.max(0.6, Math.sin(i * 0.2) + 0.6),
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Плавающий элемент */}
            <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-anime p-1 animate-float hidden md:block">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-sm font-bold">8 лет</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;