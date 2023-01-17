const useGeneralLogin = () => {
	const loginUser = async (user) => {
		/* const response = await axios.get('http://localhost:3001/login', user);
        console.log(response); */
		console.log(user);
	};
	return [loginUser];
};

export default useGeneralLogin;
