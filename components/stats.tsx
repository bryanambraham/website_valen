import { Counter } from "./Counter";

export function Stats() {
  return (
    <div className="bg-[#2A1810] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={9000} suffix="+" title="Projects Succeded" />
          <Counter end={97} suffix="%" title="Satisfied Clients" />
          <Counter end={90} suffix="%" title="Worth of Mouth Marketing" />
          <Counter end={93} suffix="%" title="Repeat Order" />
        </div>
      </div>
    </div>
  )
}

