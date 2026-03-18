import SearchIcon from '@mui/icons-material/Search'

export default function SearchBar(){
    return (
        <div className="bg-sky-950 w-full flex-1 py-3 px-8 flex gap-2 items-center">
            {/* <SearchIcon fontSize="small"/> */}
            <input 
                placeholder='Search...'
                className='bg-transparent border-none outline-none text-white w-full'
            />
        </div>
    )
}