import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'login/loginByUsername',
    async (_, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        // user - то что возвращает // loginByUsernameProps то что мы отдаем
        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(i18n.t('error'));
        }
    },
);
