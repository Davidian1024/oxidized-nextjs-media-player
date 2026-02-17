'use client';

import { useEffect, useRef } from 'react';

export default function OxidizedMediaPlayer() {
    const playerContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadPlayer() {
            const wasm = await import(
                "@/wasm/oxidized-media-player/oxidized_media_player"
            );

            if (cancelled || !playerContainerRef.current) return;

            await wasm.default(); // init()
            wasm.mount_media_player(playerContainerRef.current);
        }

        loadPlayer();

        return () => {
            cancelled = true;
        };
    }, []);

    return <div className="text-6xl" ref={playerContainerRef} />;
}
