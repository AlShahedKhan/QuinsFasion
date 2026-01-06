import React from "react";
import Navbar from "../Components/Navbar";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
export default MainLayout;
