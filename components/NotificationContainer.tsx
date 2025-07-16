import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import NotificationComponent from './Notification';
import { type Notification } from '../hooks/useNotifications';

interface NotificationContainerProps {
  notifications: Notification[];
  onClose: (id: string) => void;
}

export default function NotificationContainer({ notifications, onClose }: NotificationContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-50 space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="animate-fade-in-up"
          style={{
            animation: 'slideInRight 0.3s ease-out'
          }}
        >
          <NotificationComponent
            notification={notification}
            onClose={onClose}
          />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>,
    document.body
  );
}