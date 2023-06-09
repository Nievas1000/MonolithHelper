import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/NavBar.css';
import './css/Settings.css';
import './css/Login.css';
import './css/Home.css';
import './css/AddApplication.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/reducer';
import { PostHogProvider } from 'posthog-js/react';

const options = {
	api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<PostHogProvider
			apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
			options={options}
		>
			<GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
				<Provider store={store}>
					<App />
				</Provider>
			</GoogleOAuthProvider>
		</PostHogProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
