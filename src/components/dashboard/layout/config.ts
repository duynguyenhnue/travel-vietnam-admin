import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie', permission: 'OVERVIEW' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users', permission: 'CUSTOMER_VIEW' },
  { key: 'hotels', title: 'Hotels', href: paths.dashboard.hotels, icon: 'users', permission: 'HOTEL_VIEW' },
  { key: 'tours', title: 'Tours', href: paths.dashboard.tours, icon: 'users', permission: 'TOUR_VIEW' },
  { key: 'roles', title: 'Roles', href: paths.dashboard.roles, icon: 'users', permission: 'ROLE_VIEW' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six', permission: 'USER_VIEW' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user', permission: 'USER_VIEW' },
] satisfies NavItemConfig[];
