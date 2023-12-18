"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { useState, useEffect } from 'react';

export function ChristmassCountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const christmas = new Date(now.getFullYear(), 11, 25);
      if (now.getTime() > christmas.getTime()) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }
      const diff = christmas.getTime() - now.getTime();
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Days Until Christmas</h1>
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Days</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-6xl font-bold">{days}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Hours</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-6xl font-bold">{hours}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Minutes</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-6xl font-bold">{minutes}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Seconds</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-6xl font-bold">{seconds}</CardContent>
        </Card>
      </div>
    </main>
  );
}