import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('accounts');

  const accounts = [
    {
      id: 1,
      title: 'ЭЛИТНЫЙ АККАУНТ',
      rank: 'Легенда',
      level: 85,
      skins: 45,
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/828eca86-0d70-47a4-a143-a9b62f61fe2f/files/da076648-fe9a-4924-8de2-58a8d0d6b555.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'PRO АККАУНТ',
      rank: 'Мастер',
      level: 67,
      skins: 28,
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/828eca86-0d70-47a4-a143-a9b62f61fe2f/files/da076648-fe9a-4924-8de2-58a8d0d6b555.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'СТАРТОВЫЙ',
      rank: 'Эксперт',
      level: 42,
      skins: 15,
      price: 1800,
      image: 'https://cdn.poehali.dev/projects/828eca86-0d70-47a4-a143-a9b62f61fe2f/files/da076648-fe9a-4924-8de2-58a8d0d6b555.jpg',
      featured: false
    }
  ];

  const goldPackages = [
    {
      id: 1,
      amount: 10000,
      bonus: 500,
      price: 990,
      popular: false
    },
    {
      id: 2,
      amount: 25000,
      bonus: 2000,
      price: 2200,
      popular: true
    },
    {
      id: 3,
      amount: 50000,
      bonus: 5000,
      price: 3990,
      popular: false
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Александр',
      rating: 5,
      text: 'Купил элитный аккаунт, всё пришло моментально. Отличный сервис!',
      date: '2 дня назад'
    },
    {
      id: 2,
      name: 'Дмитрий',
      rating: 5,
      text: 'Голда зачислилась за 5 минут, цены лучшие на рынке',
      date: '1 неделю назад'
    },
    {
      id: 3,
      name: 'Максим',
      rating: 5,
      text: 'Покупаю здесь уже второй раз, всегда быстро и надёжно',
      date: '2 недели назад'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Crosshair" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-oswald font-bold">STANDOFF SHOP</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveTab('home')} className="hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => setActiveTab('accounts')} className="hover:text-primary transition-colors">
                Аккаунты
              </button>
              <button onClick={() => setActiveTab('gold')} className="hover:text-primary transition-colors">
                Голда
              </button>
              <button onClick={() => setActiveTab('reviews')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => setActiveTab('contacts')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </nav>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <section className="mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-background p-12 border border-primary/30">
              <div className="relative z-10">
                <h2 className="text-5xl font-oswald font-bold mb-4 animate-slide-up">
                  МАГАЗИН АККАУНТОВ<br />STANDOFF 2
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Лучшие цены на аккаунты и голду. Мгновенная доставка. Гарантия безопасности.
                </p>
                <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setActiveTab('accounts')}>
                    <Icon name="Trophy" size={20} className="mr-2" />
                    Выбрать аккаунт
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => setActiveTab('gold')}>
                    <Icon name="Coins" size={20} className="mr-2" />
                    Купить голду
                  </Button>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="bg-card border-border hover:border-primary/50 transition-all animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Моментально</CardTitle>
                  <CardDescription>Доставка за 1-5 минут после оплаты</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Безопасно</CardTitle>
                  <CardDescription>Гарантия качества и защита сделки</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Headphones" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Поддержка 24/7</CardTitle>
                  <CardDescription>Всегда на связи в Telegram</CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeTab === 'accounts' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-oswald font-bold mb-8">АККАУНТЫ STANDOFF 2</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {accounts.map((account, index) => (
                <Card key={account.id} className="bg-card border-border hover:border-primary/50 transition-all animate-scale-in overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                  {account.featured && (
                    <div className="bg-secondary text-secondary-foreground text-center py-2 font-bold text-sm">
                      ⭐ ХИТ ПРОДАЖ
                    </div>
                  )}
                  <div className="relative h-48 overflow-hidden">
                    <img src={account.image} alt={account.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">{account.rank}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-oswald">{account.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Уровень:</span>
                        <span className="font-bold">{account.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Скинов:</span>
                        <span className="font-bold">{account.skins}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-border">
                        <span className="text-2xl font-bold text-primary">{account.price}₽</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="ShoppingBag" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gold' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-oswald font-bold mb-8">КУПИТЬ ГОЛДУ</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {goldPackages.map((pkg, index) => (
                <Card key={pkg.id} className={`bg-card border-border hover:border-primary/50 transition-all animate-scale-in ${pkg.popular ? 'border-primary scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {pkg.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm">
                      🔥 ПОПУЛЯРНОЕ
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <img src="https://cdn.poehali.dev/projects/828eca86-0d70-47a4-a143-a9b62f61fe2f/files/dddce093-36ff-4cf5-8845-59f561335237.jpg" alt="Gold" className="w-24 h-24 object-contain mx-auto" />
                    </div>
                    <CardTitle className="font-oswald text-3xl">{pkg.amount.toLocaleString()}</CardTitle>
                    {pkg.bonus > 0 && (
                      <Badge variant="outline" className="mt-2 border-primary text-primary">
                        +{pkg.bonus} бонус
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.price}₽</div>
                    <p className="text-sm text-muted-foreground">Моментальная доставка</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                      <Icon name="Coins" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-oswald font-bold mb-8">ОТЗЫВЫ КЛИЕНТОВ</h2>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <Card key={review.id} className="bg-card border-border animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex gap-1 mt-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-primary/10 border-primary/30 mt-8 animate-scale-in">
              <CardContent className="pt-6 text-center">
                <div className="text-6xl font-oswald font-bold text-primary mb-2">4.9</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">На основе 500+ отзывов</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-4xl font-oswald font-bold mb-8 text-center">КОНТАКТЫ</h2>
            <Card className="bg-card border-border">
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Telegram</div>
                    <div className="text-muted-foreground">@standoff_shop</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">support@standoffshop.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Режим работы</div>
                    <div className="text-muted-foreground">24/7 без выходных</div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Info" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Гарантии</h3>
                      <p className="text-sm text-muted-foreground">
                        Мы работаем официально и предоставляем полную гарантию на все товары. 
                        Средняя скорость доставки — 3 минуты.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 STANDOFF SHOP. Все права защищены.</p>
          <p className="text-sm mt-2">Мы не связаны с разработчиками Standoff 2</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
