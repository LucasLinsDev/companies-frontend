export default function useValidation () {

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
