// server/api/auth/[...].js
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
  providers: [
    {
      id: 'directus',
      name: 'Directus',
      type: 'oauth',
      version: '2.0',

      clientId: process.env.DIRECTUS_CLIENT_ID,
      clientSecret: process.env.DIRECTUS_CLIENT_SECRET,

      // Отправляем пользователя на Directus, который прокинет на GitHub
      authorization: {
        url: `${process.env.DIRECTUS_URL}/auth/login/github`,
        params: {
          redirect: `${process.env.NEXTAUTH_URL}/api/auth/callback/directus`
        }
      },

      // Тот же эндпоинт для обмена кода на токен
      token: `${process.env.DIRECTUS_URL}/auth/login/github`,

      // Где Directus отдаёт профиль уже залогиненного юзера
      userinfo: `${process.env.DIRECTUS_URL}/users/me`,

      // Маппим ответ в формат NextAuth
      profile(profile) {
        return {
          id: String(profile.id),
          name: [profile.first_name, profile.last_name].filter(Boolean).join(' '),
          email: profile.email,
          image: profile.avatar
        };
      }
    }
  ],

  // Здесь можно добавить callbacks, session, pages и т.п.
});
