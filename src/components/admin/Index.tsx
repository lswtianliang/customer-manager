import { useParams } from 'react-router-dom';

export default () => {
  const { id } = useParams();

  return <h1>this is {id} page, just for test.</h1>;
};
