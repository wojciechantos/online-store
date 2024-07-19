import './index.css';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './store';
import { Toaster } from '@/components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<Toaster />
		<App />
	</Provider>
);
