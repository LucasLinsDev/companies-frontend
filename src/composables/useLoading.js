import { useQuasar } from 'quasar'

export default function useLoading () {
  const $q = useQuasar()
  const showLoading = () => {
    $q.loading.show({
      delay:200
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
