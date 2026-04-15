import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

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
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
