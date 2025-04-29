import type React from "react"
import { cn } from "@/lib/utils"

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("relative space-y-8", className)}>{children}</div>
}

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
}

export function TimelineItem({ children, className }: TimelineItemProps) {
  return <div className={cn("relative pb-8", className)}>{children}</div>
}

interface TimelineConnectorProps {
  className?: string
}

export function TimelineConnector({ className }: TimelineConnectorProps) {
  return (
    <div
      className={cn("absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500", className)}
    />
  )
}

interface TimelineHeaderProps {
  children: React.ReactNode
  className?: string
}

export function TimelineHeader({ children, className }: TimelineHeaderProps) {
  return <div className={cn("flex items-start gap-4", className)}>{children}</div>
}

interface TimelineIconProps {
  children: React.ReactNode
  className?: string
}

export function TimelineIcon({ children, className }: TimelineIconProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface TimelineBodyProps {
  children: React.ReactNode
  className?: string
}

export function TimelineBody({ children, className }: TimelineBodyProps) {
  return <div className={cn("ml-12", className)}>{children}</div>
}
