import Fetch from '../http';

const LoginAPI = {
    /**
     * 
     * @param {Object} data
     */
    setLogin(data) {
        return Fetch({
            method: 'POST',
            url: `/api/login`,
            data,
        });
    },
};

export default LoginAPI;
