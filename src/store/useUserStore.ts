import { create } from 'zustand'

export interface UserProfile {
  id: string
  username: string | null
  full_name: string | null
  avatar_url: string | null
  afro_points: number
}

interface UserState {
  profile: UserProfile | null
  isLoading: boolean
  setProfile: (profile: UserProfile | null) => void
  setLoading: (isLoading: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  isLoading: true,
  setProfile: (profile) => set({ profile }),
  setLoading: (isLoading) => set({ isLoading }),
}))
