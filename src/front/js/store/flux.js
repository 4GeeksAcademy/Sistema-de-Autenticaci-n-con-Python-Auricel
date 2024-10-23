const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [],
			auth: false
			




		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},


			signup: async (email, password) => {

				const response = await fetch('https://special-xylophone-q77q976rjxrr296gj-3001.app.github.dev/api/signup', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: email,
						password: password,
						is_active: true
					})
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.msg || 'Error en el signup');
				}

				const data = await response.json();
				console.log('Signup exitoso:', data);
				alert('Registro exitoso!')

			},

			login: async (email, password) => {

				const response = await fetch('https://special-xylophone-q77q976rjxrr296gj-3001.app.github.dev/api/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email: email,
						password: password
					})
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.msg || 'Error en el login');
				}

				const data = await response.json();
				localStorage.setItem("token", data.access_token)
				console.log('Login exitoso:', data);

			},

			autentificar: async () => {
				const token = localStorage.getItem("token");
			
				if (!token) {
					return false; // No token found
				}
			
				try {
					const response = await fetch('https://special-xylophone-q77q976rjxrr296gj-3001.app.github.dev/api/private', {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						}
					});
			
					if (!response.ok) {
						localStorage.removeItem("token");
						return false; // Invalid token
					}
			
					return true; // Token is valid
				} catch (error) {
					console.error("Error verifying token:", error);
					localStorage.removeItem("token");
					return false; // Error during verification
				}
			},
			


			
		}

	}

};

export default getState;