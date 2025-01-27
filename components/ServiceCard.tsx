"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


interface ServiceCardProps {
  title: string
  subtitle?: string
  requirements: {
    title: string
    description?: string
    items: string[]
  }
  process: {
    title: string
    items: string[]
  }
}

export function ServiceCard({ title, subtitle, requirements, process }: ServiceCardProps) {
  return (
    <Card className="h-full bg-white shadow-lg flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {/* <Icon className="h-8 w-8 text-[#6B4536] shrink-0" /> */}
          <div>
            <CardTitle className="text-[#6B4536] font-bold">{title}</CardTitle>
            {subtitle && <p className="text-[#6B4536] mt-1">{subtitle}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="space-y-6 flex-grow">
          <div>
            <h4 className="font-semibold mb-2">{requirements.title}</h4>
            {requirements.description && <p className="text-sm mb-4">{requirements.description}</p>}
            <ul className="list-decimal pl-5 space-y-2 text-sm">
              {requirements.items.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{process.title}:</h4>
            <ul className="list-decimal pl-5 space-y-2 text-sm">
              {process.items.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            className="bg-[#6B4536] hover:bg-[#8B6556] text-white px-8"
            // onClick={() => (window.location.href = "https://wa.me/your-number")}
          >
            Hubungi Kami
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

