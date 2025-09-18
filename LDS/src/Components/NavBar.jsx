import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Features', href: '#', current: false },
  { name: 'FAQs', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="relative bg-[#0B0130]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.jpg"  
              className="rounded-full w-14 h-14 shadow-lg"  
              alt="Logo"
            />
            <h2 className="text-white text-lg font-bold leading-tight pt-2">
              The Legal <br/> Demystifier
            </h2>
          </div>

          <div className="hidden sm:flex items-center space-x-6 pl-32">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                  'rounded-md px-5 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                item.current 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
