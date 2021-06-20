import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getURL() {
    try {
        const value = await AsyncStorage.getItem('@serverURL')
        return value
    } catch (e) {
        return null
    }

}
export async function setURL(value) {
    try {
        await AsyncStorage.setItem('@serverURL', value)
    } catch (e) {
        // saving error
    }
}