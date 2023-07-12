import * as SecureStore from 'expo-secure-store'

export async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value)
}

export async function load(key: string): Promise<[true, string] | [false, undefined]> {
  const result = await SecureStore.getItemAsync(key)
  if (!result) return [false, undefined]

  return [true, result]
}

export async function remove(key: string) {
  await SecureStore.deleteItemAsync(key)
}
