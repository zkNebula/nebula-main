'use client';

import { FormEvent, useState } from 'react';
import FormInput from '@/app/components/form-input/form-input';
import { IoArrowDown, IoSearchOutline } from 'react-icons/io5';

const FormSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [queryCategory, setQueryCategory] = useState<string>("");
    const [queryError, setQueryError] = useState<string>("");

    function searchProposal(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!query)
            setQueryError("Add a search query");
        else {
            setQueryError("");
        }
    
        console.log("searching up proposal based on ", queryCategory)
    }

    return (
        <form 
            className='search-box h-11 flex bg-white relative rounded-full pr-2'
            onSubmit={searchProposal}
            noValidate    
        >
            <FormInput 
                type="search"
                name="search-proposal"
                placeholder='Search proposal'
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                styles="bg-white rounded-tl-full rounded-bl-full h-full pl-11"
                required
            />
            <IoSearchOutline className='absolute top-[30%] left-4 text-gray-800 text-[1.2rem] rotate-90' />
            <select 
                className='form-select text-gray-800 h-full px-1 font-inherit bg-transparent outline-none border-none bg-accent-shade-800 rounded-tr-full rounded-br-full cursor-pointer'
                value={queryCategory}
                onChange={({ target }) => setQueryCategory(target.value)}
            >
                <option value="all">All</option>
                <option value="dao">DAO</option>
                <option value="git">GIT</option>
            </select>
        </form>
    );
}
 
export default FormSearch;