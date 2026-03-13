import LeftSidebar from "@/components/LeftSidebar"
import TopBar from "@/components/TopBar"

function Layout({ children }) {
  return (
    <div className="flex">

      <LeftSidebar />

      <div className="flex-1">

        <TopBar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  )
}

export default Layout