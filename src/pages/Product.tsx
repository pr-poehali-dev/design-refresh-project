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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const product = {
    id: 1,
    name: "Амортизатор ДЕМФИ передний для ВАЗ 2110-2112",
    price: 2850,
    oldPrice: 3200,
    rating: 4.8,
    reviews: 156,
    images: [
      "/img/077507e3-c381-45f1-8203-4ca30584c92f.jpg",
      "/img/563695b5-bcf3-4863-ba69-fdb2161cf9af.jpg",
      "/img/76dff232-58d7-47be-a092-a528fe5fd4b8.jpg",
    ],
    badge: "Хит продаж",
    inStock: true,
    article: "DF-2110-F",
    manufacturer: "ДЕМФИ",
    warranty: "12 месяцев",
    weight: "1.2 кг",
    compatibility: ["ВАЗ 2110", "ВАЗ 2111", "ВАЗ 2112"],
    description:
      "Передний амортизатор ДЕМФИ для автомобилей ВАЗ 2110-2112 серии. Изготовлен из высококачественных материалов, обеспечивает отличную управляемость и комфорт при движении.",
    features: [
      "Газомасляный тип",
      "Монотрубная конструкция",
      "Хромированный шток",
      "Усиленные уплотнители",
      "Антикоррозийное покрытие",
    ],
    specifications: {
      "Тип амортизатора": "Газомасляный",
      Конструкция: "Монотрубная",
      "Диаметр штока": "14 мм",
      "Диаметр поршня": "30 мм",
      "Ход сжатия": "130 мм",
      "Ход отбоя": "180 мм",
      "Рабочее давление": "25 атм",
    },
  };

  const relatedProducts = [
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
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + quantity);
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
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-[#005BFF] font-medium"
            >
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
            <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
            <Link
              to="/catalog/amortizatory"
              className="text-gray-500 hover:text-[#005BFF]"
            >
              Амортизаторы
            </Link>
            <Icon name="ChevronRight" className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg border"
              />
              <Badge
                className={`absolute top-4 left-4 text-sm ${
                  product.badge === "Хит продаж"
                    ? "bg-[#FF6B35] text-white"
                    : "bg-[#005BFF] text-white"
                }`}
              >
                {product.badge}
              </Badge>
            </div>
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                    selectedImage === index
                      ? "border-[#005BFF]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-500">Артикул: {product.article}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Icon
                  name="Star"
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
                <span className="text-lg font-medium text-gray-900 ml-1">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-500">({product.reviews} отзывов)</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                {product.price.toLocaleString()} ₽
              </span>
              {product.oldPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.oldPrice.toLocaleString()} ₽
                </span>
              )}
              {product.oldPrice && (
                <Badge className="bg-red-100 text-red-800">
                  Скидка{" "}
                  {Math.round((1 - product.price / product.oldPrice) * 100)}%
                </Badge>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Icon
                name={product.inStock ? "CheckCircle" : "XCircle"}
                className={`w-5 h-5 ${
                  product.inStock ? "text-green-500" : "text-red-500"
                }`}
              />
              <span
                className={`font-medium ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "В наличии" : "Нет в наличии"}
              </span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Производитель:</span>
                  <span className="font-medium ml-2">
                    {product.manufacturer}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Гарантия:</span>
                  <span className="font-medium ml-2">{product.warranty}</span>
                </div>
                <div>
                  <span className="text-gray-500">Вес:</span>
                  <span className="font-medium ml-2">{product.weight}</span>
                </div>
                <div>
                  <span className="text-gray-500">Совместимость:</span>
                  <span className="font-medium ml-2">
                    {product.compatibility.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Icon name="Minus" className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Icon name="Plus" className="w-4 h-4" />
                </Button>
              </div>
              <Button
                onClick={addToCart}
                disabled={!product.inStock}
                className="flex-1 bg-[#005BFF] hover:bg-[#0051CC] text-white"
              >
                <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1">
                <Icon name="Heart" className="w-4 h-4 mr-2" />В избранное
              </Button>
              <Button variant="outline">
                <Icon name="Share2" className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">
                  Отзывы ({product.reviews})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Описание товара
                  </h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <h4 className="font-medium mb-2">Особенности:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <Icon
                          name="Check"
                          className="w-4 h-4 text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="specifications">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Технические характеристики
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-200"
                        >
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Отзывы покупателей
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div
                        key={review}
                        className="border-b border-gray-200 pb-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">
                              Покупатель {review}
                            </span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  className={`w-4 h-4 ${
                                    i < 4
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">
                            2 дня назад
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Отличный амортизатор! Качество сборки на высоте,
                          установка прошла без проблем. Рекомендую к покупке.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Похожие товары
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="hover:shadow-lg transition-shadow bg-white border-gray-200"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-2 left-2 text-xs ${
                        relatedProduct.badge === "Скидка 12%"
                          ? "bg-red-500 text-white"
                          : relatedProduct.badge === "Новинка"
                            ? "bg-green-500 text-white"
                            : "bg-[#005BFF] text-white"
                      }`}
                    >
                      {relatedProduct.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#005BFF]">
                      {relatedProduct.name}
                    </CardTitle>
                  </Link>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                      <span className="text-sm font-medium text-gray-900 ml-1">
                        {relatedProduct.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({relatedProduct.reviews} отзывов)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {relatedProduct.price.toLocaleString()} ₽
                    </span>
                    {relatedProduct.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {relatedProduct.oldPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-[#005BFF] hover:bg-[#0051CC] text-white"
                    size="sm"
                  >
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
