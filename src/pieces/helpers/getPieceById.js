import pieces from '../../user/data/pieces';


export const getPieceById = ( id ) => {

    return pieces.find( piece => piece.id === id );
};
