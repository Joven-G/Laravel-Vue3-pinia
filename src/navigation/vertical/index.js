export default [
  {
    title: "Dashboard",
    to: 'Dashboard',
    icon: { icon: "tabler-home" },
  },
  { heading: "ADMINISTRATION" },
  {
    title: "Account Manager",
    icon: { icon: "tabler-users" },
    children: [
      { title: "Create Member", to: 'Create Member' },
      { title: "Members", to: 'View Members' },
      { title: "Geoplotter", to: 'Geoplotter' },
    ],
  },
  {
    title: "Commission Manager",
    icon: { icon: "tabler-currency-dollar" },
    children: [
      { title: "Rates Library", to: 'Rates Libary' },
      { title: "Default Rates", to: 'Default Rates' },
      { title: "Agent Manager", to: 'AM Late Actions' },
      { title: "Payments", to: 'CP Commissions' },
    ],
  },
  { heading: "OPERATIONAL" },
  {
    title: "Catalogue",
    icon: { icon: "tabler-book" },
    children: [
      { title: "Shop", to: 'Catalogue' },
      { title: "Cart", to: 'Cart' },
    ],
  },
  {
    title: "Shop Manager",
    icon: { icon: "tabler-building-store" },
    children: [
      { title: "Add Manage", to: 'SM AddManage' },
      { title: "Sales Manager", to: 'SM Actions' },
      { title: "Consignment", to: 'Consignment Request' },
      { title: "Credit Score", to: 'SM CreditScore' },
    ],
  },
  {
    title: "Media Center",
    icon: { icon: "tabler-photo" },
    children: [
      { title: "Gallery", to: 'Media Gallery' }, 
      { title: "Add New", to: 'Media Add' },
    ],
  },
  { heading: "SYSTEM" },
  {
    title: "Master Data",
    icon: { icon: "tabler-database" },
    children: [
      { title: "Products", to: 'master_industry' },
      { title: "Countries", to: 'master_country' },
      { title: "Contracts", to: 'master_contracts' },
      { title: "Roles & Permissions", to: 'Master Roles' },
      { title: "Defaults", to: 'defaultvariables' },
    ],
  },
  {
    title: "Communication",
    icon: { icon: "tabler-bell" },
    children: [
      { title: "Announcements", to: 'announcements' },
      { title: "Whatsapp", to: 'whatsapp' },
    ],
  },
  {
    title: "System Accounts",
    to: 'system_accounts',
    icon: { icon: "tabler-user" },
  },
  {
    title: "Warehouse",
    icon: { icon: "tabler-package" },
    children: [
      { title: "Manage", to: 'warehouse_manage' },
      { title: "Stock Manager", to: 'warehouse_stockmanager' },
      { title: "Transactions History", to: 'warehouse_transactions' },
    ],
  },
  {
    title: "Transactions",
    icon: { icon: "tabler-file-text" },
    children: [
      { title: "Bonus Payments", to: 'Transation BonusPayments' },
      { title: "Contract Signings", to: 'Transactions ContractSignings' },
      { title: "Agent Checks", to: 'Transactions AgentChecks' },
      { title: "Agent Sales", to: 'Transactions AgentSales' },
      { title: "Agent Stock", to: 'Trasnactions AgentStock' },
      { title: "Consign Payments", to: 'Transactions ConsignPayments' },
      { title: "Late Actions", to: 'Transactions LateActions' },
      { title: "New Accounts", to: 'Transactions NewAccounts' },
      { title: "New Shops", to: 'Tranaction NewShops' },
    ],
  },
]
