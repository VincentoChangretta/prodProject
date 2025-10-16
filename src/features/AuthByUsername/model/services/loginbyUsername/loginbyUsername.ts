import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        // user - то что возвращает // loginByUsernameProps то что мы отдаем
        try {
            const response = await extra.api.post<User>('/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.('/about');
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
