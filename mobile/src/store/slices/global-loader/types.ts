export type ActiveProcess = 'login' | 'signup' | 'logout' | 'current-user' | 'fonts-loader'

export interface GlobalLoaderSlice {
  activeProcesses: ActiveProcess[]
  addProcess: (process: ActiveProcess) => void
  removeProcess: (process: ActiveProcess) => void
}
