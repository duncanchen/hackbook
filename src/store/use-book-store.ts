import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BookOps = {
    bookId: string;
    setBookId: (bookId: string) => void;
}

export const useBookStore = create<BookOps>()(persist((set, get) => (
    {
        bookId: '',
        setBookId: (bookId: string) => set({ bookId })
    }), {
    name: 'book-store',
}))