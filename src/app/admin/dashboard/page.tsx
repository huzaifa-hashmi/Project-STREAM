// src/app/admin/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { dashboardStats, alertsData } from './data';
import { Alert } from './types';

type MetricType = 'traffic' | 'users' | 'alerts';

export default function AdminDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('traffic');
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  const handleMetricChange = (metric: MetricType) => {
    setSelectedMetric(metric);
  };

  const handleAlertDetails = (alert: Alert) => {
    setSelectedAlert(alert);
    setShowAlertDialog(true);
  };

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {dashboardStats.totalTraffic.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {dashboardStats.activeUsers.toLocaleString()}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Alerts Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{alertsData.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-500">
              {dashboardStats.systemStatus}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Metric Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
        <div className="flex space-x-4">
          {(['traffic', 'users', 'alerts'] as const).map((metric) => (
            <button
              key={metric}
              className={`px-4 py-2 rounded-lg ${selectedMetric === metric
                  ? 'bg-blue-400 text-white'
                  : 'bg-gray-200 text-gray-700'
                }`}
              onClick={() => handleMetricChange(metric)}
            >
              {metric.charAt(0).toUpperCase() + metric.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Charts */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              {selectedMetric === 'traffic' ? (
                <>
                  <LineChart data={dashboardStats.dailyTraffic}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="traffic"
                      stroke="#8884d8"
                      name="Traffic"
                    />
                  </LineChart>
                </>
              ) : selectedMetric === 'users' ? (
                <>
                  <LineChart data={dashboardStats.dailyUsers}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#82ca9d"
                      name="Users"
                    />
                  </LineChart>
                </>
              ) : (
                // Optional fallback component, could be an empty div or any default content you want to show
                <div>No data available for selected metric.</div>
              )}
            </ResponsiveContainer>
          </div>

        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertsData.map((alert) => (
              <div
                key={alert.id}
                className="border-b pb-4 cursor-pointer hover:bg-gray-100 p-4 rounded-lg"
                onClick={() => handleAlertDetails(alert)}
              >
                <p className="font-medium">{alert.title}</p>
                <p className="text-gray-500">{alert.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert Dialog */}
      <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
        <AlertDialogContent>
          {selectedAlert && (
            <>
              <AlertDialogHeader>
                <AlertDialogTitle>{selectedAlert.title}</AlertDialogTitle>
                <AlertDialogDescription>
                  {selectedAlert.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="py-4">
                <p className="mt-2 font-medium">
                  Severity: <span className="text-red-500">{selectedAlert.severity}</span>
                </p>
                <p className="font-medium">
                  Triggered: {new Date(selectedAlert.date).toLocaleString()}
                </p>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
