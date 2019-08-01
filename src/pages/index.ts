// The page the user lands on after opening the app and without a session
export const FirstRunPage = 'WelcomePage';

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = 'TabsPage';

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = 'ListMasterPage';
export const Tab2Root = 'SearchPage';
export const Tab3Root = 'SettingsPage';

export const environment = {
  version: '1.0.0.1',
  production: true,
  apiUrl: 'http://adamis.com.br/ziot/api/',
  apiUrlKripton: 'http://adamis.com.br/ziot/api/',
  sistemaId: '8'
};
