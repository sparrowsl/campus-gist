import md5 from 'md5';

export const gravatar = (email) => `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`;
