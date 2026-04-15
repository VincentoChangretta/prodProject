import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCard } from './ProfileCard';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/profile.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = args => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 30,
        city: 'Er',
        country: Country.Armenia,
        currency: Currency.EUR,
        first: 'Aasdasd',
        lastname: 'asdasd',
        avatar: avatar,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
