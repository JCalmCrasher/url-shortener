import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../logo';
import AuthButtons from './auth-buttons';
import navbarStyles from './styles/navbar.module.css';

export default function TheHeader() {
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
                </div>
                <AuthButtons
                  others={{ title: 'Account management coming soon' }}
                  breakpoint="large"
                />
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1" aria-label="menu links">
                <AuthButtons
                  others={{ title: 'Account management coming soon' }}
                  breakpoint="small"
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
