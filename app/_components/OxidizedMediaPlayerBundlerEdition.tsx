'use client';

import { useEffect, useRef } from 'react';
// import init, { mount_media_player } from 'oxidized-media-player';

export default function OxidizedMediaPlayerBundlerEdition() {

    const playerContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadPlayer() {
            const wasm = await import("oxidized_media_player");

            if (cancelled || !playerContainerRef.current) return;

            // await init();
            // mount_media_player(playerContainerRef.current);

            await wasm.default();
            wasm.mount_media_player(playerContainerRef.current);
        }

        loadPlayer();

        return () => {
            cancelled = true;
        };
    }, []);

    return <div className="text-6xl" ref={playerContainerRef}/>;
}
