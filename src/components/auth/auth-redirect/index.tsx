import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../../../api/request';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../../redux/user';
import { SnackbarActions } from '../../../redux/snackbar';

const useAuthRedirect = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const checkTokens = async () => {
            const accessToken = Cookies.get('accessToken');
            const refreshToken = Cookies.get('refreshToken');

            if (accessToken) {
                try {
                    const decoded: any = jwtDecode(accessToken);
                    const now = Math.floor(Date.now() / 1000);
                    console.log("accessToken", decoded, decoded.exp, now);
                    if (decoded.exp && decoded.exp > now) {
                        const data = await request("GET", "", `users/${decoded.sub}`)
                        dispatch(UserActions.setUser(data))
                        navigate('/');
                        return;
                    }
                } catch (error) {
                    console.error('Error decoding token:', error);
                }
            }

            if (refreshToken) {
                try {
                    const decoded: any = jwtDecode(refreshToken);
                    const now = Math.floor(Date.now() / 1000);
                    console.log("refreshToken", decoded, decoded.exp, now);
                    if (decoded.exp && decoded.exp > now) {
                        const response = await request("POST", { refreshToken: refreshToken }, "auth/refresh-token")
                        if (response.status == 201) {
                            Cookies.set('accessToken', response.data, { expires: 60, path: '/' });
                            navigate('/');
                        } else {
                            dispatch(SnackbarActions.OpenSnackbar(
                                {
                                    open: true,
                                    content: "Login session has expired.",
                                    state: "warn",
                                }))
                            navigate('/auth?page=signin');
                        }
                    } else {
                        navigate('/auth?page=signin');
                    }
                } catch {
                    navigate('/auth?page=signin');
                }
            } else {
                navigate('/auth?page=signin');
            }
        };

        checkTokens();
    }, [navigate]);
};

export default useAuthRedirect;
