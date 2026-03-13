import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthLayout({ title, description, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 p-4">
      <Card className="w-full max-w-md border-zinc-200 shadow-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          {description && (
            <p className="text-sm text-zinc-500">{description}</p>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
