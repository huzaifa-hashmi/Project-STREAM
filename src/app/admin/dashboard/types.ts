// src/app/admin/dashboard/types.ts

export interface TrafficData {
    date: string; // Ensure date format consistency, e.g., 'YYYY-MM-DD'
    traffic: number;
}

export interface UserData {
    date: string; // Ensure date format consistency
    users: number;
}

export interface Alert {
    id: string;
    title: string;
    description: string;
    severity: 'low' | 'medium' | 'high';
    date: string; // ISO format suggested: 'YYYY-MM-DDTHH:mm:ssZ'
}

export interface DashboardStats {
    totalTraffic: number;
    activeUsers: number;
    systemStatus: 'active' | 'inactive';
    dailyTraffic: TrafficData[];
    dailyUsers: UserData[];
}
