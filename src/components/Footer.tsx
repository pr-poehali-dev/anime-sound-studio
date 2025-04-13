import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { InstagramIcon, TwitterIcon, YoutubeIcon, FacebookIcon } from "lucide-react";
import SoundBars from "./SoundBars";

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-md border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-anime-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <SoundBars />
              <span className="text-xl font-bold font-anime text-gradient">AnimeSound</span>
            </Link>
            
            <p className="text-foreground/70 mb-4">
              Профессиональная студия звукозаписи и саунд-дизайна для аниме проектов. Создаем звуковые миры, которые оживляют анимацию.
            </p>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-foreground/70 hover:text-primary hover:bg-primary/10">
                <InstagramIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-foreground/70 hover:text-primary hover:bg-primary/10">
                <TwitterIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-foreground/70 hover:text-primary hover:bg-primary/10">
                <YoutubeIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-foreground/70 hover:text-primary hover:bg-primary/10">
                <FacebookIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/voice-acting" className="text-foreground/70 hover:text-primary transition-colors">
                  Озвучка персонажей
                </Link>
              </li>
              <li>
                <Link to="/services/sound-design" className="text-foreground/70 hover:text-primary transition-colors">
                  Саунд-дизайн
                </Link>
              </li>
              <li>
                <Link to="/services/music-composition" className="text-foreground/70 hover:text-primary transition-colors">
                  Композиция музыки
                </Link>
              </li>
              <li>
                <Link to="/services/audio-mastering" className="text-foreground/70 hover:text-primary transition-colors">
                  Мастеринг аудио
                </Link>
              </li>
              <li>
                <Link to="/services/foley-effects" className="text-foreground/70 hover:text-primary transition-colors">
                  Фоли эффекты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">О компании</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-foreground/70 hover:text-primary transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                <strong className="font-medium text-foreground">Адрес:</strong>
                <p>г. Москва, ул. Анимешная, д. 42</p>
              </li>
              <li className="text-foreground/70">
                <strong className="font-medium text-foreground">Телефон:</strong>
                <p>+7 (123) 456-78-90</p>
              </li>
              <li className="text-foreground/70">
                <strong className="font-medium text-foreground">Email:</strong>
                <p>info@animesound.ru</p>
              </li>
              <li className="text-foreground/70">
                <strong className="font-medium text-foreground">Время работы:</strong>
                <p>Пн-Пт: 10:00 - 19:00</p>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-border/30 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} AnimeSound Studio. Все права защищены.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
      
      {/* Декоративные звуковые волны внизу */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex items-end justify-center opacity-30">
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={i}
            className="sound-bar mx-[1px]"
            style={{
              height: `${Math.max(1, Math.sin(i * 0.1) * 3 + 1)}px`,
              opacity: Math.max(0.3, Math.sin(i * 0.1) + 0.3),
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;