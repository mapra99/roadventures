export type ActiveProcess = 'login' | 'signup' | 'logout' | 'current-user'

export interface GlobalLoaderSlice {
  activeProcesses: ActiveProcess[]
  addProcess: (process: ActiveProcess) => void
  removeProcess: (process: ActiveProcess) => void
}
