import axios from 'axios';

const API_BASE_URL = 'http://api.msgnaa.info/api/p/categories/menu';
const IMAGE_BASE_URL = 'http://api.msgnaa.info/images/';

export interface MenuItem {
  id: number;
  name: string;
  sub_title: string | null;
  parent_id: number;
  image: string;
  background_image: string | null;
  status: string;
  menu_side: string;
  sort_order: string;
  search_term: string;
  search_icon: string;
  web_url: string | null;
  web_front_url: string | null;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: MenuItem[];
}

// Create axios instance with default config
const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Fetch left menu items (User Services)
export const fetchLeftMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await apiClient.get<ApiResponse>(`${API_BASE_URL}/left`);
    
    if (response.data.status === 'success' && response.data.data) {
      return response.data.data.filter(item => item.status === 'active');
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching left menu items:', error);
    
    // Return fallback data if API fails
    return [
      {
        id: 2,
        name: 'VOD',
        sub_title: null,
        parent_id: 0,
        image: 'GREENLEFTLauncherButtonUSERSUPLOAD.png',
        background_image: null,
        status: 'active',
        menu_side: 'left',
        sort_order: '1',
        search_term: '',
        search_icon: '',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 77,
        name: 'My Channels',
        sub_title: null,
        parent_id: 0,
        image: 'GREENLEFTLauncherButtonMYCHANNEL.png',
        background_image: null,
        status: 'active',
        menu_side: 'left',
        sort_order: '2',
        search_term: '',
        search_icon: '',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 4,
        name: 'The Buzz',
        sub_title: null,
        parent_id: 0,
        image: 'GREENLEFTLauncherButtonTHEBUZZ.png',
        background_image: null,
        status: 'active',
        menu_side: 'left',
        sort_order: '3',
        search_term: '',
        search_icon: '',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 1,
        name: 'Settings',
        sub_title: null,
        parent_id: 0,
        image: 'GREENLEFTLauncherButtonSETTINGS.png',
        background_image: null,
        status: 'active',
        menu_side: 'left',
        sort_order: '21',
        search_term: '',
        search_icon: '',
        web_url: null,
        web_front_url: null,
      },
    ];
  }
};

// Fetch right menu items (Promotions)
export const fetchRightMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await apiClient.get<ApiResponse>(`${API_BASE_URL}/right`);
    
    if (response.data.status === 'success' && response.data.data) {
      return response.data.data.filter(item => item.status === 'active');
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching right menu items:', error);
    
    // Return fallback data if API fails
    return [
      {
        id: 21,
        name: 'Convenience Store',
        sub_title: null,
        parent_id: 0,
        image: 'ConvenienceStoreroundedNEWNOSHADOWS.png',
        background_image: null,
        status: 'active',
        menu_side: 'right',
        sort_order: '0',
        search_term: 'convenience_store',
        search_icon: 'store',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 22,
        name: 'Food',
        sub_title: null,
        parent_id: 0,
        image: 'FOOD2024a.png',
        background_image: null,
        status: 'active',
        menu_side: 'right',
        sort_order: '0',
        search_term: 'supermarket',
        search_icon: 'restaurant',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 26,
        name: 'Coffee Shop',
        sub_title: null,
        parent_id: 0,
        image: 'COFFEESHOP2024a.png',
        background_image: null,
        status: 'active',
        menu_side: 'right',
        sort_order: '0',
        search_term: 'coffee',
        search_icon: 'coffee',
        web_url: null,
        web_front_url: null,
      },
      {
        id: 35,
        name: 'Hotel',
        sub_title: null,
        parent_id: 0,
        image: 'HOTEL2024a.png',
        background_image: null,
        status: 'active',
        menu_side: 'right',
        sort_order: '0',
        search_term: 'hotel',
        search_icon: 'hotel',
        web_url: null,
        web_front_url: null,
      },
    ];
  }
};

// Fetch middle menu items (Main Features)
export const fetchMiddleMenuItems = async (): Promise<MenuItem[]> => {
  try {
    const response = await apiClient.get<ApiResponse>(`${API_BASE_URL}/middle`);
    
    if (response.data.status === 'success' && response.data.data) {
      return response.data.data.filter(item => item.status === 'active');
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching middle menu items:', error);
    return [];
  }
};

// Get full image URL
export const getImageUrl = (imageName: string): string => {
  if (!imageName) return '';
  return `${IMAGE_BASE_URL}${imageName}`;
};

// Cache utilities
const CACHE_KEY_PREFIX = 'viewersclub_';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCachedData = (key: string): any => {
  try {
    const cached = localStorage.getItem(`${CACHE_KEY_PREFIX}${key}`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error reading from cache:', error);
  }
  return null;
};

export const setCachedData = (key: string, data: any): void => {
  try {
    localStorage.setItem(`${CACHE_KEY_PREFIX}${key}`, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
};

// Cached API calls
export const fetchLeftMenuItemsCached = async (): Promise<MenuItem[]> => {
  const cached = getCachedData('left_menu');
  if (cached) return cached;
  
  const data = await fetchLeftMenuItems();
  setCachedData('left_menu', data);
  return data;
};

export const fetchRightMenuItemsCached = async (): Promise<MenuItem[]> => {
  const cached = getCachedData('right_menu');
  if (cached) return cached;
  
  const data = await fetchRightMenuItems();
  setCachedData('right_menu', data);
  return data;
};