"use client"

import FeedStream from "./components/feeds/FeedStream";
import Stream from "./components/streams/Stream";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <FeedStream />
    </main>
  );
}
