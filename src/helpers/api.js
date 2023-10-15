import axios from 'axios';

axios.defaults.baseURL = 'https://64acaeaf9edb4181202fb578.mockapi.io';

export const fetchUsers = async () => {
  const resp = await axios.get('/users');
  return resp.data;
};

export const updateUser = async (id, followersCount, isFollowing) => {
  const resp = await axios.put(`/users/${id}`, {
    followers: followersCount,
    isFollowing,
  });
  return resp.data;
};
