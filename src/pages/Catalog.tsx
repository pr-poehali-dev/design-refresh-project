import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Catalog = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [cartCount, setCartCount] = useState(0);

  const categoryMap = {
    amortizatory: "Амортизаторы",
    stoyki: "Стойки",
    pruzhiny: "Пружины",
    tehnoresory: "Технорессоры",
    podveska: "Подвеска",
    vaz: "Запчасти ВАЗ",
  };

  const currentCategory =
    categoryMap[category as keyof typeof categoryMap] || "Все товары";

  const filters = [
    { name: "Марка автомобиля", options: ["ВАЗ", "УАЗ", "ГАЗ", "Москвич"] },
    { name: "Модель", options: ["2110", "2111", "2112", "Калина", "Приора"] },
    {
      name: "Цена",
      options: ["До 2000", "2000-5000", "5000-10000", "Свыше 10000"],
    },
    { name: "Наличие", options: ["В наличии", "Под заказ"] },
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
      category: "amortizatory",
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
      category: "stoyki",
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
      category: "pruzhiny",
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
      category: "tehnoresory",
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
      category: "amortizatory",
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
      category: "stoyki",
    },
    {
      id: 7,
      name: "Амортизатор передний ДЕМФИ для ВАЗ 2107",
      price: 2450,
      oldPrice: 2800,
      rating: 4.7,
      reviews: 98,
      image: "/img/077507e3-c381-45f1-8203-4ca30584c92f.jpg",
      badge: "Классика",
      inStock: true,
      category: "amortizatory",
    },
    {
      id: 8,
      name: "Стойка стабилизатора ДЕМФИ универсальная",
      price: 890,
      oldPrice: 1100,
      rating: 4.5,
      reviews: 67,
      image: "/img/563695b5-bcf3-4863-ba69-fdb2161cf9af.jpg",
      badge: "Бюджетный",
      inStock: true,
      category: "stoyki",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#005BFF] rounded-lg flex items-center justify-center">
                  <Icon name="Car" className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  АвтоподвескА
                </span>
              </Link>
            </div>

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
            <Link
              to="/"
              className="text-gray-700 hover:text-[#005BFF] font-medium"
            >
              Главная
            </Link>
            <Link to="/catalog" className="text-[#005BFF] font-medium">
              Каталог
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#005BFF]">
              Главная
            </Link>
            <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
            <Link to="/catalog" className="text-gray-500 hover:text-[#005BFF]">
              Каталог
            </Link>
            {category && (
              <>
                <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900">{currentCategory}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Фильтры
              </h3>
              {filters.map((filter, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    {filter.name}
                  </h4>
                  <div className="space-y-2">
                    {filter.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-[#005BFF] focus:ring-[#005BFF]"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {currentCategory}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {filteredProducts.length} товаров
                </span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price_asc">
                      По цене (возрастание)
                    </SelectItem>
                    <SelectItem value="price_desc">
                      По цене (убывание)
                    </SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="newest">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
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
                    <Link to={`/product/${product.id}`}>
                      <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#005BFF]">
                        {product.name}
                      </CardTitle>
                    </Link>

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
        </div>
      </div>
    </div>
  );
};

export default Catalog;
