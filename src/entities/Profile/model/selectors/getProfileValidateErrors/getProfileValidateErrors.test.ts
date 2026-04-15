import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 30,
            city: 'Er',
            country: Country.Armenia,
            currency: Currency.EUR,
            first: 'Aasdasd',
            lastname: 'asdasd',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
