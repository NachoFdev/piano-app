import { useParams } from 'react-router-dom';


export const PieceView = () => {

  const params = useParams();
  console.log(params);

  return (
    <h1>PieceView</h1>
  );
};
