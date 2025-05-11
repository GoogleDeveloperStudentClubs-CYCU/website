import Link from 'next/link';
import { GdgLogo } from '@/components/icons/GdgLogo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ExternalLink } from 'lucide-react';

const navItems = [
  { href: '/', label: '首頁' },
  { href: '/team', label: '核心團隊' },
  { Icon: ExternalLink, href: 'https://discord.gg/JvgVxre5xt', label: '加入我們的 Discord' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <GdgLogo />
          <span className="font-bold sm:inline-block">
            GDG On Campus CYCU
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(({ Icon, href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {label}
              {Icon && (
                        <Icon className="ml-1 h-4 w-4 inline" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
              <Link href="/" className="mr-8 flex items-center space-x-2 mb-8">
                <GdgLogo />
                <span className="font-bold">
                  GDG On Campus CYCU
                </span>
              </Link>
                <nav className="flex flex-col space-y-4">
                  {navItems.map(({ Icon, href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {label}
                      {Icon && (
                        <Icon className="ml-1 h-4 w-4 inline" />
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
