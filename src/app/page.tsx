import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          ShoreAgents Shared UI
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Ready for shadcn/ui components
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/demo">
              View Demo Page
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://ui.shadcn.com/" target="_blank">
              Visit shadcn/ui
            </Link>
          </Button>
        </div>
        <div className="mt-8 p-4 bg-muted rounded-lg max-w-md">
          <p className="text-sm text-muted-foreground">
            🎉 All 46 shadcn/ui components installed and ready to use!
          </p>
        </div>
      </div>
    </main>
  )
} 