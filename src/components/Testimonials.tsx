import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Анна Соколова",
    event: "Европейский фестивальный тур",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Это было лучшее путешествие в моей жизни! Организация на высшем уровне — каждая деталь продумана. Горизонт событий превратил обычную поездку в настоящее приключение.",
  },
  {
    name: "Михаил Петров",
    event: "Африканская сафари-экспедиция",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Видел слонов на закате в Серенгети — это невозможно описать словами. Команда сопровождала нас на каждом шагу, чувствовалась полная уверенность и безопасность.",
  },
  {
    name: "Елена Крылова",
    event: "Азиатский культурный маршрут",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Бали, Бангкок, Сингапур за 10 дней — и ни минуты суеты. Всё было гармонично и насыщенно. Уже записалась на следующее событие в Японию!",
  },
  {
    name: "Дмитрий Волков",
    event: "Исландская экспедиция",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Северное сияние над водопадом — момент, который я буду помнить всю жизнь. Спасибо команде за этот невероятный опыт и профессиональный подход.",
  },
  {
    name: "Ольга Романова",
    event: "Гастрономический тур, Италия",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Паста в Болонье, трюфели в Умбрии, вино в Тоскане — мечта гурмана! Маршрут составлен с любовью к еде и культуре. Очень рекомендую всем.",
  },
  {
    name: "Сергей Новиков",
    event: "Корпоративный тур, Дубай",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Организовывали корпоративное событие для 30 человек. Всё прошло идеально: трансферы, отель, программа. Коллеги до сих пор вспоминают с восхищением.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Истории наших <span className="font-semibold">участников</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Реальные впечатления людей, которые уже побывали на наших событиях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="p-8 border-0 bg-muted/30 hover:bg-muted/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8 italic">
                «{item.text}»
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{item.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.event}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
