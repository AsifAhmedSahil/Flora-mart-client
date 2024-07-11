const Pagination = ({ activePage, paginate, totalProducts, productsPerPage }) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="flex  justify-center items-center mt-10">
            {pageNumbers.map((number) => (
                <li key={number} className={`flex w-[46px] h-[46px] rounded-full items-center justify-center ${number === activePage ? 'bg-green-600' : ''}`}>
                    
                    <button className="bg-transparent" onClick={() => paginate(number)}>{number}</button>
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
