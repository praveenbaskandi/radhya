import {useSelector} from 'react-redux';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);

  return {
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
