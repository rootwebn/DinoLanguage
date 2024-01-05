// import React, { useRef } from 'react';
// import {
//   SaveContext,
//   SaveProps,
//   SaveStorage,
//   createSaveStorage,
// } from '@/entities/trainerLevel/model/savedResultsStorage';
//
// type SaveProviderProps = React.PropsWithChildren<SaveProps>;
//
// export function SaveStorageProvider({ children, ...props }: SaveProviderProps) {
//   const storeRef = useRef<SaveStorage>();
//   if (!storeRef.current) {
//     storeRef.current = createSaveStorage(props);
//   }
//   return (
//     <SaveContext.Provider value={storeRef.current}>
//       {children}
//     </SaveContext.Provider>
//   );
// }
