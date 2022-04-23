import { classNames } from '@/utils/classNames';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../logo';
import AuthButtons from './auth-buttons';
import navbarStyles from './styles/navbar.module.css';

const navigation = [
  { name: 'Features', href: '#', current: false },
  { name: 'Plans', href: '#', current: false },
  { name: 'Enterprise', href: '#', current: false },
  { name: 'Download', href: '#', current: false }
];

export default function Theheader() {
  return (
    <header aria-labelledby="navigation" role="navigation">
      <Disclosure as="nav" className={navbarStyles.navbar}>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className={navbarStyles.navbarBtn}>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className={navbarStyles.wrapper}>
                  <div className="flex-shrink-0 flex items-center">
                    <Logo />
                  </div>
                  <div
                    className="hidden sm:block sm:ml-14"
                    aria-label="menu links"
                  >
                    <div className="flex">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? navbarStyles.linkActive
                              : navbarStyles.linkHover,
                            'px-4 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <AuthButtons breakpoint="large" />
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1" aria-label="menu links">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? navbarStyles.linkActive
                        : navbarStyles.linkHover,
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <AuthButtons breakpoint="small" />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
