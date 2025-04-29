import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '456' },
    }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: '456', error: 'Error' },
    }),
];

export const loading = Template.bind({});
loading.args = {};
loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true },
    }),
];
