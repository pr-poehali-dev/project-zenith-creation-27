import { Globe, Shield, Headphones, Award } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Авторские маршруты",
    description: "Каждое событие разработано нашей командой — уникальный опыт, которого нет в стандартных турах",
  },
  {
    icon: Shield,
    title: "Надёжная организация",
    description: "Полное сопровождение: визы, страховки, трансферы и размещение — всё включено",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Наш менеджер всегда на связи — до, во время и после события",
  },
  {
    icon: Award,
    title: "Опыт с 2015 года",
    description: "Более 10 лет в организации туристических событий — тысячи довольных участников",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Горизонт событий</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы превращаем путешествия в настоящие события — яркие, осмысленные и незабываемые
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}