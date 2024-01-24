import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.mfproject.app',
  appName: 'MFProject',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
