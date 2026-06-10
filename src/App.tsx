import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">
            Rental Manager — Pipeline OK
          </CardTitle>
          <CardDescription>
            Sprint 0 scaffold: Vite + React + TypeScript + Tailwind + shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            If you can read this on the live URL, the deploy pipeline works.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
