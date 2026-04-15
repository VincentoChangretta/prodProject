import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileError } from './getProfileError';

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
                error: 'error 123',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error 123');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
