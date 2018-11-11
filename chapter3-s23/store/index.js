export const state = () => ({
  isLoading: false
})

export const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  toggleIsLoading(state) {
    state.isLoading = !state.isLoading
  }
}
