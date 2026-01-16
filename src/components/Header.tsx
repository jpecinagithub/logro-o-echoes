import { NavLink } from 'react-router-dom';
import { Moon, Sun, Map, Image, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/appStore';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/', icon: Map, label: 'Mapa' },
  { to: '/album', icon: Image, label: 'Álbum' },
  { to: '/quiz', icon: Brain, label: 'Trivial' },
];

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useAppStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-primary to-accent w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold">L</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-base leading-tight text-foreground">
              Logroño 1915–1925
            </h1>
            <p className="text-xs text-muted-foreground leading-tight">
              Ruta San Josemaría
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex items-center gap-1 bg-secondary/50 p-1 rounded-full">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )
              }
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
        </nav>
        
        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="h-10 w-10 rounded-full"
          aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
