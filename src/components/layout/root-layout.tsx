import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "./mobile-header";
import MobileDrawer from "./mobile-drawer";

const RootLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <MobileHeader onMenuClick={() => setIsDrawerOpen(true)} />

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <Outlet />
    </>
  );
};

export default RootLayout;