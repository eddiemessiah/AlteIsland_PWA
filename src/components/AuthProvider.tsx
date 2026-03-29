'use client'

import { useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useUserStore, UserProfile } from '@/store/useUserStore'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setProfile, setLoading } = useUserStore()
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const { data: { session } } = await supabase.auth.getSession()

      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (profile) {
          setProfile(profile as UserProfile)
        } else {
          setProfile(null)
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    }

    fetchUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
        
        setProfile((profile as UserProfile) || null)
      } else {
        setProfile(null)
      }
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [setProfile, setLoading, supabase])

  return <>{children}</>
}
