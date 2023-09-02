import { create } from 'zustand';

interface IStore {
  searchValue: string;
  searchedBrands: string[];
  isAsc: boolean;
  sortBy: string;
  setSearchValue: (value: string) => void;
  setSearchedBrands: (brands: string[]) => void;
  setSearchedBrandsWithBrandName: (isChecked: boolean, brand: string) => void;
  setIsAsc: () => void;
  setSortBy: (value: string) => void;
}

export const useFiltersStore = create<IStore>((set, get) => ({
  searchValue: '',
  searchedBrands: [],
  isAsc: true,
  sortBy: 'created',
  setSearchValue: (value: string) => set({ searchValue: value }),
  setSearchedBrands: (brands: string[]) => set({ searchedBrands: brands }),
  setSearchedBrandsWithBrandName: (isChecked: boolean, brand: string) => {
    if (isChecked) {
      set({ searchedBrands: [...get().searchedBrands, brand] });
      return;
    }

    const updatedBrands = get().searchedBrands.filter((item) => item !== brand);
    set({ searchedBrands: updatedBrands });
  },
  setIsAsc: () => set({ isAsc: !get().isAsc }),
  setSortBy: (value: string) => set({ sortBy: value }),
}));
