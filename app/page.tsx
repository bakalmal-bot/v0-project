"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardView } from "@/components/views/dashboard-view"
import { ApplicationsView } from "@/components/views/applications-view"
import { PairsView } from "@/components/views/pairs-view"
import { MentorsView } from "@/components/views/mentors-view"
import { SessionsView } from "@/components/views/sessions-view"
import { EvaluationsView } from "@/components/views/evaluations-view"
import { NotificationsView } from "@/components/views/notifications-view"
import { ReportsView } from "@/components/views/reports-view"
import { SettingsView } from "@/components/views/settings-view"

export default function MentoringApp() {
  const [activeView, setActiveView] = useState("dashboard")

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />
      case "applications":
        return <ApplicationsView />
      case "pairs":
        return <PairsView />
      case "mentors":
        return <MentorsView />
      case "sessions":
        return <SessionsView />
      case "evaluations":
        return <EvaluationsView />
      case "notifications":
        return <NotificationsView />
      case "reports":
        return <ReportsView />
      case "settings":
        return <SettingsView />
      default:
        return <DashboardView />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  )
}
