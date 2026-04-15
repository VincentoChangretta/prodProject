import axios from 'axios';
import { validateProfileData } from './validateProfileData';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 30,
    city: 'Er',
    country: Country.Armenia,
    currency: Currency.EUR,
    first: 'Aasdasd',
    lastname: 'asdasd',
};

describe('validateProfileData.test', () => {
    test('succes', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });
    test('without first and last name ', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age ', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect country ', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
