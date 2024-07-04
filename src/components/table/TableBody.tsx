import { CatalogData } from '../../types'
import { useCatalog } from '../../context/catalogContext';

const TableBody = ({data, index}: { data: CatalogData, index: number}) => {
    const { handleCheckboxChange, selectedItems} = useCatalog()
    const itemType = 'Item Type' as keyof CatalogData;
    const CostPrice = 'Cost Price' as keyof CatalogData;
    const imageSmallKey = 'Image Small';
    const imageSmall = data[imageSmallKey] as string;

  return (
    <div className="grid grid-cols-12 gap-2 items-center border-b h-[56px] text-[#595959]">
        <div className="col-span-1 flex items-center gap-3">
            <input 
                type="checkbox"
                className='bg-transparent'
                checked={selectedItems.has(data?.SKU)}
                onChange={(event) => handleCheckboxChange(event, data?.SKU)}
            />
            <p className='text-xs font-semibold'>{index}.</p>
        </div>

        <div className="col-span-1">
            <img src={imageSmall} alt="catalog_img" className='w-12 h-12' />
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold'>{data?.SKU}</p>
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold capitalize'>{data[itemType]}</p>
        </div>

        <div className="col-span-2">
            <p className='text-xs font-semibold capitalize'>{data?.Title.toLowerCase()}</p>
        </div>

        <div className="col-span-2">
            <p className='text-xs font-semibold capitalize'>{data?.Description.toLowerCase()}</p>
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold capitalize'>{data?.Brand.toLowerCase()}</p>
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold'>{data[CostPrice]}</p>
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold'>{data?.Quantity}</p>
        </div>

        <div className="col-span-1">
            <p className='text-xs font-semibold'>{data?.size}</p>
        </div>
    </div>        
  )
}

export default TableBody