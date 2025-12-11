/* Layout Component - A component that wraps the main content of the app
   - Wraps the entire application content.
   - Configured to occupy 100% of the viewport width and height.
   - Vertically centers content.
*/

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className="relative flex flex-col min-h-screen w-full items-center justify-center bg-background overflow-x-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center py-8 px-4 md:px-0 max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </main>
  )
}
