import TableBody from './TableBody'
import { useCatalog } from '../../context/catalogContext'
import Pagination from '../../utils/Pagination'
import { useState } from 'react'
import TableLoader from '../../utils/TableLoader'

const Table = () => {
    const { handleSelectAllCatalog, isAllSelected, filteredCatalog, loading, error } = useCatalog()
    const [ currentPage, setCurrentPage ] = useState(1);
    const postsPerPage = 10
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = filteredCatalog.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='my-5'> 
        <div className="grid grid-cols-12 items-center bg-[#F0F4FE] overflow-x-hidden w-[900px] lg:w-full lg:overflow-x-hidden h-10 text-[#595959] px-6">
            <div className="col-span-1 flex items-center gap-2">
                <input 
                    type="checkbox" 
                    className='bg-transparent'
                    checked={isAllSelected}
                    onChange={handleSelectAllCatalog}
                />
                <p className='text-xs font-semibold'>S/N</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Image</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>SKU</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Name</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold'>Title</p>
            </div>

            <div className="col-span-2">
                <p className='text-xs font-semibold'>Description</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Brand</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Cost Price</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Quantity</p>
            </div>

            <div className="col-span-1">
                <p className='text-xs font-semibold'>Size</p>
            </div>
        </div>

        {/* error message will be displayed here */}
        {error ? <p className='bg-red-500/80 text-white mt-4 p-2 rounded-lg'>{error}</p> : null}

        {/* Displaying the data and mapping it to this component, 
        it checks if the loading state is false first, if so, it renders the component, 
        else it'll continue displaying the loader component */}
        {!loading ? (
            <div className="bg-white overflow-x-scroll w-[900px] lg:w-full lg:overflow-x-hidden rounded-lg my-3 px-6">
                {Array.isArray(currentPosts) && 
                    currentPosts.map((item, index: number) => (
                        <TableBody data={item} index={index + 1} key={item?.SKU} />
                    ))
                }   
            </div>
        ) : <TableLoader num={8} />}

        {/* Handling pagination */}
        <Pagination 
            totalPosts={filteredCatalog && filteredCatalog.length} 
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        /> 
    </div>
  )
}

export default Table