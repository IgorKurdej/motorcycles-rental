import { create } from 'zustand';

interface IStore {
  searchValue: string;
  searchedBrands: string[];
  sortBy: string;
  setSearchValue: (value: string) => void;
  setSearchedBrands: (brands: string[]) => void;
  setSearchedBrandsWithBrandName: (isChecked: boolean, brand: string) => void;
  setSortBy: (value: string) => void;
}

export const useFiltersStore = create<IStore>((set, get) => ({
  searchValue: '',
  searchedBrands: [],
  sortBy: '',
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
  setSortBy: (value: string) => set({ sortBy: value }),
}));
