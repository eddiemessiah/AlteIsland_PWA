import { create } from 'zustand'

interface ModalState {
  isListModalOpen: boolean
  selectedBusinessId: string | null
  openListModal: (businessId: string) => void
  closeListModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isListModalOpen: false,
  selectedBusinessId: null,
  openListModal: (businessId) => set({ isListModalOpen: true, selectedBusinessId: businessId }),
  closeListModal: () => set({ isListModalOpen: false, selectedBusinessId: null }),
}))
