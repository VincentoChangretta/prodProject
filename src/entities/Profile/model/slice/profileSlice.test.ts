import { Country } from 'entities/Country';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    username: 'admin',
    age: 30,
    city: 'Er',
    country: Country.Armenia,
    currency: Currency.EUR,
    first: 'Aasdasd',
    lastname: 'asdasd',
};

describe('profileSlice.test', () => {
    test('test readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({
            readonly: true,
        });
    });
    test('test cancle edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '121234234234',
                }),
            ),
        ).toEqual({
            form: { username: '121234234234' },
        });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
