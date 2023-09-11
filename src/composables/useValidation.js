import useNotify from "./useNotify"

export default function useValidation () {
  const { notifyError } = useNotify()
  const authValidation = (email,senha) => {
    if (!email || !senha) {
      notifyError("Preencha todos os campos do login.");
      return true
    }
  }

  return {
    authValidation
  }
}
