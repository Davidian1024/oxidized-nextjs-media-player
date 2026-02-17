'use client';

import { useEffect } from 'react';

export default function FCTCMediaPlayerYew() {
  useEffect(() => {
    let cancelled = false;

    async function loadPlayer() {
      const wasm = await import(
        "@/wasm/fctc-media-player-yew-lib/fctc_media_player_yew_lib"
      );

      if (cancelled) return;

      await wasm.default(); // init()
      wasm.mount_media_player("#media-player-widget");
    }

    loadPlayer();

    return () => {
      cancelled = true;
    };
  }, []);

  return <div className="text-6xl" id="media-player-widget" />;
}
