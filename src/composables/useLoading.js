import { useQuasar } from 'quasar'

export default function useLoading () {
  const $q = useQuasar()
  const showLoading = () => {
    $q.loading.show({
      delay:500
    })
  }

  const hideLoading = () => {
    $q.loading.hide()
  }

  return {
    hideLoading,
    showLoading
  }
}
