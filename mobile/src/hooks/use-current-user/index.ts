import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { currentUserQuery } from 'queries'
import useStore from 'store'
import { loadAccessToken, removeAccessToken } from 'services/auth'

function useCurrentUser() {
  const { loading, data, error } = useQuery(currentUserQuery)
  const { updateCurrentUser, currentUser } = useStore()

  const saveCurrentUser = async () => {
    if (!data?.currentUser) return
    if (data.currentUser.id === currentUser?.id) return

    const token = await loadAccessToken()
    if (!token) return

    updateCurrentUser(data.currentUser, token)
  }

  const removeToken = async () => {
    if (!data && !error) return

    updateCurrentUser(null, null)
    await removeAccessToken()
  }

  useEffect(() => {
    console.log({ data, error })
    if (error) {
      console.log("Error detected. Removing token...")
      removeToken()
    } else {
      console.log("No error detected. Saving current user...")
      saveCurrentUser()
    }
  }, [data, error])

  return {
    loading, data, error
  }
}

export default useCurrentUser
