import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  MenuIcon, 
  HeadphonesIcon, 
  MusicIcon, 
  VideoIcon 
} from "lucide-react";
import { Link } from "react-router-dom";
import SoundBars from "./SoundBars";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Обработчик скролла для изменения прозрачности шапки
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2">
          <div className="hidden md:flex">
            <SoundBars />
          </div>
          <span className="text-2xl font-bold font-anime text-gradient">AnimeSound</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">
            Услуги
          </Link>
          <Link to="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
            О нас
          </Link>
          <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Кнопка звонка */}
        <div className="hidden md:block">
          <Button className="bg-gradient-anime hover:opacity-90 transition-opacity">
            <HeadphonesIcon className="w-4 h-4 mr-2" />
            Заказать звонок
          </Button>
        </div>

        {/* Мобильное меню */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background/95 backdrop-blur-md border-border">
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <SoundBars />
                <span className="text-xl font-bold font-anime text-gradient">AnimeSound</span>
              </Link>
              
              <nav className="flex flex-col gap-4">
                <Link to="/services" className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors">
                  <MusicIcon className="w-5 h-5" />
                  Услуги
                </Link>
                <Link to="/portfolio" className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors">
                  <VideoIcon className="w-5 h-5" />
                  Портфолио
                </Link>
                <Link to="/about" className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors">
                  <HeadphonesIcon className="w-5 h-5" />
                  О нас
                </Link>
                <Link to="/contact" className="text-foreground/80 hover:text-primary flex items-center gap-2 transition-colors">
                  <HeadphonesIcon className="w-5 h-5" />
                  Контакты
                </Link>
              </nav>
              
              <Button className="bg-gradient-anime hover:opacity-90 transition-opacity mt-4">
                <HeadphonesIcon className="w-4 h-4 mr-2" />
                Заказать звонок
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;