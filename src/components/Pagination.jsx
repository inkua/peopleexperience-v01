import React from 'react'

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {

    let pages = [];

    const lastPage = Math.ceil(totalItems / itemsPerPage);

    for(let i = 1; i <= lastPage; i++){
        pages.push(i);
    }

    if (lastPage <= 1) return null;

    const handlePrevious = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (currentPage !== lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

  return (
    <div>
        <nav aria-label="Page navigation">
            <ul class="inline-flex -space-x-px text-sm">
                <li>
                    <a href="#"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {page}
                            </a>
                        </li>
                        )
                    })
                }

                <li>
                    <a href="#"
                    onClick={handleNext} 
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Siguiente
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination