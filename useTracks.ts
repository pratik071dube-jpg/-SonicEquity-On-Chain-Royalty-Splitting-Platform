'use client';

import { useState, useEffect, useCallback } from 'react';
import { useWallet } from './useWallet';

export interface Track {
  track_id: string;
  split_contract: string;
  creator: string;
  created_at: number;
}

export function useTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { publicKey } = useWallet();

  const fetchTracks = useCallback(() => {
    if (!publicKey) {
      setTracks([]);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    try {
      // In a real app, this would fetch from a database or indexer.
      // For this frontend-only app, we use localStorage.
      const stored = localStorage.getItem(`stellar_tracks_${publicKey}`);
      if (stored) {
        setTracks(JSON.parse(stored));
      } else {
        setTracks([]);
      }
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch tracks');
    } finally {
      setIsLoading(false);
    }
  }, [publicKey]);

  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  return { tracks, isLoading, error, refetch: fetchTracks };
}

export function useTrackDetails(trackId: string) {
  const [track, setTrack] = useState<Track | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { publicKey } = useWallet();

  useEffect(() => {
    if (!publicKey || !trackId) {
      setTrack(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const stored = localStorage.getItem(`stellar_tracks_${publicKey}`);
      if (stored) {
        const tracks: Track[] = JSON.parse(stored);
        const found = tracks.find(t => t.track_id === trackId);
        setTrack(found || null);
      } else {
        setTrack(null);
      }
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch track details');
    } finally {
      setIsLoading(false);
    }
  }, [publicKey, trackId]);

  return { track, isLoading, error };
}

export function saveTrack(track: Track) {
  const stored = localStorage.getItem(`stellar_tracks_${track.creator}`);
  let tracks: Track[] = [];
  if (stored) {
    tracks = JSON.parse(stored);
  }
  tracks.push(track);
  localStorage.setItem(`stellar_tracks_${track.creator}`, JSON.stringify(tracks));
}
