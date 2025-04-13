import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 relative">
        {/* Фоновые элементы */}
        <div className="absolute inset-0 bg-anime-pattern opacity-10 z-0"></div>
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-anime-purple/10 blur-3xl z-0"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-anime-pink/10 blur-3xl z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-gradient font-anime mb-6">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
            <p className="text-foreground/70 mb-8">
              Похоже, страница, которую вы ищете, переместилась в другое измерение или никогда не существовала.
            </p>
            
            <Link to="/">
              <Button className="bg-gradient-anime hover:opacity-90 transition-opacity">
                <HomeIcon className="w-4 h-4 mr-2" />
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;