import React from 'react';
import Like from '../Like/Like';

const MoviesTable = (props) => {
    const { movies, onLikeMovie, onDeleteMovie } = props;

    return (  
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Range</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {movies.map(movie => {
                return (
                    <tbody key={movie._id}>
                        <tr>
                            <td>{movie.title}</td>        
                            <td>{movie.genre.name}</td>   
                            <td>{movie.numberInStock}</td> 
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like 
                                    like={movie.like} 
                                    onClick={() => { onLikeMovie(movie) } }/>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => onDeleteMovie(movie)}>
                                    Delete
                                </button>
                            </td>
                        </tr> 
                    </tbody>
                )
            })}
        </table>
    );
}
 
export default MoviesTable;