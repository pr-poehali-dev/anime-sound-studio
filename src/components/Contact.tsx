import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
  SendIcon
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 relative" id="contact">
      {/* Фоновые элементы */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-anime-pink/10 blur-3xl z-0"></div>
      <div className="absolute inset-0 bg-anime-pattern opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-anime">
            <span className="text-gradient">Свяжитесь</span> <span className="text-gradient-sound">с нами</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Хотите обсудить ваш проект или узнать больше о наших услугах? Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 lg:col-span-2">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Электронная почта
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Тема
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Тема вашего сообщения" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о вашем проекте..." 
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[150px]"
                  />
                </div>
                
                <Button className="bg-gradient-anime hover:opacity-90 transition-opacity w-full">
                  <SendIcon className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-foreground/80">+7 (123) 456-78-90</p>
                    <p className="text-foreground/80">+7 (987) 654-32-10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Электронная почта</h3>
                    <p className="text-foreground/80">info@animesound.ru</p>
                    <p className="text-foreground/80">support@animesound.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-foreground/80">г. Москва, ул. Анимешная, д. 42</p>
                    <p className="text-foreground/80">Студия AnimeSound</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;