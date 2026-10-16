/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_DISCORD_CLIENT_ID?: string;
  readonly VITE_DISCORD_INVITE_URL?: string;
  readonly VITE_DISCORD_SUPPORT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
