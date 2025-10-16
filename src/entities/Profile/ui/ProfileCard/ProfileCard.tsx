import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.first} placeholder={t('Ваше имя')} />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
            </div>
        </div>
    );
};
