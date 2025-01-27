import { CustomButton } from "./ui/custom-button"

interface HeroProps {
  backgroundImage: string
  subtitle?: string
  title: string[]
  description?: string
}

export function Hero({ backgroundImage, subtitle, title, description }: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] flex items-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {subtitle && <p className="text-lg tracking-wide">{subtitle}</p>}
            <h1 className="text-4xl md:text-[56px] font-bold leading-[1.2]">
              {title.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="flex gap-4 pt-4">
              <CustomButton>SERVICES</CustomButton>
              <CustomButton>CONTACT US</CustomButton>
            </div>
          </div>

          {/* Right Column */}
          {description && (
            <div className="md:pl-8">
              <p className="text-lg leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

