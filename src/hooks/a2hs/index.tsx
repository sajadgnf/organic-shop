import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
}

const useA2hs = () => {
  const [isStandalone, setIsStandalone] = useState(false);
  const [installEvent, setInstallEvent] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  useEffect(() => {
    window
      .matchMedia('(display-mode: standalone)')
      .addEventListener('change', handleDisplayModeTasks);

    window.addEventListener('appinstalled', handleAppInstalledTasks);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window
        .matchMedia('(display-mode: standalone)')
        .removeEventListener('change', handleDisplayModeTasks);

      window.removeEventListener('appinstalled', handleAppInstalledTasks);

      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleDisplayModeTasks = (e: MediaQueryListEvent) => {
    if (e.matches) setIsStandalone(true);
  };

  const handleAppInstalledTasks = () => {
    setInstallEvent(null);
  };

  const handleBeforeInstallPrompt = (e: any) => {
    e.preventDefault();
    setInstallEvent(e);
  };

  const a2hs = async () => {
    if (!installEvent) return;
    installEvent.prompt();
  };

  return { isStandalone, a2hs };
};

export default useA2hs;



