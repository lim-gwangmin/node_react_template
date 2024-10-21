import RootRoutes from '@routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { WindowAlert } from '@components/atoms/Modal';

import { alertModalState } from '@states/alertModalState';

export default function App() {
  const queryClient = new QueryClient();
  const { isOpen, title, text, cancel, callback } = useRecoilValue(alertModalState);

  return (
    <QueryClientProvider client={queryClient}>
      <RootRoutes />
      <WindowAlert isOpen={isOpen} title={title} text={text} cancel={cancel} callback={callback} />
    </QueryClientProvider>
  );
}
