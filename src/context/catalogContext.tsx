import { createContext, useState, useEffect, useContext } from "react";
import axios, { AxiosError } from 'axios'
import { CatalogData } from "../types";

// a typescript interface for the data being returned from the context
interface Catalogdata {
    catalog: CatalogData[],
    error: string,
    handleSelectAllCatalog: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void
    isAllSelected: boolean,
    selectedItems: Set<number>,
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredCatalog: CatalogData[],
    loading: boolean,
}

const CatalogContext = createContext({} as Catalogdata);

export default function CatalogProvider({children}: { children: React.ReactNode }) {
    const END_POINT = 'http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet'
    const [catalog, setCatalog] = useState<CatalogData[]>([])
    const [filteredCatalog, setFilteredCatalog] = useState<CatalogData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
    const [searchQuery, setSearchQuery] = useState<string>('');

    const fetchCatalog = async () => {
      setLoading(true);
        try {
            const { data } = await axios.get<CatalogData[]>(END_POINT);
            setCatalog(data)
        } catch (error) {
          if (error instanceof AxiosError) {
            setError(error?.response?.data.msg)
          }
        } finally {
          setLoading(false);
        }
    }

    useEffect(() => {
        fetchCatalog()
    }, [])

    // handle select all function for the checkbox on the table header
    const handleSelectAllCatalog = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const allItemIds = new Set(catalog.map(item => item.SKU));
        setSelectedItems(allItemIds);
      } else {
        setSelectedItems(new Set());
      }
    };
    
    // handle select function for the checkbox of a single item
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const newSelectedItems = new Set(selectedItems);
      if (event.target.checked) {
        newSelectedItems.add(id);
      } else {
        newSelectedItems.delete(id);
      }
      setSelectedItems(newSelectedItems);
    };

    // useeffect hook containing the filter method to search catalog by title
    useEffect(() => {
      const filtered = catalog.filter(item =>
        item.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCatalog(filtered);
    }, [catalog, searchQuery]);

    // checking if all checkboxes are checked
    const isAllSelected = selectedItems.size === catalog.length;
    

    return (
      <CatalogContext.Provider
          value={{
              catalog,
              error,
              handleSelectAllCatalog,
              handleCheckboxChange,
              isAllSelected,
              selectedItems,
              searchQuery,
              setSearchQuery,
              filteredCatalog,
              loading
          }}
      > 
          {children}
      </CatalogContext.Provider>
    );
}

export function useCatalog() {
    return useContext(CatalogContext);
}