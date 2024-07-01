import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export const saveUser = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(`@user_${user.cpf}`, jsonValue);
  } catch (e) {
    console.error('Error saving user: ', e);
  }
};

export const getUser = async (cpf: string): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@user_${cpf}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading user: ', e);
    return null;
  }
};
