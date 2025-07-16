import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { type Notification } from '../hooks/useNotifications';

interface NotificationProps {
  notification: Notification;
  onClose: (id: string) => void;
}

export default function NotificationComponent({ notification, onClose }: NotificationProps) {
  const { id, type, title, message, duration } = notification;

  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-blue-400" />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500/10 border-green-500/20';
      case 'error':
        return 'bg-red-500/10 border-red-500/20';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'info':
      default:
        return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <div className={`max-w-sm w-full ${getBackgroundColor()} backdrop-blur-sm border rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-white">
              {title}
            </p>
            {message && (
              <p className="mt-1 text-sm text-gray-300">
                {message}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              onClick={() => onClose(id)}
              className="inline-flex text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress bar for timed notifications */}
      {duration && duration > 0 && (
        <div className="h-1 bg-white/10">
          <div 
            className="h-full bg-white/30 transition-all duration-linear"
            style={{ 
              animation: `shrink ${duration}ms linear`,
              transformOrigin: 'left'
            }}
          />
        </div>
      )}
      
      <style jsx>{`
        @keyframes shrink {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
    </div>
  );
}