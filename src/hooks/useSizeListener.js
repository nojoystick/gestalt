import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UtilActions } from '../redux';

/**
 * Listens for window resizing and submits the dimensions to the Redux
 *   global state.
 */

export default function useSizeListener() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleSizeChange = () => {
      console.log(window.innerWidth);
      dispatch(
        UtilActions.setDimensions(window.innerWidth, window.innerHeight)
      );
    };
    window.addEventListener('resize', handleSizeChange);
    return () => {
      window.removeEventListener('resize', handleSizeChange);
    };
  }, [dispatch]);
}
