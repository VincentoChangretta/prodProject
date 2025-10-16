import { LoginSchema } from '../types/loginSchema';
import { LoginActions, LoginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('123456'))).toEqual({
            username: '123456',
        });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123456'))).toEqual({
            password: '123456',
        });
    });
});
