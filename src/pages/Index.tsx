import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { name: "Амортизаторы", icon: "Zap", count: "200+" },
    { name: "Стойки", icon: "Wrench", count: "150+" },
    { name: "Пружины", icon: "Circle", count: "100+" },
    { name: "Технорессоры", icon: "Cog", count: "80+" },
    { name: "Подвеска", icon: "Gauge", count: "300+" },
    { name: "Запчасти ВАЗ", icon: "Car", count: "500+" },
  ];

  const products = [
    {
      id: 1,
      name: "Амортизатор ДЕМФИ передний для ВАЗ 2110-2112",
      price: 2850,
      oldPrice: 3200,
      rating: 4.8,
      reviews: 156,
      image: "/img/077507e3-c381-45f1-8203-4ca30584c92f.jpg",
      badge: "Хит продаж",
      inStock: true,
    },
    {
      id: 2,
      name: "Стойка передняя левая ДЕМФИ для Лада Калина",
      price: 4200,
      oldPrice: 4800,
      rating: 4.9,
      reviews: 89,
      image: "/img/563695b5-bcf3-4863-ba69-fdb2161cf9af.jpg",
      badge: "Скидка 12%",
      inStock: true,
    },
    {
      id: 3,
      name: "Комплект пружин занижения ДЕМФИ -50мм",
      price: 6500,
      oldPrice: 7200,
      rating: 4.7,
      reviews: 234,
      image: "/img/76dff232-58d7-47be-a092-a528fe5fd4b8.jpg",
      badge: "Новинка",
      inStock: true,
    },
    {
      id: 4,
      name: "Технорессор задний ДЕМФИ универсальный",
      price: 1890,
      oldPrice: 2100,
      rating: 4.6,
      reviews: 78,
      image: "/img/077507e3-c381-45f1-8203-4ca30584c92f.jpg",
      badge: "Акция",
      inStock: false,
    },
    {
      id: 5,
      name: "Амортизатор задний ДЕМФИ для ВАЗ 2108-2115",
      price: 2640,
      oldPrice: 2950,
      rating: 4.8,
      reviews: 192,
      image: "/img/563695b5-bcf3-4863-ba69-fdb2161cf9af.jpg",
      badge: "Популярный",
      inStock: true,
    },
    {
      id: 6,
      name: "Стойка задняя правая ДЕМФИ для Приора",
      price: 3980,
      oldPrice: 4400,
      rating: 4.9,
      reviews: 145,
      image: "/img/76dff232-58d7-47be-a092-a528fe5fd4b8.jpg",
      badge: "Рекомендуем",
      inStock: true,
    },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#005BFF] rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  АвтоподвескА
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005BFF] focus:border-transparent"
                />
                <Icon
                  name="Search"
                  className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-[#005BFF]"
              >
                <Icon name="User" className="w-5 h-5 mr-2" />
                Войти
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-[#005BFF] relative"
              >
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Корзина
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FF6B35] text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-[#005BFF] font-medium"
            >
              <Icon name="Menu" className="w-4 h-4 mr-2" />
              Каталог
            </Button>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                ДЕМФИ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                Подбор по авто
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                Доставка
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#005BFF] font-medium"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#005BFF] to-[#0066FF] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Стойки и амортизаторы ДЕМФИ
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Интернет-магазин автозапчастей. Качественные стойки и амортизаторы
              ДЕМФИ для отечественных автомобилей.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white text-sm px-4 py-2"
              >
                ✓ Гарантия производителя
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white text-sm px-4 py-2"
              >
                ✓ Доставка по России
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white text-sm px-4 py-2"
              >
                ✓ Заводские цены
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Категории товаров
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-gray-200"
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-[#005BFF]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={category.icon}
                      className="w-6 h-6 text-[#005BFF]"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Популярные товары
            </h2>
            <Button
              variant="outline"
              className="border-[#005BFF] text-[#005BFF] hover:bg-[#005BFF] hover:text-white"
            >
              Показать все
              <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow bg-white border-gray-200"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-2 left-2 text-xs ${
                        product.badge === "Хит продаж"
                          ? "bg-[#FF6B35] text-white"
                          : product.badge === "Скидка 12%"
                            ? "bg-red-500 text-white"
                            : product.badge === "Новинка"
                              ? "bg-green-500 text-white"
                              : product.badge === "Акция"
                                ? "bg-purple-500 text-white"
                                : "bg-[#005BFF] text-white"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </CardTitle>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-medium text-gray-900 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} отзывов)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon
                        name={product.inStock ? "CheckCircle" : "XCircle"}
                        className={`w-4 h-4 mr-2 ${
                          product.inStock ? "text-green-500" : "text-red-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          product.inStock ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.inStock ? "В наличии" : "Нет в наличии"}
                      </span>
                    </div>
                    <Button
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className="bg-[#005BFF] hover:bg-[#0051CC] text-white"
                      size="sm"
                    >
                      <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#005BFF] rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">АвтоподвескА</span>
              </div>
              <p className="text-gray-400 text-sm">
                Интернет-магазин автозапчастей. Качественные стойки и
                амортизаторы ДЕМФИ.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Каталог ДЕМФИ</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Амортизаторы ДЕМФИ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Стойки ДЕМФИ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Пружины занижения
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Технорессоры
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О производителе ДЕМФИ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гарантия
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Подбор по VIN
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  <span>8 (800) 555-ДЕМФИ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  <span>info@автоподвеска.рф</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  <span>Россия, склады в 15 городах</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="text-center text-sm text-gray-400">
            © 2025 АвтоподвескА. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
