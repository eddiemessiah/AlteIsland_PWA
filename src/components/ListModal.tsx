"use client";

import { useEffect, useState } from "react";
import { useModalStore } from "@/store/useModalStore";
import { useUserStore } from "@/store/useUserStore";
import { createClient } from "@/utils/supabase/client";
import { X, Plus, Check, Loader2, Bookmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ListModal() {
  const { isListModalOpen, selectedBusinessId, closeListModal } = useModalStore();
  const { profile } = useUserStore();
  const supabase = createClient();

  const [lists, setLists] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (isListModalOpen && profile) {
      fetchLists();
    }
  }, [isListModalOpen, profile]);

  const fetchLists = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("lists")
      .select("*")
      .eq("user_id", profile?.id)
      .order("created_at", { ascending: false });

    if (data) setLists(data);
    setLoading(false);
  };

  const handleCreateList = async () => {
    if (!newListName.trim() || !profile) return;
    
    setSaving(true);
    const { data, error } = await supabase
      .from("lists")
      .insert({
        user_id: profile.id,
        name: newListName,
        description: "",
      })
      .select()
      .single();

    if (data) {
      setLists([data, ...lists]);
      setNewListName("");
      setIsCreating(false);
      // Auto-add the business to the new list
      if (selectedBusinessId) {
        await handleAddToList(data.id);
      }
    }
    setSaving(false);
  };

  const handleAddToList = async (listId: string) => {
    if (!selectedBusinessId) return;
    
    setSaving(true);
    const { error } = await supabase
      .from("list_items")
      .insert({
        list_id: listId,
        business_id: selectedBusinessId,
      });

    setSaving(false);
    if (!error) {
      closeListModal();
    }
  };

  if (!isListModalOpen) return null;

  return (
    <AnimatePresence>
      {isListModalOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeListModal}
            className="fixed inset-0 z-[100] bg-[#0f0e10]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-[110] bg-[#141315] border border-white/10 md:rounded-3xl rounded-t-3xl md:w-[400px] shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-[#ff89ab]" />
                  Save to List
                </h2>
                <button onClick={closeListModal} className="text-[#aeaaad] hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!profile ? (
                <div className="text-center py-8">
                  <p className="text-[#aeaaad] mb-4">You must be signed in to save spots to your lists.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Create New List */}
                  {isCreating ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="List Name (e.g., Best Amala)"
                        value={newListName}
                        onChange={(e) => setNewListName(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#00e3fd]"
                      />
                      <button 
                        onClick={handleCreateList}
                        disabled={saving}
                        className="bg-[#00e3fd] text-black px-4 py-2 rounded-xl font-bold text-sm"
                      >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsCreating(true)}
                      className="w-full py-3 border border-dashed border-white/20 rounded-xl text-[#aeaaad] hover:text-white hover:border-white/50 transition-colors flex items-center justify-center gap-2 text-sm font-bold"
                    >
                      <Plus className="w-4 h-4" /> Create New List
                    </button>
                  )}

                  {/* Existing Lists */}
                  <div className="max-h-[300px] overflow-y-auto space-y-2 mt-4 custom-scrollbar">
                    {loading ? (
                      <div className="flex justify-center py-4">
                        <Loader2 className="w-5 h-5 text-[#00e3fd] animate-spin" />
                      </div>
                    ) : lists.length === 0 ? (
                      <p className="text-center text-xs text-[#aeaaad] py-4">No lists yet.</p>
                    ) : (
                      lists.map((list) => (
                        <button
                          key={list.id}
                          onClick={() => handleAddToList(list.id)}
                          disabled={saving}
                          className="w-full p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] flex justify-between items-center transition-colors text-left"
                        >
                          <span className="font-bold text-sm">{list.name}</span>
                          <Plus className="w-4 h-4 text-[#aeaaad]" />
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
