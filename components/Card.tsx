import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  reverse?: boolean
}

export function InfoCard({ title, description, imageUrl, imageAlt, reverse = false }: InfoCardProps) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-6">
        <div
          className={cn(
            "flex flex-col gap-8 items-center",
            "lg:flex-row lg:items-start",
            reverse && "lg:flex-row-reverse",
          )}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold leading-tight lg:text-3xl">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

