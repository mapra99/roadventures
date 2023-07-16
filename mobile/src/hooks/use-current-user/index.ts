import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { currentUserQuery } from 'queries'
import useStore from 'store'
import { loadAccessToken } from 'services/auth'

function useCurrentUser() {
  const { loading, data } = useQuery(currentUserQuery)
  const updateCurrentUser = useStore(store => store.updateCurrentUser)

  const saveCurrentUser = async () => {
    if (!data) return
    if (!data.currentUser) return


    const token = await loadAccessToken()
    if (!token) return

    await updateCurrentUser(data.currentUser, token)
  }

  useEffect(() => {
    saveCurrentUser()
  }, [data])

  return {
    loading, data
  }
}

export default useCurrentUser
