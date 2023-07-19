import type { StateCreator } from 'zustand'
import type { Store } from '../../types'
import type { ActiveProcess, GlobalLoaderSlice } from './types'

const INITIAL_PROCESSES: ActiveProcess[] = [
  'current-user',
  'fonts-loader'
]

const createGlobalLoaderSlice: StateCreator<Store, [], [], GlobalLoaderSlice> = (set) => ({
  activeProcesses: INITIAL_PROCESSES,
  addProcess: (process) => set((state) => ({
    activeProcesses: [...state.activeProcesses, process]
  })),
  removeProcess: (process) => set((state) => ({
    activeProcesses: state.activeProcesses.filter((p) => p !== process)
  }))
})

export default createGlobalLoaderSlice
