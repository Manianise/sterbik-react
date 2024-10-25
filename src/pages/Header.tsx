import { Outlet, Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";

export default function Header() {

    return (
      <>
      <Navbar fluid className="fixed border-b w-full z-50">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Famille Sterbik</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>

          <Navbar.Link as={Link} to="/">Home</Navbar.Link>
          <Navbar.Link as={Link} to="/alain">Alain</Navbar.Link>
          <Navbar.Link as={Link} to="/pa">Pierre-Alexandre</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
    </Navbar>
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center dark:bg-gray-800">
      <div className="h-24"></div>
      <Outlet />
    </main>
      </>
    )
  };