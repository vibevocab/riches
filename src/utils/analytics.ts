// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        [key: string]: any;
      }
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-9JC3RBV2FD', {
      page_path: path,
    });
  }
};

// Predefined event trackers for common actions
export const analytics = {
  // Payment events
  paymentInitiated: (tier: 'VIP' | 'GOD', amount: number) => {
    trackEvent('payment_initiated', 'Payment', tier, amount);
  },
  
  paymentVerified: (tier: 'VIP' | 'GOD', amount: number) => {
    trackEvent('payment_verified', 'Payment', tier, amount);
  },
  
  // Wallet events
  walletConnected: (walletName: string) => {
    trackEvent('wallet_connected', 'Wallet', walletName);
  },
  
  walletDisconnected: () => {
    trackEvent('wallet_disconnected', 'Wallet');
  },
  
  // Registration events
  registrationStarted: () => {
    trackEvent('registration_started', 'Registration');
  },
  
  registrationCompleted: (tier: 'VIP' | 'GOD') => {
    trackEvent('registration_completed', 'Registration', tier);
  },
  
  // Button clicks
  buttonClick: (buttonName: string, location: string) => {
    trackEvent('button_click', 'Interaction', `${location}_${buttonName}`);
  },
  
  // Scroll events
  sectionViewed: (sectionName: string) => {
    trackEvent('section_viewed', 'Engagement', sectionName);
  },
};

