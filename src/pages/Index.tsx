import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isFree, setIsFree] = useState(false);
  const { toast } = useToast();
  
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    category: 'gems',
    description: '',
    emoji: '💎',
    seller: 'Вы'
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      title: '💎 10000 Геммов',
      price: '5499 ₽',
      category: 'gems',
      image: '💎',
      seller: 'ProGems',
      rating: '4.9',
    },
    {
      id: 2,
      title: '🎮 Аккаунт 50000 🏆',
      price: '8999 ₽',
      category: 'accounts',
      image: '🎮',
      seller: 'StarSeller',
      rating: '5.0',
    },
    {
      id: 3,
      title: '⭐ Бравл Пасс',
      price: '899 ₽',
      category: 'pass',
      image: '⭐',
      seller: 'BrawlShop',
      rating: '4.8',
    },
    {
      id: 4,
      title: '🎨 Набор обложек YouTube',
      price: '1299 ₽',
      category: 'content',
      image: '🎨',
      seller: 'DesignPro',
      rating: '4.9',
    },
    {
      id: 5,
      title: '🔥 Легендарный скин Crow',
      price: '2499 ₽',
      category: 'skins',
      image: '🔥',
      seller: 'SkinMaster',
      rating: '5.0',
    },
    {
      id: 6,
      title: '🚀 Прокачка персонажа',
      price: '699 ₽',
      category: 'services',
      image: '🚀',
      seller: 'BoostTeam',
      rating: '4.7',
    },
  ]);

  const handleCreateProduct = () => {
    if (!newProduct.title || (!isFree && !newProduct.price)) {
      toast({
        title: '⚠️ Ошибка',
        description: 'Заполните название и цену товара',
        variant: 'destructive'
      });
      return;
    }

    const product = {
      id: products.length + 1,
      title: `${newProduct.emoji} ${newProduct.title}`,
      price: isFree ? 'Бесплатно' : `${newProduct.price} ₽`,
      category: newProduct.category,
      image: newProduct.emoji,
      seller: newProduct.seller,
      rating: '5.0'
    };

    setProducts([product, ...products]);
    setIsCreateDialogOpen(false);
    
    toast({
      title: '✅ Товар создан!',
      description: 'Ваш товар появился в каталоге'
    });

    setNewProduct({
      title: '',
      price: '',
      category: 'gems',
      description: '',
      emoji: '💎',
      seller: 'Вы'
    });
    setIsFree(false);
  };

  const categories = [
    { id: 'gems', name: 'Геммы', icon: '💎' },
    { id: 'accounts', name: 'Аккаунты', icon: '🎮' },
    { id: 'skins', name: 'Скины', icon: '🔥' },
    { id: 'pass', name: 'Бравл Пасс', icon: '⭐' },
    { id: 'content', name: 'Контент', icon: '🎨' },
    { id: 'services', name: 'Услуги', icon: '🚀' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <div className="text-3xl animate-float">⚡</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Brawl Marketplace
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`font-medium transition-colors ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveSection('sellers')}
                className={`font-medium transition-colors ${activeSection === 'sellers' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Продавцы
              </button>
              <button 
                onClick={() => setActiveSection('profile')}
                className={`font-medium transition-colors ${activeSection === 'profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Мой профиль
              </button>
              <button 
                onClick={() => setActiveSection('support')}
                className={`font-medium transition-colors ${activeSection === 'support' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Поддержка
              </button>
            </div>

            <Button 
              onClick={() => setIsCreateDialogOpen(true)}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-scale glow-effect"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Добавить товар
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-lg px-4 py-2">
              🛡️ Эскроу-защита сделок
            </Badge>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Твой маркетплейс для Brawl Stars
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Покупай и продавай геммы, аккаунты, скины и контент. Безопасно, быстро и надёжно.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-scale glow-effect text-lg px-8">
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover-scale text-lg px-8">
                <Icon name="Store" size={24} className="mr-2" />
                Стать продавцом
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <Card 
                key={cat.id}
                className="p-6 text-center hover:bg-primary/10 transition-all cursor-pointer hover-scale border-primary/20 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <p className="font-medium text-sm">{cat.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">🔥 Популярные товары</h3>
              <p className="text-muted-foreground">Лучшие предложения от проверенных продавцов</p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Смотреть все
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Card 
                key={product.id}
                className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all hover-scale animate-fade-in group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{product.title}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {product.seller}
                      </p>
                    </div>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      ⭐ {product.rating}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">🛡️ Эскроу-защита</h3>
              <p className="text-lg text-muted-foreground">
                Ваша безопасность — наш приоритет
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-primary/30 animate-fade-in">
                <div className="text-5xl mb-4">🔒</div>
                <h4 className="font-bold mb-2">Защита средств</h4>
                <p className="text-sm text-muted-foreground">
                  Деньги хранятся на безопасном счёте до завершения сделки
                </p>
              </Card>

              <Card className="p-6 text-center border-secondary/30 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl mb-4">✅</div>
                <h4 className="font-bold mb-2">Проверка товара</h4>
                <p className="text-sm text-muted-foreground">
                  Получите товар и проверьте его перед оплатой продавцу
                </p>
              </Card>

              <Card className="p-6 text-center border-accent/30 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl mb-4">💬</div>
                <h4 className="font-bold mb-2">Поддержка 24/7</h4>
                <p className="text-sm text-muted-foreground">
                  Наша команда поможет решить любой спор
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl">⚡</div>
              <span className="font-bold text-lg">Brawl Marketplace</span>
            </div>
            
            <p className="text-muted-foreground text-sm">
              © 2024 Brawl Marketplace. Все права защищены.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">🎮 Создать товар</DialogTitle>
            <DialogDescription>
              Добавьте свой товар в маркетплейс Brawl Stars
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="emoji">Эмодзи товара</Label>
              <Select value={newProduct.emoji} onValueChange={(value) => setNewProduct({...newProduct, emoji: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="💎">💎 Геммы</SelectItem>
                  <SelectItem value="🎮">🎮 Аккаунт</SelectItem>
                  <SelectItem value="🔥">🔥 Скин</SelectItem>
                  <SelectItem value="⭐">⭐ Бравл Пасс</SelectItem>
                  <SelectItem value="🎨">🎨 Контент</SelectItem>
                  <SelectItem value="🚀">🚀 Услуга</SelectItem>
                  <SelectItem value="🎁">🎁 Подарок</SelectItem>
                  <SelectItem value="⚔️">⚔️ Буст</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Название товара *</Label>
              <Input
                id="title"
                placeholder="Например: 10000 Геммов"
                value={newProduct.title}
                onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gems">Геммы</SelectItem>
                  <SelectItem value="accounts">Аккаунты</SelectItem>
                  <SelectItem value="skins">Скины</SelectItem>
                  <SelectItem value="pass">Бравл Пасс</SelectItem>
                  <SelectItem value="content">Контент</SelectItem>
                  <SelectItem value="services">Услуги</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                placeholder="Расскажите о вашем товаре подробнее..."
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2 p-4 bg-accent/10 rounded-lg">
              <Switch
                id="free"
                checked={isFree}
                onCheckedChange={setIsFree}
              />
              <Label htmlFor="free" className="cursor-pointer">
                🎁 Сделать товар бесплатным
              </Label>
            </div>

            {!isFree && (
              <div className="space-y-2">
                <Label htmlFor="price">Цена (₽) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="999"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleCreateProduct}
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-effect"
              >
                <Icon name="Check" size={20} className="mr-2" />
                Создать товар
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Отмена
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;