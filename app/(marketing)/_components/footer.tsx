import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 p-4 w-full  px-4 border-t bg-slate-100">
      <div className="flex float-end">
        <Button size="sm" variant="ghost">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Term of Service
        </Button>
      </div>
    </div>
  )
}
