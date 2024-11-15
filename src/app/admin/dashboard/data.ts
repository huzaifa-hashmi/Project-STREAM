// src/app/admin/dashboard/data.ts
import { Alert, DashboardStats } from './types';

export const dashboardStats: DashboardStats = {
    totalTraffic: 1234,
    activeUsers: 56,
    systemStatus: 'active',
    dailyTraffic: [
        { date: '2024-01-01', traffic: 1000 },
        { date: '2024-01-02', traffic: 1200 },
        { date: '2024-01-03', traffic: 1100 },
    ],
    dailyUsers: [
        { date: '2024-01-01', users: 45 },
        { date: '2024-01-02', users: 52 },
        { date: '2024-01-03', users: 56 },
    ],
};

export const alertsData: Alert[] = [
    {
        id: '1',
        title: 'High Server Load',
        description: 'Server CPU usage exceeded 90%',
        severity: 'high',
        date: '2024-01-03T15:30:00Z',
    },
    {
        id: '2',
        title: 'New User Registration Spike',
        description: 'Unusual increase in new user registrations',
        severity: 'medium',
        date: '2024-01-03T14:15:00Z',
    },
];
