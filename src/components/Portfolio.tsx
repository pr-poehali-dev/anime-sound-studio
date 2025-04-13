import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon, PauseIcon, VolumeIcon } from "lucide-react";

// Мок-данные для проектов
const portfolioData = {
  "all": [
    { id: 1, title: "Сакура под луной", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
    { id: 2, title: "Кибер-самурай", type: "Сериал", image: "/placeholder.svg", audioUrl: "#" },
    { id: 3, title: "Драконы Восточного моря", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
    { id: 4, title: "Школа магов", type: "Сериал", image: "/placeholder.svg", audioUrl: "#" },
    { id: 5, title: "Последний герой", type: "Короткометражка", image: "/placeholder.svg", audioUrl: "#" },
    { id: 6, title: "Призрачный мир", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
  ],
  "feature-films": [
    { id: 1, title: "Сакура под луной", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
    { id: 3, title: "Драконы Восточного моря", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
    { id: 6, title: "Призрачный мир", type: "Полнометражное аниме", image: "/placeholder.svg", audioUrl: "#" },
  ],
  "series": [
    { id: 2, title: "Кибер-самурай", type: "Сериал", image: "/placeholder.svg", audioUrl: "#" },
    { id: 4, title: "Школа магов", type: "Сериал", image: "/placeholder.svg", audioUrl: "#" },
  ],
  "shorts": [
    { id: 5, title: "Последний герой", type: "Короткометражка", image: "/placeholder.svg", audioUrl: "#" },
  ]
};

type ProjectType = {
  id: number;
  title: string;
  type: string;
  image: string;
  audioUrl: string;
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section className="py-20 relative" id="portfolio">
      {/* Фоновые элементы */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-anime-blue/10 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anime">
            <span className="text-gradient">Наши</span> <span className="text-gradient-sound">работы</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Портфолио наших звуковых работ для различных аниме проектов — от короткометражек до полнометражных фильмов
          </p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/30 backdrop-blur-sm">
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="feature-films">Полнометражные</TabsTrigger>
              <TabsTrigger value="series">Сериалы</TabsTrigger>
              <TabsTrigger value="shorts">Короткометражки</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(portfolioData).map((category) => (
            <TabsContent key={category} value={category} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData[category as keyof typeof portfolioData].map((project: ProjectType) => (
                  <Card key={project.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full" 
                        />
                      </AspectRatio>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="bg-primary/20 hover:bg-primary/40 backdrop-blur-sm rounded-full w-14 h-14"
                          onClick={() => handlePlay(project.id)}
                        >
                          {playingId === project.id ? (
                            <PauseIcon className="w-8 h-8 text-white" />
                          ) : (
                            <PlayIcon className="w-8 h-8 text-white" />
                          )}
                        </Button>
                      </div>
                      
                      {/* Звуковые волны (активны при воспроизведении) */}
                      {playingId === project.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-4 flex items-end justify-center">
                          {Array.from({ length: 50 }).map((_, i) => (
                            <div
                              key={i}
                              className="sound-bar animate-sound-wave"
                              style={{
                                height: `${Math.max(4, Math.sin(i * 0.2) * 16 + 4)}px`,
                                animationDelay: `${i * 0.02}s`,
                              }}
                            ></div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        {playingId === project.id && (
                          <VolumeIcon className="w-4 h-4 text-primary animate-pulse" />
                        )}
                      </div>
                      <p className="text-sm text-foreground/70">{project.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Показать больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;