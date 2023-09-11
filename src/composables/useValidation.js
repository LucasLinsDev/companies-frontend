import useNotify from "./useNotify"

export default function useValidation () {
  const { notifyError } = useNotify()
  const authValidation = (email,senha) => {
    if (!email || !senha) {
      notifyError("Preencha todos os campos do login.");
      return true
    }
  }

  const minLength3 = () => {
      return value.length >= 3 || 'Minimo de 3 letras'
  }

  return {
    authValidation,
    minLength3
  }
}
