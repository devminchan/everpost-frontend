interface AppBarMenu {
  menuTitle: string;
  action: (() => Promise<void>) | (() => void);
}
