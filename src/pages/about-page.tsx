import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const stack = [
  "Vite як dev/build основа",
  "React + TypeScript для typed SPA",
  "HashRouter для стабільної роботи на GitHub Pages",
  "TailwindCSS для швидкого UI-шару",
  "shadcn/ui-style компоненти як база для дизайну",
  "Build output напряму в /docs",
];

export function AboutPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="p-8">
        <Badge>Architecture</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Технологічна база</h1>
        <p className="mt-4 leading-8 text-muted-foreground">
          Це стартова основа для курсу або міні-платформи з уроками. Вона не перевантажена,
          але вже підготовлена до реальної роботи: маршрути, візуальна система, типізація,
          нарощування сторінок і деплой на GitHub Pages без зайвих хаков.
        </p>
      </Card>

      <Card className="p-8">
        <div className="space-y-4">
          {stack.map((item, index) => (
            <div
              key={item}
              className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
                0{index + 1}
              </div>
              <p className="mt-2 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
