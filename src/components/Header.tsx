import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { routePath } from '@/route/routePath'

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const handleAuthClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <header className="bg-white shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/" className="font-bold text-xl text-primary">
                            InstaSync
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link to={routePath.login} className="text-gray-500 hover:text-gray-900">
                            Features
                        </Link>
                        <Link to="/pricing" className="text-gray-500 hover:text-gray-900">
                            Pricing
                        </Link>
                        <Link to="/about" className="text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                    </nav>
                    <div className="hidden md:block">
                        <Button onClick={handleAuthClick}>
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={toggleMenu}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Full-screen menu for mobile */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4">
                        <Link to="/" className="font-bold text-xl text-primary" onClick={toggleMenu}>
                            InstaSync
                        </Link>
                        <Button variant="ghost" size="icon" onClick={toggleMenu}>
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link to="/features" className="text-gray-500 hover:text-gray-900 text-lg" onClick={toggleMenu}>
                            Features
                        </Link>
                        <Link to="/pricing" className="text-gray-500 hover:text-gray-900 text-lg" onClick={toggleMenu}>
                            Pricing
                        </Link>
                        <Link to="/about" className="text-gray-500 hover:text-gray-900 text-lg" onClick={toggleMenu}>
                            About
                        </Link>
                    </nav>
                    <div className="mt-auto p-4">
                        <Button onClick={() => { handleAuthClick(); toggleMenu(); }} className="w-full">
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

