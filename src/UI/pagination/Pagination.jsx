import './pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return <div className="pagination">
      {pageNumbers.map(
          number =>(
              <h5 onClick={(e) => paginate(e, number)} key={number} className="number__item">
                  {number}
              </h5>
          )
      )}
    </div>;
  };
  
  export default Pagination;