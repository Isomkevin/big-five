import { Link } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  MenuItems,
  MenuButton,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';
import {
  BellIcon,
  ChevronDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export default function DashboardComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="#">
            <a className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <CurrencyDollarIcon className="h-6 w-6" />
              <span className="sr-only">Big Five</span>
            </a>
          </Link>
          <Link to="#">
            <a className="text-gray-700 transition-colors hover:text-gray-900">
              Dashboard
            </a>
          </Link>
          <Link to="#">
            <a className="text-gray-500 transition-colors hover:text-gray-900">
              Orders
            </a>
          </Link>
          <Link to="#">
            <a className="text-gray-500 transition-colors hover:text-gray-900">
              Products
            </a>
          </Link>
          <Link to="#">
            <a className="text-gray-500 transition-colors hover:text-gray-900">
              Customers
            </a>
          </Link>
          <Link to="#">
            <a className="text-gray-500 transition-colors hover:text-gray-900">
              Analytics
            </a>
          </Link>
        </nav>
        <Menu as="div" className="relative">
          <MenuButton className="shrink-0 md:hidden p-2 rounded-md border border-gray-300">
            <Bars3Icon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`flex items-center gap-2 px-4 py-2 text-lg font-semibold ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        <CurrencyDollarIcon className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                      </a>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Dashboard
                      </a>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Orders
                      </a>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Products
                      </a>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Customers
                      </a>
                    </Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ focus }) => (
                    <Link to="#">
                      <a
                        className={`block px-4 py-2 text-lg ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Analytics
                      </a>
                    </Link>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Menu as="div" className="relative">
            <MenuButton className="p-2 rounded-full border border-gray-300">
              <UserCircleIcon className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        My Account
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Support
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <a
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Logout
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Box className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-sm font-medium">Total Revenue</h3>
              <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-gray-500">+20.1% from last month</p>
            </div>
          </Box>
          <Box className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-sm font-medium">Subscriptions</h3>
              <UsersIcon className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-gray-500">+180.1% from last month</p>
            </div>
          </Box>
          <Box className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-sm font-medium">Sales</h3>
              <CreditCardIcon className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-gray-500">+19% from last month</p>
            </div>
          </Box>
          <Box className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-center pb-2">
              <h3 className="text-sm font-medium">Active Now</h3>
              <UsersIcon className="h-4 w-4 text-gray-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-gray-500">+201 since last hour</p>
            </div>
          </Box>
        </div>
        <div>
          <Table className="w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
            <Thead className="bg-gray-50">
              <Tr>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </Th>
                <Th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </Th>
                <Th className="px-6 py-3"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {[
                {
                  name: 'John Doe',
                  title: 'CEO',
                  status: 'Active',
                  role: 'Admin',
                  email: 'john@example.com',
                },
                {
                  name: 'Jane Smith',
                  title: 'Designer',
                  status: 'Inactive',
                  role: 'Member',
                  email: 'jane@example.com',
                },
                {
                  name: 'Sam Green',
                  title: 'Developer',
                  status: 'Active',
                  role: 'Member',
                  email: 'sam@example.com',
                },
              ].map((user, index) => (
                <Tr key={index}>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar name={user.name} size="sm" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                      </div>
                    </div>
                  </Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.title}</div>
                  </Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      colorScheme={user.status === 'Active' ? 'green' : 'red'}
                    >
                      {user.status}
                    </Badge>
                  </Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.role}</div>
                  </Td>
                  <Td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                  </Td>
                  <Td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to="#">
                      <a className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </main>
    </div>
  );
}
