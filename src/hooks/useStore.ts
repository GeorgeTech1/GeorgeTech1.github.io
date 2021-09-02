import React from 'react';

import { storeContext } from '../contexts/storeContext';

export const useStore = () => React.useContext(storeContext);
