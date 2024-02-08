import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from './App';
import Layout from './Layout';
import Create from './components/curd/Create';
import Read from './components/curd/Read';
import Update from './components/curd/Update';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<App/>} />
			<Route path="create" element={<Create />} />
			<Route path="read" element={<Read />} />
			<Route path="update" element={<Update/>} />
			{/* <Route path="contact" element={<Contact />} />
			{/* Dynamic route */}
			{/* <Route path="user/:id" element={<User />} /> */}
			{/* https://reactrouter.com/en/main/start/overview#nested-routes */}
			{/* <Route
				loader={githubInfoLoader}
				path="github"
				element={<Github />}
			/> */}
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
