'use client'
import React from 'react';
import {useRouter} from 'next/navigation';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
    const route = useRouter()

    let pages = [];

    const lastPage = Math.ceil(totalItems / itemsPerPage);

    for(let i = 1; i <= lastPage; i++){
        pages.push(i);
    }

    if (lastPage <= 1) return null;

    const handlePrevious = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            route.push(`/admin/admins/?page=${currentPage - 1}`)
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        route.push(`/admin/admins/?page=${currentPage + 1}`)

    };

  return (
    <div className='w-full mt-4'>
        <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <a href="#"
                    onClick={(e)=>handlePrevious(e)}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Anterior
                    </a>
                </li>
                {
                    pages.map((page, index) => {
                        return (
                        <li>
                            <a href="#" 
                            key={index} 
                            setCurrentPage={page}
                            aria-current={currentPage === page ? 'page' : undefined}
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {page}
                            </a>
                        </li>
                        )
                    })
                }

                <li>
                    <a href="#"
                    onClick={(e)=>handleNext(e)} 
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Siguiente
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination